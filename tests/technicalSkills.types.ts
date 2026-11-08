import type { ProjectTechStack } from "../src/data/technologyCategories";

export const valid: ProjectTechStack = { frontend: ["Unregistered technology"] };
export const empty: ProjectTechStack = {};
export const invalid: ProjectTechStack = {
  // @ts-expect-error Category keys must come from the central configuration.
  frontned: ["React"],
};
