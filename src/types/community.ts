export type CommunityCategory =
  | "Outreach"
  | "Leadership"
  | "School"
  | "Esports";

export interface CommunityItem {
  slug: string;
  title: string;
  role?: string;
  description: string;
  categories: CommunityCategory[];
  link?: string;
  featured?: boolean;
}
