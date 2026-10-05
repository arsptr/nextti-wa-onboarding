import type { OnboardingPlan } from "../domain/onboarding.js";

export const onboardingPlan: OnboardingPlan = {
  milestones: [
    {
      id: "preparation",
      number: 1,
      title: "Preparation",
      status: "Current",
      steps: [
        {
          id: "preparation-readiness",
          number: 1,
          title: "Prepare the business and WhatsApp prerequisites",
          description: "Prepare the business information, documents, access, contact details, and WhatsApp number required for onboarding.",
          objective: "Prepare the information and prerequisites required before WhatsApp onboarding begins.",
          owner: ["YOU / CUSTOMER"],
          status: "Current",
          prerequisites: [
            { id: "preparation-customer-pic", description: "Identify the Customer PIC / Facebook Business Manager Admin for this onboarding." },
          ],
          actions: [
            { id: "preparation-customer-action", owner: "YOU / CUSTOMER", description: "Prepare the legal business name, matching business address, active business email, active business phone number, and the WhatsApp number to be onboarded." },
            { id: "preparation-documents-action", owner: "YOU / CUSTOMER", description: "Prepare the NIB, latest deed of establishment or amendment where applicable, NPWP, and a utility bill or other supporting business document when requested." },
            { id: "preparation-access-action", owner: "YOU / CUSTOMER", description: "Confirm that the Customer PIC can log in to Facebook Business Manager and access the relevant business environment." },
            { id: "preparation-next-ti-action", owner: "NEXT TI", description: "Guide the customer on the required preparation and confirm whether the prerequisites are sufficient to proceed." },
          ],
          externalDependency: {
            owner: "YOU / CUSTOMER",
            description: "The onboarding depends on the Customer PIC / Facebook Business Manager access and the active WhatsApp number being available.",
          },
          checklist: [
            { id: "preparation-information", label: "I have provided the information requested by Next TI.", required: true, completed: false },
            { id: "preparation-access", label: "I have confirmed who can participate in the onboarding activities.", required: true, completed: false },
          ],
          blockers: [
            {
              id: "preparation-incomplete",
              title: "Required preparation is incomplete",
              whatHappened: "Business information, documents, access, or the active WhatsApp number is still missing.",
              whyItMatters: "The onboarding cannot proceed until the required preparation is available.",
              owner: "YOU / CUSTOMER",
              whatToCheck: "Check which preparation item Next TI has identified as missing.",
              nextTiHelp: "Next TI can guide the required preparation and confirm whether the information is sufficient.",
              nextAction: "Complete the missing preparation requirement and provide or confirm it with Next TI.",
            },
          ],
          nextAction: "Complete the missing preparation requirement and confirm the complete set with Next TI.",
          exitCriteria: "All required preparation information, documents, access, and WhatsApp number prerequisites are available.",
        },
      ],
    },
    {
      id: "meta-business-setup",
      number: 2,
      title: "Meta Business Setup",
      status: "Not Started",
      steps: [
        {
          id: "meta-business-readiness",
          number: 2,
          title: "Complete Meta Business verification",
          description: "The Customer PIC / Facebook Business Manager Admin completes the Meta Business verification process.",
          objective: "Verify the customer's business through Meta so it is recognized as a legitimate and active legal business entity.",
          owner: ["YOU / CUSTOMER", "NEXT TI", "META"],
          status: "Not Started",
          prerequisites: [
            { id: "meta-preparation-complete", description: "Complete the preparation requirements and confirm Facebook Business Manager access." },
          ],
          actions: [
            { id: "meta-customer-action", owner: "YOU / CUSTOMER", description: "Log in to Facebook Business Manager, open the business information area, select Lihat Detail, continue to Security Center, select Mulai Verifikasi, and submit the information and documents requested by Meta, including NIB, the latest deed where applicable, NPWP, business email, and active business phone number." },
            { id: "meta-next-ti-action", owner: "NEXT TI", description: "Guide the Customer PIC through the verification process, help confirm the information and documents, and identify missing requirements." },
          ],
          externalDependency: {
            owner: "META",
            description: "Meta determines the verification result. Experience-based estimates range from approximately 2 business days in a normal or fast case to approximately 14 business days in some cases. The longest end-to-end onboarding flow previously experienced by the team was approximately 30 business days. These are not Meta SLA guarantees.",
          },
          checklist: [
            { id: "meta-business-action", label: "I have completed the Meta Business action requested for this project.", required: true, completed: false },
            { id: "meta-business-information", label: "I have provided the required Meta Business information to Next TI.", required: true, completed: false },
          ],
          blockers: [
            {
              id: "meta-verification-pending",
              title: "Meta Business verification is pending",
              whatHappened: "The business verification has not reached the required Verified state.",
              whyItMatters: "Dependent WhatsApp onboarding activities cannot proceed until the required Meta state is achieved.",
              owner: "META",
              whatToCheck: "Review the submitted business information, documents, and any additional requirement shown by Meta.",
              nextTiHelp: "Next TI can assist with reviewing the required information and guiding the verification process.",
              nextAction: "Resolve the outstanding Meta Business requirement and continue once the Verified state is confirmed.",
            },
            {
              id: "meta-verification-escalation",
              title: "Verification needs further attention",
              whatHappened: "The normal customer-side verification flow has not resolved the verification issue.",
              whyItMatters: "The required Meta Business state is still blocking dependent onboarding activities.",
              owner: "NEXT TI",
              whatToCheck: "Confirm the current Meta status and the information already submitted.",
              nextTiHelp: "Next TI may coordinate escalation through the applicable 8x8 / Meta process.",
              nextAction: "Keep the Customer PIC available for any additional information requested during follow-up.",
            },
          ],
          nextAction: "Complete the requested Meta Business information and documents, then continue once Meta shows Verified.",
          exitCriteria: "Meta has confirmed the business as Verified.",
        },
      ],
    },
    {
      id: "whatsapp-number-setup",
      number: 3,
      title: "WhatsApp Number Setup",
      status: "Not Started",
      steps: [
        {
          id: "whatsapp-number-readiness",
          number: 3,
          title: "Choose and prepare the WhatsApp number",
          description: "Confirm whether the onboarding uses a new WhatsApp number or an existing WhatsApp number / BSP migration path.",
          objective: "Prepare and onboard the WhatsApp number that will be used with the verified business.",
          owner: ["YOU / CUSTOMER", "NEXT TI", "8x8", "META"],
          status: "Not Started",
          prerequisites: [
            { id: "whatsapp-meta-ready", description: "Complete Meta Business verification." },
          ],
          actions: [
            { id: "whatsapp-customer-action", owner: "YOU / CUSTOMER", description: "Confirm the WhatsApp number, whether it is new or existing, that it remains active, and that it can receive SMS OTP." },
            { id: "whatsapp-migration-action", owner: "YOU / CUSTOMER", description: "If an existing WhatsApp number / BSP is being migrated, disable 2FA through the applicable WhatsApp management area in Facebook Business Manager before migration proceeds." },
            { id: "whatsapp-next-ti-action", owner: "NEXT TI", description: "Guide the customer through the applicable new-number or existing-number onboarding path and coordinate the applicable partner-led verification." },
          ],
          externalDependency: {
            owner: "8x8",
            description: "The applicable onboarding path can proceed through the 8x8 Connect flow. Partner-led verification can take less than approximately 3 business days in applicable cases. This is an experience-based estimate, not an SLA guarantee.",
          },
          checklist: [
            { id: "whatsapp-number-access", label: "I have access to the WhatsApp number for the requested onboarding activity.", required: true, completed: false },
            { id: "whatsapp-number-confirmation", label: "I have completed the number confirmations requested by Next TI.", required: true, completed: false },
          ],
          blockers: [
            {
              id: "whatsapp-number-2fa-enabled",
              title: "Existing number has 2FA enabled",
              whatHappened: "The prerequisite for the existing-number migration path is not complete.",
              whyItMatters: "The migration process cannot proceed until the required 2FA state is achieved.",
              owner: "YOU / CUSTOMER",
              whatToCheck: "Check the applicable WhatsApp management area in Facebook Business Manager.",
              nextTiHelp: "Next TI can guide the customer through the applicable customer-side preparation.",
              nextAction: "Disable 2FA, then continue the migration process.",
            },
          ],
          nextAction: "Confirm the number scenario, complete the applicable customer-side preparation, and continue through the applicable 8x8 Connect flow.",
          exitCriteria: "The applicable WhatsApp number onboarding or verification requirement is complete and the number is ready for integration.",
        },
      ],
    },
    {
      id: "8x8-configuration",
      number: 4,
      title: "8x8 Configuration",
      status: "Not Started",
      steps: [
        {
          id: "8x8-configuration-readiness",
          number: 4,
          title: "Coordinate 8x8 onboarding and verification",
          description: "Coordinate the applicable 8x8 onboarding and verification process for the WhatsApp integration.",
          objective: "Complete the applicable 8x8 onboarding and verification process required for the WhatsApp integration.",
          owner: ["YOU / CUSTOMER", "NEXT TI", "8x8", "META"],
          status: "Not Started",
          prerequisites: [
            { id: "8x8-number-ready", description: "Complete the applicable WhatsApp number onboarding or verification requirement." },
          ],
          actions: [
            { id: "8x8-customer-action", owner: "YOU / CUSTOMER", description: "Provide the business information and complete customer-owned actions requested during onboarding." },
            { id: "8x8-next-ti-action", owner: "NEXT TI", description: "Guide the Customer PIC, validate required information, coordinate onboarding, and assist with partner-led verification where applicable." },
            { id: "8x8-platform-action", owner: "8x8", description: "Coordinate or escalate business verification issues with Meta and investigate applicable partner-led verification issues." },
          ],
          externalDependency: {
            owner: "YOU + NEXT TI",
            description: "The process may involve the Customer, Next TI, 8x8, and Meta, and may require waiting for Meta's verification result.",
          },
          checklist: [
            { id: "8x8-information", label: "I have provided the 8x8 configuration information requested by Next TI.", required: true, completed: false },
            { id: "8x8-readiness", label: "Next TI has confirmed that this stage is ready to move forward.", required: true, completed: false },
          ],
          blockers: [
            {
              id: "8x8-external-verification",
              title: "Verification requires external resolution",
              whatHappened: "The required external verification state has not yet been achieved.",
              whyItMatters: "The WhatsApp environment cannot proceed to integration while verification remains unresolved.",
              owner: "NEXT TI",
              whatToCheck: "Confirm whether Next TI or 8x8 has requested additional information or follow-up.",
              nextTiHelp: "Next TI coordinates the applicable follow-up with 8x8 and Meta.",
              nextAction: "Remain available for additional information requests while the external follow-up is coordinated.",
            },
          ],
          nextAction: "Complete the outstanding customer or external dependency identified by Next TI.",
          exitCriteria: "The required 8x8 or partner-side onboarding process is complete and the WhatsApp environment is ready for integration.",
        },
      ],
    },
    {
      id: "integration",
      number: 5,
      title: "Integration",
      status: "Not Started",
      steps: [
        {
          id: "integration-readiness",
          number: 5,
          title: "Integrate the WhatsApp environment",
          description: "Integrate the verified WhatsApp environment with the applicable customer service platform.",
          objective: "Connect the configured WhatsApp environment with the target customer service solution.",
          owner: ["YOU / CUSTOMER", "NEXT TI", "8x8"],
          status: "Not Started",
          prerequisites: [
            { id: "integration-number-ready", description: "Confirm the WhatsApp number is verified and ready." },
            { id: "integration-service-ready", description: "Fulfill applicable agreed service or contract requirements where required." },
          ],
          actions: [
            { id: "integration-customer-action", owner: "YOU / CUSTOMER", description: "Provide the confirmation, information, or access required for the agreed customer service platform." },
            { id: "integration-next-ti-action", owner: "NEXT TI", description: "Perform or coordinate the applicable integration into C3, Moobidesk, or the applicable 8x8 customer service platform." },
          ],
          externalDependency: {
            owner: "8x8",
            description: "The applicable platform and technical stakeholders depend on the agreed customer solution.",
          },
          checklist: [
            { id: "integration-handoff", label: "I have confirmed the information needed for the integration handoff.", required: true, completed: false },
            { id: "integration-ready", label: "Next TI has confirmed that the integration is ready for testing.", required: true, completed: false },
          ],
          blockers: [
            {
              id: "integration-number-not-ready",
              title: "WhatsApp is not ready for integration",
              whatHappened: "The required WhatsApp verification or onboarding state has not been achieved.",
              whyItMatters: "Integration cannot proceed until the WhatsApp environment is ready.",
              owner: "YOU + NEXT TI",
              whatToCheck: "Confirm the outstanding WhatsApp onboarding requirement with Next TI.",
              nextTiHelp: "Next TI can identify the remaining onboarding dependency and coordinate the applicable follow-up.",
              nextAction: "Complete the outstanding WhatsApp onboarding requirement before continuing integration.",
            },
          ],
          nextAction: "Complete the required customer confirmation and continue once Next TI confirms the integration is ready for UAT.",
          exitCriteria: "The WhatsApp environment is integrated with the applicable customer service platform and ready for UAT.",
        },
      ],
    },
    {
      id: "testing-uat",
      number: 6,
      title: "Testing / UAT",
      status: "Not Started",
      steps: [
        {
          id: "testing-uat-readiness",
          number: 6,
          title: "Complete the WhatsApp UAT scenarios",
          description: "Validate the integrated WhatsApp service against the agreed business requirements before Go-Live.",
          objective: "Confirm that the integrated WhatsApp service works end-to-end for the agreed customer interaction flow.",
          owner: ["YOU / CUSTOMER", "NEXT TI", "8x8", "META"],
          status: "Not Started",
          prerequisites: [
            { id: "testing-integration-ready", description: "Confirm the WhatsApp integration is ready for UAT." },
          ],
          actions: [
            { id: "testing-customer-action", owner: "YOU / CUSTOMER", description: "The Customer PIC participates in UAT and confirms whether the tested behavior meets the agreed requirements." },
            { id: "testing-next-ti-action", owner: "NEXT TI", description: "Coordinate testing, record findings, validate issues, and coordinate technical resolution where applicable." },
          ],
          externalDependency: {
            owner: "YOU + NEXT TI",
            description: "Testing may involve 8x8, Meta, and other technical stakeholders where applicable.",
          },
          checklist: [
            { id: "testing-scenarios", label: "I have completed the agreed test scenarios.", required: true, completed: false },
            { id: "testing-findings", label: "I have shared the test findings with Next TI.", required: true, completed: false },
            { id: "testing-readiness", label: "I confirm the solution is ready to proceed to the next stage.", required: true, completed: false },
          ],
          blockers: [
            {
              id: "testing-failed-scenario",
              title: "A UAT scenario did not pass",
              whatHappened: "The observed behavior does not match the expected behavior for a tested scenario.",
              whyItMatters: "The service cannot be accepted for Go-Live until the applicable finding is investigated and retested.",
              owner: "YOU + NEXT TI",
              whatToCheck: "Document the scenario, expected behavior, observed behavior, owner, and next action, then send the finding to Next TI through the agreed communication channel.",
              nextTiHelp: "Next TI investigates the finding and coordinates the applicable resolution.",
              nextAction: "Repeat the applicable test after the finding has been addressed.",
            },
          ],
          nextAction: "Complete the UAT scenarios, send any findings to Next TI, and obtain Customer PIC confirmation for Go-Live.",
          exitCriteria: "Required UAT scenarios have passed and the Customer PIC confirms the service is ready for Go-Live.",
        },
      ],
    },
    {
      id: "go-live",
      number: 7,
      title: "Go-Live",
      status: "Not Started",
      steps: [
        {
          id: "go-live-readiness",
          number: 7,
          title: "Confirm the WhatsApp service is ready for Go-Live",
          description: "Confirm that verification, integration, UAT, and customer acceptance are complete before production use.",
          objective: "Confirm that the WhatsApp service is ready for production customer interaction.",
          owner: ["YOU / CUSTOMER", "NEXT TI", "8x8", "META"],
          status: "Not Started",
          prerequisites: [
            { id: "go-live-uat-complete", description: "Complete the required UAT scenarios and obtain Customer PIC confirmation." },
          ],
          actions: [
            { id: "go-live-customer-action", owner: "YOU / CUSTOMER", description: "Confirm the WhatsApp number, business name, messaging, customer responses, live-agent handling, and real-time agent replies are ready." },
            { id: "go-live-next-ti-action", owner: "NEXT TI", description: "Perform or coordinate the applicable Go-Live activities and confirm vendor PM readiness." },
          ],
          externalDependency: {
            owner: "YOU + NEXT TI",
            description: "Go-Live depends on the verified WhatsApp environment, operational integration, Customer PIC acceptance, and live-agent readiness.",
          },
          checklist: [
            { id: "go-live-approval", label: "I approve the customer readiness confirmation for go-live.", required: true, completed: false },
            { id: "go-live-coordination", label: "Next TI has confirmed the go-live coordination is ready.", required: true, completed: false },
          ],
          nextAction: "Complete the outstanding Go-Live requirement identified by Next TI.",
          exitCriteria: "The agreed Go-Live requirements are complete and the WhatsApp integration is ready for production use.",
        },
      ],
    },
    {
      id: "handover",
      number: 8,
      title: "Handover",
      status: "Not Started",
      steps: [
        {
          id: "handover-completion",
          number: 8,
          title: "Complete the WhatsApp service handover",
          description: "Confirm onboarding completion and provide access to the applicable customer service platforms.",
          objective: "Complete the onboarding journey and provide the customer with the agreed operational access.",
          owner: ["YOU / CUSTOMER", "NEXT TI"],
          status: "Not Started",
          prerequisites: [
            { id: "handover-live", description: "Confirm the WhatsApp service is ready for production use." },
          ],
          actions: [
            { id: "handover-customer-action", owner: "YOU / CUSTOMER", description: "Receive and confirm access to the applicable platforms for the implemented service." },
            { id: "handover-next-ti-action", owner: "NEXT TI", description: "Provide or coordinate handover of the applicable 8x8 Connect, Moobidesk, or C3 access." },
          ],
          externalDependency: {
            owner: "NEXT TI",
            description: "Only platforms applicable to the implemented customer service should be included in the handover.",
          },
          checklist: [
            { id: "handover-overview", label: "I have reviewed the operational information provided for this project.", required: true, completed: false },
            { id: "handover-complete", label: "I confirm that the onboarding handover is complete.", required: true, completed: false },
          ],
          nextAction: "Confirm receipt of the applicable platform access and complete any outstanding handover requirement.",
          exitCriteria: "The applicable access has been handed over and the agreed WhatsApp service is operational.",
        },
      ],
    },
  ],
};
