export const onboardingStatuses = [
  "Not Started",
  "Current",
  "In Progress",
  "Completed",
  "Blocked",
  "Waiting for External Party",
] as const;

export type OnboardingStatus = (typeof onboardingStatuses)[number];

export const owners = [
  "YOU / CUSTOMER",
  "NEXT TI",
  "8x8",
  "META",
  "YOU + NEXT TI",
] as const;

export type Owner = (typeof owners)[number];

export interface Prerequisite {
  id: string;
  description: string;
}

export interface ChecklistItem {
  id: string;
  label: string;
  required: boolean;
  completed: boolean;
}

export interface Blocker {
  id: string;
  title: string;
  whatHappened: string;
  whyItMatters: string;
  owner: Owner;
  whatToCheck: string;
  nextTiHelp: string;
  nextAction?: string;
}

export interface StepAction {
  id: string;
  owner: Owner;
  description: string;
}

export interface ExternalDependency {
  owner: Owner;
  description: string;
}

export interface OnboardingStep {
  id: string;
  number: number;
  title: string;
  description: string;
  objective: string;
  owner: Owner[];
  status: OnboardingStatus;
  prerequisites?: Prerequisite[];
  actions: StepAction[];
  externalDependency?: ExternalDependency;
  checklist: ChecklistItem[];
  blockers?: Blocker[];
  nextAction: string;
  exitCriteria: string;
}

export interface Milestone {
  id: string;
  number: number;
  title: string;
  status: OnboardingStatus;
  steps: OnboardingStep[];
}

export interface OnboardingPlan {
  milestones: Milestone[];
  currentMilestoneId?: string;
  currentStepId?: string;
}
