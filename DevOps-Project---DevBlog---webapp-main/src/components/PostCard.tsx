import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BlogPost } from "@/types/blog";
import { format } from "date-fns";

interface PostCardProps {
  post: BlogPost;
}

export function PostCard({ post }: PostCardProps) {
  return (
    <Link to={`/post/${post.id}`}>
      <Card className="h-full transition-shadow hover:shadow-md">
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <Badge variant="secondary">{post.category}</Badge>
            <span className="text-xs text-muted-foreground">
              {format(new Date(post.createdAt), "MMM d, yyyy")}
            </span>
          </div>
          <CardTitle className="mt-2 text-lg leading-snug">{post.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground line-clamp-3">{post.excerpt}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
