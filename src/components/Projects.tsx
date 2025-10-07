import { ProjectCard } from "./ProjectCard";
import { projects } from "@/data/projects";

export const Projects = () => {
  return (
    <section id="work" className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            It's About Solving Problems Not Just How it Looks 👀
            </h2>
        </div>
        <div className="mt-16 grid gap-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};