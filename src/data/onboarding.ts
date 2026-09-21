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
          title: "Confirm onboarding readiness",
          description: "Gather the information and access needed to begin the WhatsApp onboarding journey.",
          objective: "Make sure the customer and project are ready before platform-specific work begins.",
          owner: ["YOU / CUSTOMER", "NEXT TI"],
          status: "Current",
          prerequisites: [
            { id: "preparation-project-context", description: "Confirm the project-specific requirements with Next TI." },
          ],
          actions: [
            { id: "preparation-customer-action", owner: "YOU / CUSTOMER", description: "Provide the customer information requested by Next TI." },
            { id: "preparation-next-ti-action", owner: "NEXT TI", description: "Confirm the onboarding scope and explain any information still needed." },
          ],
          checklist: [
            { id: "preparation-information", label: "I have provided the information requested by Next TI.", required: true },
            { id: "preparation-access", label: "I have confirmed who can participate in the onboarding activities.", required: true },
          ],
          nextAction: "Complete the preparation confirmations so the platform-specific stages can begin.",
          exitCriteria: "The required preparation information and participation are confirmed.",
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
          title: "Prepare the Meta Business environment",
          description: "Complete the customer-side Meta Business actions identified for this onboarding.",
          objective: "Prepare the Meta Business environment required for the WhatsApp onboarding flow.",
          owner: ["YOU / CUSTOMER", "NEXT TI", "META"],
          status: "Not Started",
          prerequisites: [
            { id: "meta-preparation-complete", description: "Complete the required preparation confirmations." },
          ],
          actions: [
            { id: "meta-customer-action", owner: "YOU / CUSTOMER", description: "Complete the Meta Business action requested for your project." },
            { id: "meta-next-ti-action", owner: "NEXT TI", description: "Explain the required information and validate what you provide." },
          ],
          externalDependency: {
            owner: "META",
            description: "Meta controls any business verification or platform decision. Confirm the exact requirement with Next TI.",
          },
          checklist: [
            { id: "meta-business-action", label: "I have completed the Meta Business action requested for this project.", required: true },
            { id: "meta-business-information", label: "I have provided the required Meta Business information to Next TI.", required: true },
          ],
          blockers: [
            {
              id: "meta-verification-pending",
              title: "Meta status is still pending",
              whatHappened: "The Meta-controlled status has not been confirmed as ready.",
              whyItMatters: "The next onboarding stage may depend on the required Meta Business setup being ready.",
              owner: "META",
              whatToCheck: "Confirm the submitted information and current status with Next TI.",
              nextTiHelp: "Next TI can help review the preparation, but Meta controls the decision.",
              nextAction: "Wait for the required Meta status to be confirmed before continuing.",
            },
          ],
          nextAction: "Complete the customer-side Meta action and provide the resulting information to Next TI.",
          exitCriteria: "The required Meta Business setup is confirmed ready for WhatsApp onboarding.",
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
          title: "Prepare the WhatsApp number",
          description: "Confirm that the WhatsApp number is available for the onboarding activities defined for this project.",
          objective: "Prepare and validate the WhatsApp number before configuration begins.",
          owner: ["YOU / CUSTOMER", "NEXT TI"],
          status: "Not Started",
          prerequisites: [
            { id: "whatsapp-meta-ready", description: "Complete the required Meta Business setup." },
          ],
          actions: [
            { id: "whatsapp-customer-action", owner: "YOU / CUSTOMER", description: "Provide access to the WhatsApp number and complete the requested customer-side confirmations." },
            { id: "whatsapp-next-ti-action", owner: "NEXT TI", description: "Confirm the project-specific number requirements and readiness information." },
          ],
          externalDependency: {
            owner: "META",
            description: "Any Meta or WhatsApp platform process remains controlled by the external platform.",
          },
          checklist: [
            { id: "whatsapp-number-access", label: "I have access to the WhatsApp number for the requested onboarding activity.", required: true },
            { id: "whatsapp-number-confirmation", label: "I have completed the number confirmations requested by Next TI.", required: true },
          ],
          nextAction: "Confirm the number readiness items and provide any requested information to Next TI.",
          exitCriteria: "The WhatsApp number is confirmed ready for the next configuration stage.",
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
          title: "Complete the 8x8 configuration stage",
          description: "Coordinate the 8x8-side work required for this WhatsApp onboarding.",
          objective: "Prepare the 8x8 configuration for integration and testing.",
          owner: ["NEXT TI", "8x8", "YOU / CUSTOMER"],
          status: "Not Started",
          prerequisites: [
            { id: "8x8-number-ready", description: "Confirm the WhatsApp number is ready for configuration." },
          ],
          actions: [
            { id: "8x8-customer-action", owner: "YOU / CUSTOMER", description: "Provide any customer information requested for the 8x8 configuration." },
            { id: "8x8-next-ti-action", owner: "NEXT TI", description: "Coordinate the required configuration activities and communicate the next dependency." },
            { id: "8x8-platform-action", owner: "8x8", description: "Complete the 8x8-side configuration applicable to the implementation flow." },
          ],
          externalDependency: {
            owner: "8x8",
            description: "Some configuration activities depend on 8x8 platform-side work.",
          },
          checklist: [
            { id: "8x8-information", label: "I have provided the 8x8 configuration information requested by Next TI.", required: true },
            { id: "8x8-readiness", label: "Next TI has confirmed that this stage is ready to move forward.", required: true },
          ],
          nextAction: "Provide the requested information and wait for Next TI to confirm configuration readiness.",
          exitCriteria: "The required 8x8 configuration is confirmed ready for integration and testing.",
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
          title: "Prepare the integration for testing",
          description: "Connect the configured solution components according to the agreed implementation flow.",
          objective: "Make the configured WhatsApp environment available for customer testing.",
          owner: ["NEXT TI", "YOU + NEXT TI"],
          status: "Not Started",
          prerequisites: [
            { id: "integration-8x8-ready", description: "Confirm the required 8x8 configuration is ready." },
          ],
          actions: [
            { id: "integration-customer-action", owner: "YOU + NEXT TI", description: "Confirm the project information needed for the integration handoff." },
            { id: "integration-next-ti-action", owner: "NEXT TI", description: "Complete or coordinate the integration work within Next TI responsibility." },
          ],
          externalDependency: {
            owner: "8x8",
            description: "Integration readiness may depend on the configured external platform components.",
          },
          checklist: [
            { id: "integration-handoff", label: "I have confirmed the information needed for the integration handoff.", required: true },
            { id: "integration-ready", label: "Next TI has confirmed that the integration is ready for testing.", required: true },
          ],
          nextAction: "Confirm the integration handoff information and wait for testing readiness confirmation.",
          exitCriteria: "The integration is confirmed ready for testing.",
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
          title: "Complete testing and UAT",
          description: "Use the agreed test scenarios to validate the configured solution before go-live.",
          objective: "Confirm that the configured solution works against the agreed testing requirements.",
          owner: ["YOU / CUSTOMER", "NEXT TI"],
          status: "Not Started",
          prerequisites: [
            { id: "testing-integration-ready", description: "Confirm the integration is ready for testing." },
          ],
          actions: [
            { id: "testing-customer-action", owner: "YOU / CUSTOMER", description: "Perform UAT using the agreed test scenarios and report findings to Next TI." },
            { id: "testing-next-ti-action", owner: "NEXT TI", description: "Coordinate testing support, review findings, and communicate any required next action." },
          ],
          checklist: [
            { id: "testing-scenarios", label: "I have completed the agreed test scenarios.", required: true },
            { id: "testing-findings", label: "I have shared the test findings with Next TI.", required: true },
            { id: "testing-readiness", label: "I confirm the solution is ready to proceed to the next stage.", required: true },
          ],
          nextAction: "Complete the agreed test scenarios, share findings, and confirm readiness for go-live planning.",
          exitCriteria: "Required UAT activities are complete and readiness for go-live is confirmed.",
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
          title: "Confirm go-live readiness",
          description: "Confirm that the customer and Next TI are ready to move the validated solution into operational use.",
          objective: "Coordinate the final readiness confirmation before operational use begins.",
          owner: ["YOU / CUSTOMER", "NEXT TI"],
          status: "Not Started",
          prerequisites: [
            { id: "go-live-uat-complete", description: "Complete the required testing and UAT activities." },
          ],
          actions: [
            { id: "go-live-customer-action", owner: "YOU / CUSTOMER", description: "Approve customer readiness for go-live." },
            { id: "go-live-next-ti-action", owner: "NEXT TI", description: "Coordinate the go-live activity and communicate any remaining dependency." },
          ],
          externalDependency: {
            owner: "YOU + NEXT TI",
            description: "Go-live depends on both customer readiness and Next TI coordination, plus any applicable external dependency.",
          },
          checklist: [
            { id: "go-live-approval", label: "I approve the customer readiness confirmation for go-live.", required: true },
            { id: "go-live-coordination", label: "Next TI has confirmed the go-live coordination is ready.", required: true },
          ],
          nextAction: "Confirm customer readiness and wait for Next TI to confirm the go-live coordination.",
          exitCriteria: "The WhatsApp solution is confirmed live and ready for operational use.",
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
          title: "Complete the onboarding handover",
          description: "Confirm the final onboarding information and transition into normal operational ownership.",
          objective: "Close the onboarding journey with the relevant operational information available to the customer.",
          owner: ["NEXT TI", "YOU / CUSTOMER"],
          status: "Not Started",
          prerequisites: [
            { id: "handover-live", description: "Confirm the solution is ready for operational use." },
          ],
          actions: [
            { id: "handover-customer-action", owner: "YOU / CUSTOMER", description: "Confirm receipt of the relevant onboarding information provided for the project." },
            { id: "handover-next-ti-action", owner: "NEXT TI", description: "Provide the relevant operational information and confirm onboarding completion." },
          ],
          checklist: [
            { id: "handover-information", label: "I have reviewed the operational information provided for this project.", required: true },
            { id: "handover-confirmation", label: "I confirm that the onboarding handover is complete.", required: true },
          ],
          nextAction: "Review the provided operational information and confirm the onboarding handover.",
          exitCriteria: "The onboarding journey is formally considered complete.",
        },
      ],
    },
  ],
};
