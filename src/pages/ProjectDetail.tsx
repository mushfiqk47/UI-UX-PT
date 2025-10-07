import { useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "data/projects";
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
      <div className="flex h-screen flex-col items-center justify-center">
        <h1 className="text-4xl font-bold">Project Not Found</h1>
        <Link to="/" className="mt-4 text-accent hover:underline">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-white font-sans text-text-primary">
      <Header />
      <main className="container mx-auto px-4 py-12 md:px-6 md:py-20">
        <div className="mb-12">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-text-secondary">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Projects
          </Button>
        </div>

        <article>
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
              {project.title}
            </h1>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </header>

          <img
            src={project.heroImage}
            alt={project.title}
            className="mb-12 w-full rounded-lg object-cover shadow-lg"
          />

          <div className="mx-auto max-w-3xl">
            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-text-primary">Overview</h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                {project.overview}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-text-primary">The Problem</h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                {project.problem}
              </p>
            </section>

            <section className="mb-12">
              <h2 className="mb-4 text-3xl font-bold text-text-primary">The Solution</h2>
              <p className="text-lg leading-relaxed text-text-secondary">
                {project.solution}
              </p>
            </section>
            
            {project.gallery.length > 1 && (
              <section>
                <h2 className="mb-4 text-3xl font-bold text-text-primary">Gallery</h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {project.gallery.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} gallery image ${index + 1}`}
                      className="w-full rounded-lg object-cover shadow-md"
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