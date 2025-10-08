import { ArrowUpRight } from "lucide-react";

const services = [
  { title: "UI/UX Design", description: "Creating intuitive interfaces for web and mobile using Figma & Adobe XD." },
  { title: "Graphic Design", description: "Crafting compelling visual identities and materials with Photoshop & Illustrator." },
  { title: "Prototyping", description: "Building interactive prototypes to communicate design concepts and user flows." },
  { title: "Problem Solving", description: "A creative and pragmatic approach to solving design challenges and meeting user needs." },
];

import { Reveal } from "@/components/Reveal";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto grid gap-16 px-4 md:grid-cols-2 md:px-6">
        <div>
          <Reveal>
            <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
              What I do
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-6 text-lg text-text-secondary">
              I specialize in turning complex problems into beautiful and intuitive designs.
            </p>
          </Reveal>
        </div>
        <div>
          {services.map((service, idx) => (
            <Reveal key={service.title} delayMs={idx * 120}>
              <div className="group border-b border-border py-8">
              <div className="flex items-start justify-between">
                <h3 className="text-3xl font-bold text-text-secondary transition-colors group-hover:text-foreground">{service.title}</h3>
                <ArrowUpRight className="h-8 w-8 flex-shrink-0 text-text-secondary transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-foreground" />
              </div>
              <p className="mt-2 text-text-secondary">{service.description}</p>
            </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
