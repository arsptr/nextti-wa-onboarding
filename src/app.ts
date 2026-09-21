import { onboardingPlan } from "./data/onboarding.js";
import type { OnboardingPlan, OnboardingStatus } from "./domain/onboarding.js";

const app = document.querySelector<HTMLElement>("#app");

type View = "overview" | "step";

const checklistState = new Map<string, boolean>();
let currentStepId = onboardingPlan.currentStepId ?? onboardingPlan.milestones[0]?.steps[0]?.id;
let view: View = "overview";

function allSteps(plan: OnboardingPlan) {
  return plan.milestones.flatMap((milestone) => milestone.steps);
}

function currentStep() {
  return allSteps(onboardingPlan).find((step) => step.id === currentStepId);
}

function stepIndex(stepId: string) {
  return allSteps(onboardingPlan).findIndex((step) => step.id === stepId);
}

function isUnlocked(stepId: string) {
  const index = stepIndex(stepId);
  return index === 0 || allSteps(onboardingPlan)[index - 1]?.status === "Completed";
}

function isRequiredComplete(stepId: string) {
  const step = allSteps(onboardingPlan).find((item) => item.id === stepId);
  return Boolean(step && step.checklist.filter((item) => item.required).every((item) => checklistState.get(item.id)));
}

function statusMark(status: OnboardingStatus) {
  return status === "Completed" ? "✓" : status === "Current" ? "●" : "○";
}

function statusLabel(status: OnboardingStatus) {
  return status === "Not Started" ? "Locked" : status;
}

function updateStatuses() {
  const steps = allSteps(onboardingPlan);
  steps.forEach((step, index) => {
    if (step.status === "Completed") return;
    step.status = index === stepIndex(currentStepId ?? "") ? "Current" : "Not Started";
  });
  onboardingPlan.milestones.forEach((milestone) => {
    const statuses = milestone.steps.map((step) => step.status);
    milestone.status = statuses.every((status) => status === "Completed")
      ? "Completed"
      : statuses.includes("Current")
        ? "Current"
        : "Not Started";
  });
}

function renderError() {
  return `<main class="shell"><p class="eyebrow">Next TI WhatsApp Onboarding</p><h1>Onboarding structure unavailable</h1><p>There is no step data to display yet.</p></main>`;
}

function updateChecklistControls(stepId: string) {
  const complete = isRequiredComplete(stepId);
  const continueButton = app?.querySelector<HTMLButtonElement>('[data-action="continue"]');
  const helper = app?.querySelector<HTMLElement>("[data-helper]");
  if (continueButton) continueButton.disabled = !complete;
  if (helper) helper.textContent = complete
    ? "All required confirmations are complete."
    : "Complete every required confirmation to continue.";
}

function renderOwnership(owner: string) {
  return `<span class="owner-label">${owner}</span>`;
}

function renderStepDetails(step: NonNullable<ReturnType<typeof currentStep>>) {
  return `
    <section class="step-details" aria-label="Step guidance">
      <div class="detail-section">
        <p class="section-label">What this step is for</p>
        <p>${step.objective}</p>
      </div>
      <div class="detail-section">
        <p class="section-label">Before you begin</p>
        <ul>
          ${(step.prerequisites ?? []).map((prerequisite) => `<li>${prerequisite.description}</li>`).join("") || "<li>No additional prerequisite is specified.</li>"}
        </ul>
      </div>
      <div class="detail-section">
        <p class="section-label">Who does what</p>
        <ul class="action-list">
          ${step.actions.map((action) => `<li><strong>${renderOwnership(action.owner)}</strong><span>${action.description}</span></li>`).join("")}
        </ul>
      </div>
      ${step.externalDependency ? `
        <div class="detail-section dependency-section">
          <p class="section-label">External dependency</p>
          <p><strong>${renderOwnership(step.externalDependency.owner)}</strong> ${step.externalDependency.description}</p>
        </div>
      ` : ""}
      ${step.blockers?.map((blocker) => `
        <section class="blocker-section" aria-labelledby="blocker-${blocker.id}">
          <p class="section-label">If progress is blocked</p>
          <h3 id="blocker-${blocker.id}">${blocker.title}</h3>
          <dl>
            <div><dt>What happened</dt><dd>${blocker.whatHappened}</dd></div>
            <div><dt>Why it matters</dt><dd>${blocker.whyItMatters}</dd></div>
            <div><dt>Owner</dt><dd>${renderOwnership(blocker.owner)}</dd></div>
            <div><dt>What to check</dt><dd>${blocker.whatToCheck}</dd></div>
            <div><dt>Next TI can help with</dt><dd>${blocker.nextTiHelp}</dd></div>
            ${blocker.nextAction ? `<div><dt>What happens next</dt><dd>${blocker.nextAction}</dd></div>` : ""}
          </dl>
        </section>
      `).join("") ?? ""}
      <div class="exit-section">
        <p class="section-label">Exit criteria</p>
        <p>${step.exitCriteria}</p>
      </div>
    </section>
  `;
}

function renderMilestones() {
  return `
    <nav class="milestones" aria-label="Onboarding milestones">
      <p class="section-label">Your position</p>
      <ol>
        ${onboardingPlan.milestones.map((milestone) => `
          <li class="milestone milestone-${milestone.status.toLowerCase().replaceAll(" ", "-")}">
            <span class="status-mark" aria-hidden="true">${statusMark(milestone.status)}</span>
            <div>
              <span class="milestone-number">${String(milestone.number).padStart(2, "0")}</span>
              <strong>${milestone.title}</strong>
              <span class="status-label">${statusLabel(milestone.status)}</span>
            </div>
          </li>
        `).join("")}
      </ol>
    </nav>
  `;
}

