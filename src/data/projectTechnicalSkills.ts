import type { Project } from "../types/project";
import type { SkillGroup } from "../types/skill";
import { normalizeTechnology, technologyCategories } from "./technologyCategories.ts";

type TechnologyProject = Pick<Project, "techStack">;

export function getTechnicalSkillGroups(projects: readonly TechnologyProject[]): SkillGroup[] {
  return technologyCategories.map(({ key, title }) => {
    const skills = new Map<string, string>();
    for (const project of projects) {
      for (const value of project.techStack[key] ?? []) {
        const skill = normalizeTechnology(value);
        if (skill && !skills.has(skill.toLowerCase())) skills.set(skill.toLowerCase(), skill);
      }
    }
    return {
      title,
      skills: [...skills.values()].sort((a, b) => a.localeCompare(b, "en", { sensitivity: "base" })),
    };
  }).filter(({ skills }) => skills.length > 0);
}

/** Report conflicting assignments without overriding a project's categories. */
export function getTechnologyCategoryConflicts(projects: readonly TechnologyProject[]): string[] {
  const assignments = new Map<string, { name: string; categories: Set<string> }>();
  for (const { title, skills } of getTechnicalSkillGroups(projects)) {
    for (const name of skills) {
      const key = name.toLowerCase();
      const assignment = assignments.get(key) ?? { name, categories: new Set<string>() };
      assignment.categories.add(title);
      assignments.set(key, assignment);
    }
  }
  return [...assignments.values()]
    .filter(({ categories }) => categories.size > 1)
    .map(({ name, categories }) => name + ": " + [...categories].join(", "));
}
