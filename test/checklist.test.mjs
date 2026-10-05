import assert from "node:assert/strict";
import test from "node:test";
import { onboardingPlan } from "../dist/src/data/onboarding.js";
import { canContinue, requirementLabel } from "../dist/src/domain/checklist.js";
import { isAllStepsComplete } from "../dist/src/app.js";

const item = (required, completed) => ({ id: `${required}-${completed}`, label: "Test item", required, completed });

const canonicalM2Checklist = [
  "I have provided the information requested by Next TI.",
  "I have confirmed who can participate in the onboarding activities.",
  "I have completed the Meta Business action requested for this project.",
  "I have provided the required Meta Business information to Next TI.",
  "I have access to the WhatsApp number for the requested onboarding activity.",
  "I have completed the number confirmations requested by Next TI.",
  "I have provided the 8x8 configuration information requested by Next TI.",
  "Next TI has confirmed that this stage is ready to move forward.",
  "I have confirmed the information needed for the integration handoff.",
  "Next TI has confirmed that the integration is ready for testing.",
  "I have completed the agreed test scenarios.",
  "I have shared the test findings with Next TI.",
  "I confirm the solution is ready to proceed to the next stage.",
  "I approve the customer readiness confirmation for go-live.",
  "Next TI has confirmed the go-live coordination is ready.",
  "I have reviewed the operational information provided for this project.",
  "I confirm that the onboarding handover is complete.",
];

test("requirement labels follow the required value", () => {
  assert.equal(requirementLabel(true), "Required");
  assert.equal(requirementLabel(false), "Optional");
});

test("required incomplete blocks progression", () => {
  assert.equal(canContinue([item(true, false)]), false);
});

test("all required items complete allows progression", () => {
  assert.equal(canContinue([item(true, true)]), true);
});

test("optional incomplete does not block progression", () => {
  assert.equal(canContinue([item(true, true), item(false, false)]), true);
});

test("required incomplete blocks even when optional is complete", () => {
  assert.equal(canContinue([item(true, false), item(false, true)]), false);
});

test("all required items must be complete", () => {
  const checklist = [item(true, true), item(true, false)];
  assert.equal(canContinue(checklist), false);
  checklist[1].completed = true;
  assert.equal(canContinue(checklist), true);
});

test("zero required items allows progression deterministically", () => {
  assert.equal(canContinue([item(false, false)]), true);
  assert.equal(canContinue([]), true);
});

test("canonical M2 checklist remains the only required progression set", () => {
  const requiredChecklist = onboardingPlan.milestones
    .flatMap((milestone) => milestone.steps)
    .flatMap((step) => step.checklist)
    .filter((item) => item.required);

  assert.equal(requiredChecklist.length, 17);
  assert.deepEqual(
    requiredChecklist.map((item) => item.label),
    canonicalM2Checklist,
  );
});

test("step 2 reflects customer-side submission while Meta verification is asynchronous", () => {
  const step2 = onboardingPlan.milestones[1].steps[0];
  assert.match(step2.nextAction, /submission|asynchronous|verified/i);
  assert.doesNotMatch(step2.nextAction, /continue once Meta shows Verified/i);
  assert.doesNotMatch(step2.exitCriteria, /Meta has confirmed the business as Verified/i);
  assert.match(step2.description, /verification process/i);
  assert.match(step2.blockers[0].whatHappened, /has not yet reached.*Verified state/i);
});

test("all steps complete is detected without a separate Meta verification gate", () => {
  const plan = JSON.parse(JSON.stringify(onboardingPlan));
  plan.milestones.forEach((milestone) => {
    milestone.steps.forEach((step) => {
      step.status = "Completed";
    });
  });
  assert.equal(isAllStepsComplete(plan), true);
});

test("step 3 clarifies asynchronous Meta review is external and not a hard portal gate", () => {
  const step3 = onboardingPlan.milestones[2].steps[0];
  assert.match(step3.description, /Meta verification may still be pending externally/i);
  assert.match(step3.prerequisites[0].description, /Step 2/i);
  assert.match(step3.externalDependency.description, /not a new portal Continue gate/i);
  assert.match(step3.nextAction, /may still be in progress externally/i);
  assert.doesNotMatch(step3.nextAction, /wait until Meta is Verified before proceeding/i);
  assert.doesNotMatch(step3.exitCriteria, /Meta Verified is required to continue/i);
});