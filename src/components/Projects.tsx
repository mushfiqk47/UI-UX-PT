import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Projects = () => {
  return (
    <section id="work" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-16 flex items-center justify-between">
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Our past project
          </h2>
          <Button variant="outline" className="hidden rounded-full sm:flex">
            View All Cases <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        <div className="grid gap-20">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} {...project} index={index} />
          ))}
        </div>
        <div className="mt-16 text-center sm:hidden">
          <Button variant="outline" className="rounded-full">
            View All Cases <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
};