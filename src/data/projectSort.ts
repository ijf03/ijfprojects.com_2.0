import type { Project } from "../types/project";

export type ProjectSortOrder = "newest" | "oldest";

const months = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

export function sortProjectsByDate<T extends Pick<Project, "year" | "completedDate">>(
  projects: readonly T[],
  order: ProjectSortOrder = "newest",
): T[] {
  const direction = order === "newest" ? -1 : 1;
  return [...projects].sort((a, b) => {
    const yearDifference = Number(a.year) - Number(b.year);
    if (yearDifference) return direction * yearDifference;

    const monthA = months.indexOf(a.completedDate?.split(" ")[0].toLowerCase() ?? "");
    const monthB = months.indexOf(b.completedDate?.split(" ")[0].toLowerCase() ?? "");
    // Year-only dates follow known months in that year; ties retain their order.
    if (monthA === -1 || monthB === -1) {
      return Number(monthA === -1) - Number(monthB === -1);
    }
    return direction * (monthA - monthB);
  });
}
