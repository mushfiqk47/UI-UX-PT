import { Award, CalendarDays, TrendingUp } from "lucide-react";

const stats = [
  {
    icon: <Award className="h-8 w-8 text-primary" />,
    value: "100+",
    label: "Projects Completed",
  },
  {
    icon: <CalendarDays className="h-8 w-8 text-primary" />,
    value: "5+",
    label: "Years of Experience",
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-primary" />,
    value: "Proven",
    label: "Increased Engagement",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            About Me
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-text-secondary">
            I'm Mushfiq Kabir, a professional UI/UX and Graphic Designer dedicated to creating intuitive, user-friendly digital experiences. My goal is to design interfaces that not only look beautiful but also meet user needs and business objectives effectively.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {stat.icon}
              <p className="mt-2 text-4xl font-bold text-foreground">{stat.value}</p>
              <p className="text-text-secondary">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-16 max-w-4xl space-y-6 text-left text-text-primary sm:text-center">
          <p>
            With over five years in UI/UX design, I've successfully delivered more than 100 projects, ranging from mobile apps and responsive websites to complex SaaS platforms. Using Figma, I guide projects from initial wireframes to pixel-perfect, high-fidelity mockups, always grounding my work in user-centered design principles.
          </p>
          <p>
            I specialize in transforming complex ideas into clean, intuitive interfaces that provide smooth user experiences. My work empowers businesses to launch products faster, improve user flow, and create digital tools that people genuinely love to use.
          </p>
        </div>
      </div>
    </section>
  );
};