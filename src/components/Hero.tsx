import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="flex min-h-screen items-center justify-center bg-white">
      <div className="container mx-auto px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
          Hi, I'm Elena Reed. I craft intuitive digital experiences that users
          love and businesses need.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
          Senior UI/UX Designer specializing in user-centered design for SaaS
          companies.
        </p>
        <div className="mt-10">
          <Button asChild size="lg">
            <a href="#work">See My Work</a>
          </Button>
        </div>
      </div>
    </section>
  );
};