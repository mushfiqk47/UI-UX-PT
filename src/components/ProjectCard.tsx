import { Link } from "react-router-dom";
import { Badge } from "./ui/badge";
import { ArrowRight } from "lucide-react";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <Link
      to={`/project/${project.slug}`}
      className="group block overflow-hidden rounded-xl border border-border transition-all hover:border-primary/50 hover:shadow-lg"
    >
      <div className="h-56 w-full overflow-hidden">
        <img
          src={project.heroImage}
          alt={project.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>
        <p className="mt-2 text-text-secondary">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="mt-6 flex items-center justify-end text-sm font-medium text-primary">
          View Case Study
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </div>
      </div>
    </Link>
  );
};