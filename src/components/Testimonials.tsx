import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";

const testimonials = [
  {
    name: "Sarah Johnson",
    title: "Marketing Director, TechCorp",
    quote: "Working with Mushfiq was a game-changer. The new UI/UX design for our app was intuitive, beautiful, and significantly improved user engagement. The process was seamless and professional from start to finish.",
    rating: 5,
  },
  {
    name: "Michael Chen",
    title: "Founder, Creative Solutions",
    quote: "The branding package created for us was exceptional. It perfectly captured our company's vision and has received nothing but positive feedback. A truly talented designer who listens and delivers.",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    title: "Project Manager, Innovate LLC",
    quote: "The attention to detail and creative problem-solving were outstanding. The final designs exceeded our expectations and were delivered on time. I highly recommend their services for any design needs.",
    rating: 5,
  },
  {
    name: "David Lee",
    title: "CEO, Startup Hub",
    quote: "The clean interface and intuitive dashboard design really made a difference for our platform. We've seen a noticeable increase in user satisfaction since the redesign. I'm thrilled with the results.",
    rating: 4,
  },
  {
    name: "Jessica Williams",
    title: "Product Owner, FinTech Innovations",
    quote: "An incredibly talented and reliable designer. The mobile app design was sleek, modern, and user-friendly. Our conversion rates have improved since launch. A pleasure to work with!",
    rating: 5,
  },
  {
    name: "Chris Martinez",
    title: "E-commerce Manager, StyleNow",
    quote: "The website redesign was a huge success. It's not only visually stunning but also much easier to navigate. Our online sales have increased by 20% since the new site went live. Fantastic work!",
    rating: 5,
  },
];

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? "text-primary fill-current" : "text-muted-foreground"
        }`}
      />
    ))}
  </div>
);

import { Reveal } from "@/components/Reveal";

export const Testimonials = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );

  return (
    <section id="testimonials" className="py-20 sm:py-32">
      <div className="container mx-auto max-w-6xl px-4 md:px-6">
        <div className="mb-16 text-center">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              What My Clients Say
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-text-secondary">
              I'm proud to have collaborated with some amazing clients. Here's what they have to say about my work.
            </p>
          </Reveal>
        </div>
        <Carousel
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2">
                <div className="p-1">
                  <Card className="flex h-full flex-col justify-between">
                    <CardContent className="flex-grow p-6">
                      <StarRating rating={testimonial.rating} />
                      <blockquote className="mt-4 text-lg text-text-primary">
                        "{testimonial.quote}"
                      </blockquote>
                    </CardContent>
                    <div className="border-t border-border p-6">
                      <p className="font-semibold text-foreground">
                        {testimonial.name}
                      </p>
                      <p className="text-sm text-text-secondary">
                        {testimonial.title}
                      </p>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
};
