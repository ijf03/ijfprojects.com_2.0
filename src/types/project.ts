export type ProjectMediaType = "image" | "video";

export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Ongoing"
  | "Archived";

export interface ProjectMedia {
  type: ProjectMediaType;
  src: string;
  alt: string;
  caption?: string;
  poster?: string;
}

export interface ProjectLinks {
  github?: string;
  live?: string;
  caseStudy?: string;
}

export interface CaseStudySection {
  id: string;
  title: string;
  eyebrow?: string;
  paragraphs: string[];
  highlights?: string[];
  media?: ProjectMedia[];
}

export interface ProjectChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface ProjectOutcome {
  summary: string;
  highlights: string[];
}

export interface ProjectCaseStudy {
  introduction?: string;
  problem?: string[];
  goals?: string[];
  responsibilities?: string[];
  process?: CaseStudySection[];
  challenges?: ProjectChallenge[];
  outcome?: ProjectOutcome;
  learnings?: string[];
  nextSteps?: string[];
}

export interface Project {
  slug: string;
  title: string;
  type: string;
  year: string;
  featured: boolean;
  status?: ProjectStatus;

  shortDescription: string;
  overview: string;

  client?: string;
  role?: string;
  duration?: string;
  team?: string[];
  categories?: string[];

  stack: string[];
  features: string[];

  coverImage: string;
  media: ProjectMedia[];
  links: ProjectLinks;

  caseStudy?: ProjectCaseStudy;
}
