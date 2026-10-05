import type { ChecklistItem } from "./onboarding.js";

export function canContinue(checklist: ChecklistItem[]): boolean {
  return checklist
    .filter((item) => item.required)
    .every((item) => item.completed);
}

export function requirementLabel(required: boolean): "Required" | "Optional" {
  return required ? "Required" : "Optional";
}