import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-center justify-center bg-white">
      <div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="container mx-auto px-4 text-center md:px-6">
        <h1 className="text-4xl font-bold tracking-tight text-text-primary sm:text-5xl md:text-6xl">
          Hi, I'm Mushfiq Kabir. A passionate UI/UX designer crafting engaging and user-friendly digital solutions.
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-text-secondary md:text-xl">
          Creating Engaging and Intuitive Designs
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