function renderStepList() {
  return `
    <section class="step-list" aria-labelledby="steps-heading">
      <div class="section-heading">
        <p class="section-label">Sequence</p>
        <h2 id="steps-heading">Steps in this skeleton</h2>
      </div>
      <ol>
        ${allSteps(onboardingPlan).map((step) => {
          const unlocked = isUnlocked(step.id);
          const isActive = step.id === currentStepId;
          return `
            <li>
              <button class="step-link ${isActive ? "is-active" : ""}" data-step-id="${step.id}" ${unlocked ? "" : "disabled"} aria-current="${isActive ? "step" : "false"}">
                <span class="step-link-number">${String(step.number).padStart(2, "0")}</span>
                <span>
                  <strong>${step.title}</strong>
                  <small>${statusLabel(step.status)}</small>
                </span>
              </button>
            </li>
          `;
        }).join("")}
      </ol>
    </section>
  `;
}

function renderOverview() {
  const step = currentStep();
  if (!step) return renderError();
  return `
    <main class="shell">
      <header class="page-header">
        <p class="eyebrow">Next TI WhatsApp Onboarding</p>
        <h1>Start with the onboarding path.</h1>
        <p class="intro">This working outline shows how a customer moves from one step to the next. Operational instructions will be added later.</p>
      </header>
      <div class="layout">
        <aside>${renderMilestones()}${renderStepList()}</aside>
        <section class="content-column" aria-labelledby="current-step-heading">
          <div class="current-callout">
            <p class="section-label">Next action</p>
            <h2 id="current-step-heading">${step.title}</h2>
            <p>${step.description}</p>
            <span class="status-line"><span aria-hidden="true">●</span> Current step</span>
            <p class="next-action"><strong>Next:</strong> ${step.nextAction}</p>
            <button class="primary-action" data-action="start">Open current step</button>
          </div>
          <div class="sequence-note">
            <p class="section-label">How this works</p>
            <p>Complete the required confirmations in order. Future steps stay locked until the current step is complete.</p>
          </div>
        </section>
      </div>
    </main>
  `;
}

function renderStep() {
  const step = currentStep();
  if (!step) return renderError();
  const canContinue = isRequiredComplete(step.id);
  return `
    <main class="shell">
      <header class="step-header">
        <button class="back-link" data-action="overview">Back to overview</button>
        <p class="eyebrow">Step ${String(step.number).padStart(2, "0")} of the onboarding path</p>
        <h1>${step.title}</h1>
        <p class="intro">${step.description}</p>
        <span class="status-line"><span aria-hidden="true">●</span> ${statusLabel(step.status)}</span>
      </header>
      <div class="layout step-layout">
        <aside>${renderMilestones()}${renderStepList()}</aside>
        <section class="content-column">
          <div class="checklist" data-step-id="${step.id}">
            <div class="section-heading">
              <p class="section-label">Before you continue</p>
              <h2>Required confirmations</h2>
            </div>
            <fieldset>
              <legend class="visually-hidden">Required confirmations for ${step.title}</legend>
              ${step.checklist.map((item) => `
                <label class="check-item">
                  <input type="checkbox" data-checklist-id="${item.id}" ${checklistState.get(item.id) ? "checked" : ""} ${item.required ? "required" : ""} />
                  <span>${item.label}${item.required ? "" : " (optional)"}</span>
                </label>
              `).join("")}
            </fieldset>
            <p class="helper-text" data-helper>${canContinue ? "All required confirmations are complete." : "Complete every required confirmation to continue."}</p>
            <button class="primary-action" data-action="continue" ${canContinue ? "" : "disabled"}>Continue to next step</button>
          </div>
          ${renderStepDetails(step)}
        </section>
      </div>
    </main>
  `;
}

function render() {
  if (!app) return;
  app.innerHTML = onboardingPlan.milestones.length === 0
    ? renderError()
    : view === "overview" ? renderOverview() : renderStep();
  bindEvents();
}

function bindEvents() {
  app?.querySelectorAll<HTMLButtonElement>("button[data-step-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const stepId = button.dataset.stepId;
      if (!stepId || !isUnlocked(stepId)) return;
      currentStepId = stepId;
      view = "step";
      render();
    });
  });

  app?.querySelector<HTMLButtonElement>('[data-action="start"]')?.addEventListener("click", () => {
    view = "step";
    render();
  });

  app?.querySelector<HTMLButtonElement>('[data-action="overview"]')?.addEventListener("click", () => {
    view = "overview";
    render();
  });

  app?.querySelectorAll<HTMLInputElement>("[data-checklist-id]").forEach((checkbox) => {
    const updateChecklistState = () => {
      const checklistId = checkbox.dataset.checklistId;
      if (checklistId) checklistState.set(checklistId, checkbox.checked);
      const stepId = checkbox.closest<HTMLElement>("[data-step-id]")?.dataset.stepId;
      if (stepId) updateChecklistControls(stepId);
    };
    checkbox.addEventListener("input", updateChecklistState);
    checkbox.addEventListener("change", updateChecklistState);
  });

  app?.querySelector<HTMLButtonElement>('[data-action="continue"]')?.addEventListener("click", () => {
    const step = currentStep();
    if (!step || !isRequiredComplete(step.id)) return;
    step.status = "Completed";
    const nextStep = allSteps(onboardingPlan)[stepIndex(step.id) + 1];
    if (nextStep) {
      currentStepId = nextStep.id;
      nextStep.status = "Current";
    }
    updateStatuses();
    view = nextStep ? "step" : "overview";
    render();
  });
}

render();
