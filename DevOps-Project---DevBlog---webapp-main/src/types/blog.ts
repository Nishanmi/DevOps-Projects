export interface BlogPost {
  id: string;
  title: string;
  content: string;
  category: "Tech" | "Personal" | "Tutorial";
  excerpt: string;
  createdAt: string;
  updatedAt: string;
}

export const CATEGORIES = ["Tech", "Personal", "Tutorial"] as const;
export type Category = (typeof CATEGORIES)[number];
