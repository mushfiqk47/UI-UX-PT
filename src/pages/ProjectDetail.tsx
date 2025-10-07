import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="flex h-screen flex-col items-center justify-center bg-background text-foreground">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/" className="mt-4 text-primary hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <div className="mb-16">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-text-secondary hover:text-foreground">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>

        <article className="mx-auto max-w-5xl">
          <header className="mb-16 text-center">
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              {project.title}
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-text-secondary">
              {project.description}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="px-4 py-1 text-sm">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <div className="space-y-24">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full rounded-xl object-cover shadow-2xl"
            />

            <div className="mx-auto max-w-3xl space-y-12 text-lg leading-relaxed text-text-secondary">
              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Overview</h2>
                <p>{project.overview}</p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The Problem</h2>
                <p>{project.problem}</p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">The Solution</h2>
                <p>{project.solution}</p>
              </section>
            </div>

            {project.gallery.length > 0 && (
              <section className="space-y-8 pt-12">
                <h2 className="text-center text-4xl font-bold text-foreground">Gallery</h2>
                <div className="space-y-8">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="w-full rounded-lg object-cover shadow-lg"
                    />
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;