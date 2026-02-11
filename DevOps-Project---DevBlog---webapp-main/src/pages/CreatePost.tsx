import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { savePost, updatePost, getPost } from "@/lib/posts";
import { CATEGORIES, Category } from "@/types/blog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";

export default function CreatePost() {
  const navigate = useNavigate();
  const { id } = useParams();
  const existing = id ? getPost(id) : undefined;

  const [title, setTitle] = useState(existing?.title ?? "");
  const [category, setCategory] = useState<Category>(existing?.category ?? "Tech");
  const [content, setContent] = useState(existing?.content ?? "");
  const [errors, setErrors] = useState<{ title?: string; content?: string }>({});

  const isEditing = !!existing;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: typeof errors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!content.trim()) newErrors.content = "Content is required";
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    if (isEditing) {
      updatePost(existing.id, { title: title.trim(), category, content: content.trim() });
      toast({ title: "Post updated", description: "Your changes have been saved." });
      navigate(`/post/${existing.id}`);
    } else {
      const post = savePost({ title: title.trim(), category, content: content.trim() });
      toast({ title: "Post created", description: "Your new post has been published." });
      navigate(`/post/${post.id}`);
    }
  };

  return (
    <main className="container max-w-2xl py-8">
      <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate(-1)}>
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back
      </Button>

      <h1 className="mb-6 text-2xl font-bold tracking-tight text-foreground">
        {isEditing ? "Edit Post" : "Create New Post"}
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label htmlFor="title">Title</Label>
          <Input
            id="title"
            value={title}
            onChange={(e) => { setTitle(e.target.value); setErrors((p) => ({ ...p, title: undefined })); }}
            placeholder="Enter post title"
          />
          {errors.title && <p className="text-sm text-destructive">{errors.title}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Category</Label>
          <Select value={category} onValueChange={(v) => setCategory(v as Category)}>
            <SelectTrigger>
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((c) => (
                <SelectItem key={c} value={c}>{c}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="content">Content</Label>
          <Textarea
            id="content"
            value={content}
            onChange={(e) => { setContent(e.target.value); setErrors((p) => ({ ...p, content: undefined })); }}
            placeholder="Write your blog post content..."
            className="min-h-[200px]"
          />
          {errors.content && <p className="text-sm text-destructive">{errors.content}</p>}
        </div>

        <div className="flex gap-3">
          <Button type="submit">{isEditing ? "Save Changes" : "Publish Post"}</Button>
          <Button type="button" variant="outline" onClick={() => navigate(-1)}>Cancel</Button>
        </div>
      </form>
    </main>
  );
}
