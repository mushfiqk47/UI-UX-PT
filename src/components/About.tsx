import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="https://i.pravatar.cc/300?img=5"
              alt="Elena Reed"
              className="h-64 w-64 rounded-full object-cover md:h-80 md:w-80"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg text-text-secondary">
              With over 7 years of experience, I bridge the gap between user
              needs and business goals. I am passionate about building
              accessible, functional, and beautiful digital products.
            </p>
            <p className="text-lg text-text-secondary">
              My design process is driven by research, collaboration, and
              iterative prototyping.
            </p>
            <Button variant="outline" size="lg" className="mt-4">
              Download Résumé
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};