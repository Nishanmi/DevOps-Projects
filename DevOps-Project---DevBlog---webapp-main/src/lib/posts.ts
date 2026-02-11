import { BlogPost } from "@/types/blog";

const STORAGE_KEY = "devblog_posts";

export function getPosts(): BlogPost[] {
  const data = localStorage.getItem(STORAGE_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data) as BlogPost[];
  } catch {
    return [];
  }
}

export function getPost(id: string): BlogPost | undefined {
  return getPosts().find((p) => p.id === id);
}

export function savePost(post: Omit<BlogPost, "id" | "createdAt" | "updatedAt" | "excerpt">): BlogPost {
  const posts = getPosts();
  const now = new Date().toISOString();
  const newPost: BlogPost = {
    ...post,
    id: crypto.randomUUID(),
    excerpt: post.content.slice(0, 120) + (post.content.length > 120 ? "..." : ""),
    createdAt: now,
    updatedAt: now,
  };
  posts.unshift(newPost);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  return newPost;
}

export function updatePost(id: string, data: Partial<Pick<BlogPost, "title" | "content" | "category">>): BlogPost | undefined {
  const posts = getPosts();
  const idx = posts.findIndex((p) => p.id === id);
  if (idx === -1) return undefined;
  const updated: BlogPost = {
    ...posts[idx],
    ...data,
    excerpt: (data.content ?? posts[idx].content).slice(0, 120) + ((data.content ?? posts[idx].content).length > 120 ? "..." : ""),
    updatedAt: new Date().toISOString(),
  };
  posts[idx] = updated;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(posts));
  return updated;
}

export function deletePost(id: string): boolean {
  const posts = getPosts();
  const filtered = posts.filter((p) => p.id !== id);
  if (filtered.length === posts.length) return false;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  return true;
}
