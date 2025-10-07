import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface ProjectCardProps {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  imageUrl: string;
}

export const ProjectCard = ({ slug, title, description, tags, imageUrl }: ProjectCardProps) => {
  return (
    <Link to={`/project/${slug}`} className="group block">
      <Card className="h-full overflow-hidden transition-all group-hover:shadow-xl group-hover:-translate-y-2">
        <CardHeader className="p-0">
          <img
            src={imageUrl}
            alt={title}
            className="h-60 w-full object-cover"
          />
        </CardHeader>
        <CardContent className="p-6">
          <CardTitle className="text-xl font-bold text-text-primary">{title}</CardTitle>
          <p className="mt-2 text-text-secondary">{description}</p>
        </CardContent>
        <CardFooter className="p-6 pt-0">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};