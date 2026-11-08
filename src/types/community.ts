export interface CommunityItem {
  slug: string;
  title: string;
  role?: string;
  description: string;
  categories: string[];
  link?: string;
  featured?: boolean;
}
