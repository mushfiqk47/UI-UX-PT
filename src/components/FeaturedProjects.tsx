import { projects } from "@/data/projects";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectListItem } from "@/components/ProjectListItem";

export const FeaturedProjects = () => {
  const featured = projects.slice(0, 2);
  const navigate = useNavigate();

  return (
    <section className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Project Highlights
            </h2>
            <Button
              onClick={() => navigate("/projects")}
              variant="outline"
              className="mt-8 rounded-full"
            >
              View All Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="space-y-12 lg:col-span-2">
            {featured.map((project, index) => (
              <div key={project.slug}>
                <ProjectListItem project={project} />
                {index < featured.length - 1 && (
                  <hr className="mt-12 border-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
