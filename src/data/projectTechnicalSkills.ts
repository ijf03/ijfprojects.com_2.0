import type { Project } from "../types/project";
import type { SkillGroup } from "../types/skill";
import { findTechnology, technologyCategories } from "./technologyCategories";

export function getTechnicalSkillsFromProjects(
  projects: readonly Pick<Project, "techStack">[],
): string[] {
  const skills = new Map<string, string>();

  for (const project of projects) {
    for (const value of project.techStack) {
      if (typeof value !== "string") continue;
      const trimmed = value.trim();
      const skill = findTechnology(trimmed)?.name ?? trimmed;
      if (skill && !skills.has(skill.toLowerCase())) {
        skills.set(skill.toLowerCase(), skill);
      }
    }
  }

  return [...skills.values()].sort((a, b) =>
    a.localeCompare(b, "en", { sensitivity: "base" }),
  );
}

export function getUncategorisedTechnologies(
  projects: readonly Pick<Project, "techStack">[],
): string[] {
  return getTechnicalSkillsFromProjects(projects).filter((skill) => !findTechnology(skill));
}

export function getTechnicalSkillGroups(
  projects: readonly Pick<Project, "techStack">[],
): SkillGroup[] {
  const skills = getTechnicalSkillsFromProjects(projects);
  const groups = technologyCategories.map(({ title }) => ({ title, skills: [] as string[] }));
  const otherSkills: string[] = [];

  for (const skill of skills) {
    const category = findTechnology(skill)?.category;
    const group = groups.find(({ title }) => title === category);
    (group?.skills ?? otherSkills).push(skill);
  }
  if (otherSkills.length) groups.push({ title: "Other Technologies", skills: otherSkills });
  return groups.filter((group) => group.skills.length > 0);
}
