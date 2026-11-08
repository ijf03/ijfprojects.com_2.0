/** Homepage display order; project views use each project's declared order. */
export const technologyCategories = [
  { key: "languages", title: "Languages" },
  { key: "frontend", title: "Frontend" },
  { key: "backend", title: "Backend & APIs" },
  { key: "mobile", title: "Mobile Development" },
  { key: "databases", title: "Databases" },
  { key: "machineLearning", title: "AI & Machine Learning" },
  { key: "devops", title: "DevOps & Tools" },
  { key: "integrations", title: "APIs & Integrations" },
  { key: "gameCreative", title: "Game & Creative Tech" },
] as const;

export type TechnologyCategory = (typeof technologyCategories)[number]["key"];
export type ProjectTechStack = Partial<Record<TechnologyCategory, string[]>>;

// Only spelling aliases belong here; new technologies need no registration.
const aliases: Readonly<Record<string, string>> = {
  react: "React", reactjs: "React", "react.js": "React",
  "node.js": "Node.js", nodejs: "Node.js",
  express: "Express", "express.js": "Express",
};

export function normalizeTechnology(value: string): string {
  const trimmed = value.trim();
  const key = trimmed.toLowerCase();
  return Object.hasOwn(aliases, key) ? aliases[key] : trimmed;
}

/** Preserve recorded names, category insertion order, and order within categories. */
export function flattenTechStack(techStack: ProjectTechStack): string[] {
  return Object.values(techStack).flatMap((technologies) => technologies ?? []);
}
