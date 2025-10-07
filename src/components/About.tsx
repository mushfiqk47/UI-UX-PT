import { Button } from "@/components/ui/button";

export const About = () => {
  return (
    <section id="about" className="bg-gray-50 py-20 sm:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex justify-center">
            <img
              src="/mushfiq-kabir-portrait.jpg"
              alt="Mushfiq Kabir"
              className="h-auto w-full max-w-xs rounded-2xl object-cover shadow-xl md:max-w-sm"
            />
          </div>
          <div className="space-y-4 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              About Me
            </h2>
            <p className="text-lg text-text-secondary">
              A passionate and creative UI/UX designer with a strong foundation in design principles, user research, and prototyping.
            </p>
            <p className="text-lg text-text-secondary">
              Seeking an opportunity to contribute to a dynamic team while growing my expertise in creating engaging and user-friendly digital solutions.
            </p>
            <a href="/mushfiq-kabir-cv.jpg" download="Mushfiq-Kabir-CV.jpg">
              <Button variant="outline" size="lg" className="mt-4">
                Download Résumé
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};