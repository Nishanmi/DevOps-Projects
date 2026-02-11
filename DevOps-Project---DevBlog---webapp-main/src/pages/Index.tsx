import { useState, useMemo } from "react";
import { getPosts } from "@/lib/posts";
import { PostCard } from "@/components/PostCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { CATEGORIES } from "@/types/blog";
import { Search, FileText } from "lucide-react";

const Index = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const posts = getPosts();

  const filtered = useMemo(() => {
    return posts.filter((p) => {
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !activeCategory || p.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [posts, search, activeCategory]);

  return (
    <main className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">Blog Posts</h1>
        <p className="mt-1 text-muted-foreground">Browse and manage your articles</p>
      </div>

      <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            placeholder="Search posts..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9"
          />
        </div>
        <div className="flex gap-1.5">
          <Button
            size="sm"
            variant={activeCategory === null ? "default" : "outline"}
            onClick={() => setActiveCategory(null)}
          >
            All
          </Button>
          {CATEGORIES.map((cat) => (
            <Button
              key={cat}
              size="sm"
              variant={activeCategory === cat ? "default" : "outline"}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </Button>
          ))}
        </div>
      </div>

      {filtered.length > 0 ? (
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
          <FileText className="mb-3 h-10 w-10 text-muted-foreground" />
          <h3 className="text-lg font-semibold text-foreground">No posts yet</h3>
          <p className="mt-1 text-sm text-muted-foreground">
            {posts.length === 0 ? "Create your first blog post to get started." : "No posts match your filters."}
          </p>
        </div>
      )}
    </main>
  );
};

export default Index;
