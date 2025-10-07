import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Figma", value: 98 },
  { name: "XD", value: 100 },
  { name: "Illustrator", value: 90 },
  { name: "Photoshop", value: 70 },
];

const languages = [
    { name: "Bangla", level: "Native" },
    { name: "English", level: "Intermediate" },
]

export const Skills = () => {
  return (
    <section id="skills" className="py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
          My Skills
        </h2>
        <div className="mx-auto mt-12 grid max-w-4xl gap-8 md:grid-cols-2">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex justify-between">
                <p className="font-medium text-text-primary">{skill.name}</p>
                <p className="text-text-secondary">{skill.value}%</p>
              </div>
              <Progress value={skill.value} />
            </div>
          ))}
        </div>
        <div className="mt-16">
             <h3 className="text-center text-2xl font-bold tracking-tight text-text-primary sm:text-3xl">
                Languages
            </h3>
            <div className="mt-8 flex justify-center gap-8 md:gap-16">
                {languages.map(lang => (
                    <div key={lang.name} className="text-center">
                        <p className="text-xl font-bold text-text-primary">{lang.name}</p>
                        <p className="text-text-secondary">{lang.level}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};