import { projects } from "@/data/projects";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { ProjectListItem } from "./ProjectListItem";

import { Reveal } from "@/components/Reveal";

export const Projects = () => {
  const featuredProjects = projects.slice(0, 2);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/projects");
  };

  return (
    <section id="work" className="py-24 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-1">
            <Reveal>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Our past project
              </h2>
            </Reveal>
            <Reveal delayMs={100}>
              <Button
                onClick={handleNavigate}
                variant="outline"
                className="mt-8 rounded-full"
              >
                View All Cases <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Reveal>
          </div>
          <div className="space-y-12 lg:col-span-2">
            {featuredProjects.map((project, index) => (
              <Reveal key={project.slug} delayMs={150 + index * 120}>
                <div>
                  <ProjectListItem project={project} />
                  {index < featuredProjects.length - 1 && (
                    <hr className="mt-12 border-border" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
