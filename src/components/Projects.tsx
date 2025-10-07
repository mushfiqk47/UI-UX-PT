import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";
import { projects } from "data/projects";

export const Projects = () => {
  return (
    <section id="work" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Selected Work
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <a href="https://www.behance.net/mushfiqkabir1" target="_blank" rel="noopener noreferrer">
              View More on Behance
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};