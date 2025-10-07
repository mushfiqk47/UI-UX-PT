import { Search, MousePointerClick, Blocks } from "lucide-react";

const skillsData = [
  {
    icon: <Search size={24} className="text-white" />,
    title: "User Research",
    description: "I conduct user research to understand their needs, behaviors, and pain points. With accurate data, I can create designs that truly solve problems.",
    highlighted: true,
  },
  {
    icon: <MousePointerClick size={24} className="text-primary" />,
    title: "Interaction Design",
    description: "I design interactions that are intuitive and fun, ensuring every click, swipe or tap provides a seamless experience for the user.",
    highlighted: false,
  },
  {
    icon: <Blocks size={24} className="text-primary" />,
    title: "Design Systems",
    description: "I build a consistent and scalable design system, ensuring every UI component is reusable and easy to manage.",
    highlighted: false,
  },
];

export const Skills = () => {
  return (
    <section id="skills" className="bg-white py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center">
          <h2 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl">
            Other Skills that Make Me Multitalented 👉
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl gap-8 md:grid-cols-1">
          {skillsData.map((skill) => (
            <div
              key={skill.title}
              className={`flex flex-col items-start gap-6 rounded-2xl p-8 shadow-sm transition-all sm:flex-row sm:items-center ${
                skill.highlighted ? "bg-primary text-white" : "bg-white"
              }`}
            >
              <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg ${skill.highlighted ? "bg-white/20" : "bg-primary/10"}`}>
                {skill.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold">{skill.title}</h3>
                <p className={`mt-2 ${skill.highlighted ? 'text-primary-foreground/80' : 'text-text-secondary'}`}>
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};