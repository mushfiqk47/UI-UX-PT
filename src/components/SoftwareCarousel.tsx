import React from "react";
import "./SoftwareCarousel.css";

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

// Duplicate the array to create a seamless loop
const extendedSoftware = [...software, ...software];

export const SoftwareCarousel = () => {
  return (
    <section className="overflow-hidden border-y border-border bg-card/50 py-12 sm:py-16">
      <div className="container mx-auto">
        <div className="mb-8 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-widest text-text-secondary">
            The tools I use
          </h2>
        </div>
        <div className="ticker-wrap">
          <div className="ticker">
            {extendedSoftware.map((name, index) => (
              <div key={index} className="ticker__item">
                {name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};