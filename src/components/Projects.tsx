import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const Projects = () => {
  const featuredProjects = projects.slice(0, 3);

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 flex items-center justify-between sm:mb-16">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Featured Work
          </h2>
          <Button asChild variant="outline" className="hidden rounded-full sm:flex">
            <Link to="/projects">
              View All Cases <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
        <div className="mt-12 text-center sm:hidden">
          <Button asChild variant="outline" className="rounded-full">
            <Link to="/projects">
              View All Cases <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};