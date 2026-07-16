export type ExperienceType =
  | "Work"
  | "Leadership"
  | "Community"
  | "Freelance";

export interface Experience {
  role: string;
  organisation: string;
  period: string;
  type: ExperienceType;
  description: string;
  highlights: string[];
  skills: string[];
  link?: string;
}
