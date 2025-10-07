import { projects } from "@/data/projects";

export const Hero = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto text-center">
        <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
          Elevating your brand
          <br />
          with exceptional{" "}
          <span className="bg-primary px-4 py-1 text-primary-foreground">
            DESIGN
          </span>
        </h1>
      </div>
      <div className="container mx-auto mt-16">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {projects.slice(0, 4).map((project, index) => (
            <div key={project.slug} className={`overflow-hidden rounded-lg ${index === 0 || index === 3 ? 'md:col-span-2' : ''}`}>
              <img
                src={project.imageUrl}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};