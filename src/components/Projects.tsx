import { ProjectCard } from "./ProjectCard";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Nexus Finance App",
    description: "Redesigned the onboarding flow, increasing user sign-ups by 30%.",
    tags: ["UI Design", "UX Research"],
    imageUrl: "https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "EcoCart Browser Extension",
    description: "Streamlined the coupon-finding experience for a sustainable shopping extension.",
    tags: ["Product Design", "UX/UI"],
    imageUrl: "https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "Artisan Café Website",
    description: "Created a visually-driven site that increased online orders by 50%.",
    tags: ["Web Design", "Branding"],
    imageUrl: "https://images.unsplash.com/photo-1497032628192-86f99d76b33e?q=80&w=800&auto=format&fit=crop",
  },
];

export const Projects = () => {
  return (
    <section id="work" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          Selected Work
        </h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <Button asChild size="lg">
            <a href="https://www.behance.net/mushfiqkabir1" target="_blank" rel="noopener noreferrer">
              View More on Behance
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};