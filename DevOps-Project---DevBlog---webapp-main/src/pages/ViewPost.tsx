import { useParams, useNavigate } from "react-router-dom";
import { getPost, deletePost } from "@/lib/posts";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { format } from "date-fns";
import { ArrowLeft, Pencil, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ViewPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const post = id ? getPost(id) : undefined;

  if (!post) {
    return (
      <main className="container py-16 text-center">
        <h1 className="text-2xl font-bold text-foreground">Post not found</h1>
        <p className="mt-2 text-muted-foreground">The post you're looking for doesn't exist.</p>
        <Button className="mt-4" onClick={() => navigate("/")}>Go Home</Button>
      </main>
    );
  }

  const handleDelete = () => {
    deletePost(post.id);
    toast({ title: "Post deleted", description: "The post has been removed." });
    navigate("/");
  };

  return (
    <main className="container max-w-2xl py-8">
      <Button variant="ghost" size="sm" className="mb-4" onClick={() => navigate("/")}>
        <ArrowLeft className="mr-1.5 h-4 w-4" />
        Back to Home
      </Button>

      <article>
        <div className="mb-4 flex items-center gap-3">
          <Badge variant="secondary">{post.category}</Badge>
          <span className="text-sm text-muted-foreground">
            {format(new Date(post.createdAt), "MMMM d, yyyy")}
          </span>
        </div>

        <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">{post.title}</h1>

        <div className="prose prose-sm max-w-none whitespace-pre-wrap text-foreground">
          {post.content}
        </div>
      </article>

      <div className="mt-8 flex gap-3 border-t pt-6">
        <Button variant="outline" onClick={() => navigate(`/edit/${post.id}`)}>
          <Pencil className="mr-1.5 h-4 w-4" />
          Edit
        </Button>
        <AlertDialog>
          <AlertDialogTrigger asChild>
            <Button variant="destructive">
              <Trash2 className="mr-1.5 h-4 w-4" />
              Delete
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Delete this post?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your blog post.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </main>
  );
}
