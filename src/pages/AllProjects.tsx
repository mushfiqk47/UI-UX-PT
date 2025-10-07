import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectListItem } from "@/components/ProjectListItem";
import { projects } from "@/data/projects";
import { useEffect } from "react";

const AllProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <div className="text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            All Projects
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-text-secondary">
            Here's a collection of my work, showcasing a range of skills and
            technologies.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-4xl space-y-12">
          {projects.map((project, index) => (
            <div key={project.slug}>
              <ProjectListItem project={project} />
              {index < projects.length - 1 && (
                <hr className="mt-12 border-border" />
              )}
            </div>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AllProjects;