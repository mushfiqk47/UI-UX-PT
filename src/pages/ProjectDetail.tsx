import { useParams, Link, useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { useEffect } from "react";

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
        <Link to="/projects" className="mt-4 text-primary hover:underline">
          Return to Projects
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
            Back
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
            {project.tags?.length ? (
              <div className="mt-8 flex flex-wrap justify-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-4 py-1 text-sm">
                    {tag}
                  </Badge>
                ))}
              </div>
            ) : null}
          </header>

          <div className="space-y-24">
            <div className="mx-auto max-w-3xl space-y-12 text-lg leading-relaxed text-text-secondary">
              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Project Overview</h2>
                <p className="whitespace-pre-wrap">{project.overview}</p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">1. The Problem: A Disconnect Between Brand and Digital Experience</h2>
                <p className="whitespace-pre-wrap">{project.problem}</p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">2. Research & Discovery</h2>
                <p className="whitespace-pre-wrap">{project.research}</p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">3. The UX Strategy: Structuring the Narrative</h2>
                <p className="whitespace-pre-wrap">{project.uxStrategy}</p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">4. The UI Design: A Visual Language of Heritage and Clarity</h2>
                <p className="whitespace-pre-wrap">{project.uiDesign}</p>
              </section>

              <section>
                <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">5. Key Takeaways & Results</h2>
                <p className="whitespace-pre-wrap">{project.keyTakeaways}</p>
              </section>
            </div>

            <img
              src={project.heroImage}
              alt={project.title}
              loading="lazy"
              className="w-full rounded-xl object-cover shadow-2xl opacity-0 transition-opacity duration-700 will-change-auto"
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default ProjectDetail;
