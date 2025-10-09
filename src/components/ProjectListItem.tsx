import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectListItemProps {
  project: Project;
}

export const ProjectListItem = ({ project }: ProjectListItemProps) => {
  const makeWidthUrl = (url: string, w: number) => {
    try {
      const u = new URL(url, typeof window !== "undefined" ? window.location.origin : "http://localhost");
      u.searchParams.set("width", String(w));
      return u.toString();
    } catch {
      return url.includes("width=") ? url.replace(/width=\d+/, `width=${w}`) : `${url}${url.includes("?") ? "&" : "?"}width=${w}`;
    }
  };
  const srcSet = [800, 1200, 1600, 2000, 2400]
    .map((w) => `${makeWidthUrl(project.heroImage, w)} ${w}w`)
    .join(", ");

  return (
    <div className="group transition-transform duration-300 ease-out hover:-translate-y-0.5">
      <Link
        to={`/project/${project.slug}`}
        className="flex flex-col gap-8 md:flex-row md:items-center"
      >
        <div className="w-full overflow-hidden rounded-lg md:w-1/3 shadow-sm transition-shadow duration-300 group-hover:shadow-xl">
          <img
            src={makeWidthUrl(project.heroImage, 1200)}
            srcSet={srcSet}
            sizes="(min-width: 1024px) 33vw, 100vw"
            alt={project.title}
            className="aspect-[4/3] w-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            decoding="async"
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
