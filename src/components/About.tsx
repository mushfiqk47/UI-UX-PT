import { Button } from "./ui/button";
import { Download } from "lucide-react";

const stats = [
  {
    value: "100+",
    label: "Projects Completed",
  },
  {
    value: "5+",
    label: "Years of Experience",
  },
  {
    value: "🚀",
    label: "Increased Engagement",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              About Me
            </h2>
            <div className="mt-6 space-y-4 text-lg text-text-secondary">
              <p>
                Hey, my name is Mushfiq Kabir. I'm a professional UI/UX designer and graphic designer. UI/UX design comes first, and I maintain a user-friendly look and function in my designs. I aim to design interfaces that meet user needs and business objectives intuitively.
              </p>
              <p>
                I have more than 5 years in UI/UX design, having worked on 100+ projects from mobile apps and responsive websites to SaaS platforms with Figma. Starting with wireframes and moving through high-fi mockups, I design pixel-perfect, design-supported, user-centered thinking.
              </p>
              <p>
                I design clean, intuitive interfaces that turn complex ideas into smooth user experiences. My work helps people and businesses launch faster, increase user flow, and create products people love and enjoy using.
              </p>
            </div>
            <Button asChild className="mt-8 rounded-full px-8 py-6 text-lg">
              <a href="/mushfiq-kabir-cv.jpg" download>
                <Download className="mr-3 h-5 w-5" />
                Download CV
              </a>
            </Button>
          </div>
          <div className="order-1 lg:order-2">
            <div className="relative">
              <img
                src="/mushfiq-kabir.png"
                alt="Mushfiq Kabir"
                className="w-full rounded-2xl object-cover shadow-2xl"
              />
              <div className="absolute -bottom-8 left-1/2 w-[90%] -translate-x-1/2 rounded-xl border border-border bg-card/80 p-6 backdrop-blur-sm">
                <div className="grid grid-cols-3 gap-4 text-center">
                  {stats.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-bold text-primary">{stat.value}</p>
                      <p className="text-sm font-medium text-text-secondary">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};