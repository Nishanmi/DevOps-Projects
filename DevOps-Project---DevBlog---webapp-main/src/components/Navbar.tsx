import { Link, useLocation } from "react-router-dom";
import { PenSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
];

export function Navbar() {
  const { pathname } = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="text-lg font-bold tracking-tight text-foreground">
            DevBlog
          </Link>
          <div className="flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={cn(
                  "rounded-md px-3 py-1.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                  pathname === item.path ? "bg-accent text-accent-foreground" : "text-muted-foreground"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <Button asChild size="sm">
          <Link to="/new">
            <PenSquare className="mr-1.5 h-4 w-4" />
            New Post
          </Link>
        </Button>
      </nav>
    </header>
  );
}
