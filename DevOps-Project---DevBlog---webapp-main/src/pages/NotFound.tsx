import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <main className="flex min-h-[calc(100vh-3.5rem)] items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground">404</h1>
        <p className="mt-2 text-lg text-muted-foreground">Page not found</p>
        <Button asChild className="mt-6">
          <Link to="/">Go Home</Link>
        </Button>
      </div>
    </main>
  );
};

export default NotFound;
