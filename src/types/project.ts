import type { ProjectTechStack } from "../data/technologyCategories";

export type ProjectStatus =
  | "Completed"
  | "In Development"
  | "Ongoing"
  | "Archived";

export type ProjectMediaType = "image" | "video";

export type GalleryLayout =
  | "single"
  | "two-column"
  | "three-column"
  | "featured-grid"
  | "masonry"
  | "carousel"
  | "full-width";

export interface ProjectMedia {
  type: ProjectMediaType;
  src: string;
  alt: string;
  caption?: string;
  poster?: string;

  /**
   * Optional display hints. The component may ignore these on small screens.
   */
  aspectRatio?: "square" | "portrait" | "landscape" | "wide";
  objectPosition?: string;
}

export interface ProjectGallery {
  layout: GalleryLayout;
  items: ProjectMedia[];

  /**
   * Used by layouts such as featured-grid to make one item visually dominant.
   */
  featuredIndex?: number;
}

export interface ProjectLink {
  label: string;
  href: string;
  type?: "github" | "live" | "figma" | "documentation" | "external";
}

export interface ProjectDetailGroup {
  label: string;
  items: string[];
}

export interface TextBlock {
  type: "text";
  paragraphs: string[];
}

export interface GalleryBlock {
  type: "gallery";
  gallery: ProjectGallery;
}

export interface ListBlock {
  type: "list";
  title?: string;
  items: string[];
  columns?: 1 | 2 | 3;
}

export interface CalloutBlock {
  type: "callout";
  title?: string;
  text: string;
}

export interface QuoteBlock {
  type: "quote";
  quote: string;
  attribution?: string;
}

export interface LinksBlock {
  type: "links";
  links: ProjectLink[];
}

export type ProjectContentBlock =
  | TextBlock
  | GalleryBlock
  | ListBlock
  | CalloutBlock
  | QuoteBlock
  | LinksBlock;

export interface ProjectSection {
  id: string;
  number?: string;
  title: string;
  eyebrow?: string;

  /**
   * Optional section-specific metadata, such as:
   * Tech stack: Figma
   * Scope: Branding, Design foundations, UI components
   */
  details?: ProjectDetailGroup[];

  /**
   * Blocks render in array order, allowing galleries to appear above,
   * below, or between written content.
   */
  blocks: ProjectContentBlock[];
}

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  type: string;
  year: string;
  completedDate?: string;
  featured: boolean;
  status?: ProjectStatus;

  shortDescription: string;
  introduction: string[];

  disciplines: string[];
  roles: string[];
  responsibilities: string[];

  client?: string;
  duration?: string;
  team?: string[];
  categories?: string[];
  skills: string[];

  techStack: ProjectTechStack;
  features: string[];

  coverImage: string;

  /**
   * Displayed near the project header, before the main case-study sections.
   */
  heroGallery?: ProjectGallery;

  links: ProjectLink[];
  sections: ProjectSection[];
}
