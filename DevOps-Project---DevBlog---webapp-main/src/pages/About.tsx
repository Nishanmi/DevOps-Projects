import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function About() {
  return (
    <main className="container max-w-2xl py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">About DevBlog</h1>

      <div className="space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">About This Project</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground leading-relaxed">
            DevBlog is a lightweight blogging application built as a portfolio project. It
            demonstrates modern frontend development practices along with a complete DevOps setup
            including Docker containerization and CI/CD pipelines.
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Tech Stack</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              <li>• React 18</li>
              <li>• TypeScript</li>
              <li>• Tailwind CSS</li>
              <li>• Vite</li>
              <li>• React Router</li>
              <li>• shadcn/ui</li>
              <li>• Docker &amp; Nginx</li>
              <li>• GitHub Actions CI/CD</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Author</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Built by <span className="font-medium text-foreground">Nishant</span>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
