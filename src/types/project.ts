export type ProjectMedia = {
  type: "image" | "video";
  src: string;
  alt?: string;
  caption?: string;
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  year: string;
  featured: boolean;

  shortDescription: string;
  overview: string;

  stack: string[];
  features: string[];

  coverImage?: string;
  media?: ProjectMedia[];

  links?: {
    github?: string;
    live?: string;
  };
};