import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  index: number;
}

export const ProjectCard = ({ slug, title, description, imageUrl, tags, index }: ProjectCardProps) => {
  const isReversed = index % 2 !== 0;

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      <div className={`overflow-hidden rounded-lg ${isReversed ? 'md:order-2' : ''}`}>
        <Link to={`/project/${slug}`}>
          <img
            src={imageUrl}
            alt={title}
            className="aspect-video w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </Link>
      </div>
      <div className={`flex flex-col items-start text-left ${isReversed ? 'md:order-1' : ''}`}>
        <h3 className="text-4xl font-bold">{title}</h3>
        <p className="mt-4 text-lg text-text-secondary">
            {description}
        </p>
        <div className="mt-6 flex w-full flex-wrap items-center justify-start gap-4">
          {tags.map((tag) => (
            <Link to={`/project/${slug}`} key={tag} className="flex items-center justify-between rounded-full border border-border px-4 py-2 text-text-secondary transition-colors hover:border-foreground hover:text-foreground">
              <span>{tag}</span>
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};