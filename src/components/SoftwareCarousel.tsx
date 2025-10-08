import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const software = [
  "Figma",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe XD",
  "Sketch",
  "InVision",
  "Zeplin",
  "Miro",
];

export const SoftwareCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: false, stopOnMouseEnter: true })
  );

  return (
    <section className="border-y border-border bg-card/50 py-12 sm:py-16">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            The tools I use
          </h2>
        </div>
        <Carousel
          plugins={[plugin.current]}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {software.map((name, index) => (
              <CarouselItem
                key={index}
                className="basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/5"
              >
                <div className="p-1">
                  <p className="text-center text-lg font-medium text-text-secondary">
                    {name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};