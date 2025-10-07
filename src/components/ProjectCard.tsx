import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  imageUrl: string;
  index: number;
}

export const ProjectCard = ({ slug, title, description, imageUrl, index }: ProjectCardProps) => {
  const isReversed = index % 2 !== 0;
  const hasBlueBg = index === 1;

  return (
    <div className="grid items-center gap-8 md:grid-cols-2 md:gap-16">
      <div className={`flex flex-col items-start text-left ${isReversed ? 'md:order-2' : ''}`}>
        <div className={`w-full rounded-2xl p-8 shadow-sm ${hasBlueBg ? 'bg-primary text-white' : 'bg-gray-100'}`}>
            <h3 className="text-3xl font-bold">{title}</h3>
            <p className={`mt-4 text-lg ${hasBlueBg ? 'text-primary-foreground/80' : 'text-text-secondary'}`}>
                {description}
            </p>
            <Button asChild variant="outline" className={`mt-6 border-2 font-bold transition-all hover:-translate-y-1 ${hasBlueBg ? 'bg-black text-white hover:bg-gray-800 border-black' : 'bg-white hover:bg-gray-50 border-gray-200'}`}>
                <Link to={`/project/${slug}`}>
                    Show Case <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
            </Button>
        </div>
      </div>
      <div className={`flex items-center justify-center ${isReversed ? 'md:order-1' : ''}`}>
        <Link to={`/project/${slug}`} className="block w-full overflow-hidden rounded-2xl shadow-xl transition-all hover:scale-105">
            <img
              src={imageUrl}
              alt={title}
              className="aspect-video w-full object-cover"
            />
        </Link>
      </div>
    </div>
  );
};