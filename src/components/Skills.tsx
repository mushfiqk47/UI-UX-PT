import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "Web Application", description: "Design studio with people and the internet to solve problems." },
  { title: "Branding", description: "We design intelligent web products that boost business operations." },
  { title: "Mobile", description: "Migrating your business processes into highly efficient web apps." },
  { title: "Illustration", description: "We create mobile apps for iOS and Android that are intuitive, and boost end-user productivity." },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto grid gap-16 px-4 md:grid-cols-2 md:px-6">
        <div>
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            What I do
          </h2>
          <p className="mt-6 text-lg text-text-secondary">
            Design studio with people and the internet to solve problems.
          </p>
        </div>
        <div>
          {services.map((service) => (
            <a key={service.title} href="#" className="group flex items-center justify-between border-b border-border py-8 transition-colors hover:border-foreground">
              <h3 className="text-3xl font-bold text-text-secondary transition-colors group-hover:text-foreground">{service.title}</h3>
              <ArrowUpRight className="h-8 w-8 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};