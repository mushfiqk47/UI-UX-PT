import { Reveal } from "@/components/Reveal";

export const Hero = () => {
  return (
    <section className="py-20 sm:py-32">
      <div className="container mx-auto text-center">
        <div className="mx-auto max-w-5xl">
          <div className="opacity-0">
            {/* placeholder to avoid CLS */}
          </div>
          <div>
            <div className="mx-auto">
              <div className="inline-block">
                <div className="sr-only">headline</div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-5xl">
          <Reveal>
            <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-7xl md:text-8xl">
              Elevating your brand
              <br />
              with exceptional{" "}
              <span className="bg-primary px-4 py-1 text-primary-foreground animate-pulse">
                DESIGN
              </span>
            </h1>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
