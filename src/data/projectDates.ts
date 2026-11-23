import type { Project } from "../types/project";

type ProjectDate = Pick<Project, "year" | "completedDate">;
const months = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
];

// Use explicit formats rather than browser-dependent Date.parse behaviour.
function parseDate(value: string): number | undefined {
  const date = value.trim();
  const iso = /^(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?$/.exec(date);
  const named = /^([a-z]+)\s+(\d{4})$/i.exec(date);
  const year = iso ? Number(iso[1]) : named ? Number(named[2]) : NaN;
  const month = iso ? Number(iso[2] ?? 1) - 1
    : named ? months.indexOf(named[1].toLowerCase()) : -1;
  const day = Number(iso?.[3] ?? 1);
  if (!Number.isFinite(year) || year < 1000 || month < 0 || month > 11) return;
  const timestamp = Date.UTC(year, month, day);
  const parsed = new Date(timestamp);
  if (parsed.getUTCFullYear() !== year || parsed.getUTCMonth() !== month || parsed.getUTCDate() !== day) return;
  return timestamp;
}

/** Missing month/day sort at the start of the known period; unknown dates sort last. */
export function projectDateTimestamp(project: ProjectDate): number {
  return parseDate(project.completedDate ?? "") ?? parseDate(project.year) ?? -Infinity;
}

/** Stable ties preserve registry order, without modifying the input array. */
export function sortProjectsByDate<T extends ProjectDate>(projects: readonly T[]): T[] {
  return [...projects].sort((a, b) => {
    const first = projectDateTimestamp(a);
    const second = projectDateTimestamp(b);
    return first === second ? 0 : first > second ? -1 : 1;
  });
}
