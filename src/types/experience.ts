export type Experience = {
  role: string;
  organisation: string;
  period: string;
  type: "Work" | "Leadership" | "Community";
  description: string;
  highlights: string[];
  skills: string[];
};