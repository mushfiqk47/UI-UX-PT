import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectListItemProps {
  project: Project;
}

export const ProjectListItem = ({ project }: ProjectListItemProps) => {
  return (
    <div className="group">
      <Link
        to={`/project/${project.slug}`}
        className="flex flex-col gap-8 md:flex-row md:items-center"
      >
        <div className="w-full overflow-hidden rounded-lg md:w-1/3">
          <img
            src={project.heroImage}
            alt={project.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="w-full md:w-2/3">
          <h3 className="text-3xl font-bold">{project.title}</h3>
          <p className="mt-4 text-text-secondary">{project.description}</p>
          <div className="mt-6 flex items-center text-sm font-medium text-foreground transition-colors group-hover:text-primary">
            View Case Study
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </div>
  );
};