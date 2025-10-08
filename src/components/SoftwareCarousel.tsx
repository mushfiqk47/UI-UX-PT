import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

// SVG Logo Components
const FigmaLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width="26" height="39" viewBox="0 0 26 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M13 26C9.68629 26 7 28.6863 7 32C7 35.3137 9.68629 38 13 38C16.3137 38 19 35.3137 19 32C19 30.1564 19 26 13 26Z" />
    <path d="M7 32C7 28.6863 9.68629 26 13 26V38C9.68629 38 7 35.3137 7 32Z" />
    <path d="M7 19C7 15.6863 9.68629 13 13 13C16.3137 13 19 15.6863 19 19C19 22.3137 16.3137 25 13 25C9.68629 25 7 22.3137 7 19Z" />
    <path d="M19 19C19 15.6863 16.3137 13 13 13V1C9.68629 1 7 3.68629 7 7C7 10.3137 9.68629 13 13 13C16.3137 13 19 10.3137 19 7C19 3.68629 16.3137 1 13 1V13C16.3137 13 19 15.6863 19 19Z" />
  </svg>
);

const PhotoshopLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M8.5 7v10h2.5c1.4 0 2.5-1.1 2.5-2.5S12.4 12 11 12H10v- аспектыh2.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V10h2V7.5C17 5 15 3 12.5 3S8.5 5.2 8.5 7zm1.5 4h1c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5h-1v-3z" />
  </svg>
);

const IllustratorLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9 7l-2 10h2l.5-2h3l.5 2h2L13 7h-4zm-.5 6l1.5-6 1.5 6h-3zM17 7v10h2V7h-2z" />
  </svg>
);

const XdLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M9.5 7L7 17h2l1-3h3.5l1 3h2L14.5 7h-5zM11 12.5l1-3 1 3h-2zM17.5 7H15v3l2.5 2-2.5 2v3h2.5l2.5-3.5L17.5 7z" />
  </svg>
);

const SketchLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 3L2 9l10 12 10-12L12 3zm0 2.3L18.4 9H5.6L12 5.3zM4.5 10h15l-7.5 9L4.5 10z" />
  </svg>
);

const InvisionLogo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z" />
  </svg>
);

const software = [
  { name: "Figma", component: FigmaLogo },
  { name: "Photoshop", component: PhotoshopLogo },
  { name: "Illustrator", component: IllustratorLogo },
  { name: "Adobe XD", component: XdLogo },
  { name: "Sketch", component: SketchLogo },
  { name: "InVision", component: InvisionLogo },
  { name: "Figma", component: FigmaLogo },
  { name: "Photoshop", component: PhotoshopLogo },
  { name: "Illustrator", component: IllustratorLogo },
  { name: "Adobe XD", component: XdLogo },
  { name: "Sketch", component: SketchLogo },
  { name: "InVision", component: InvisionLogo },
];

export const SoftwareCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 1500, stopOnInteraction: false, stopOnMouseEnter: true })
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
          <CarouselContent className="-ml-1">
            {software.map((tool, index) => (
              <CarouselItem
                key={index}
                className="basis-1/3 pl-1 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="group flex h-24 items-center justify-center p-1">
                  <tool.component className="h-8 w-auto text-text-secondary/50 transition-all duration-300 group-hover:scale-110 group-hover:text-text-secondary" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};