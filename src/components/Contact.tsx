import { ArrowUpRight } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 sm:py-32">
      <div className="container mx-auto">
        <div className="bg-secondary p-10 md:p-20">
          <h2 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Let's
            <br />
            Collaborate
          </h2>
          <a href="mailto:mushfiqk47@gmail.com" className="group mt-8 inline-flex items-center justify-between border-b border-border text-lg text-text-secondary transition-colors hover:border-foreground hover:text-foreground">
            <span>Drop me a line: hello@mushfiq.agency</span>
            <ArrowUpRight className="ml-4 h-6 w-6 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </section>
  );
};