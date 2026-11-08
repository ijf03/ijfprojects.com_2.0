import type { Project } from "../types/project";
import { flattenTechStack, normalizeTechnology } from "./technologyCategories.ts";

export function matchesProjectSearch(
  project: Pick<Project, "title" | "type" | "shortDescription" | "skills" | "techStack">,
  search: string,
): boolean {
  const query = search.trim().toLowerCase();
  if (!query) return true;
  const technologies = flattenTechStack(project.techStack);
  return [project.title, project.type, project.shortDescription, ...project.skills, ...technologies]
    .some((value) => value.toLowerCase().includes(query)) ||
    technologies.some((value) => normalizeTechnology(value).toLowerCase() === normalizeTechnology(query).toLowerCase());
}
