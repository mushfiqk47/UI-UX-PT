import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What types of design services do you offer?",
    answer: "I offer a range of design services including UI/UX design for web and mobile apps, graphic design for branding and marketing materials, and interactive prototyping. My goal is to create intuitive and visually appealing digital experiences.",
  },
  {
    question: "What is your design process like?",
    answer: "My process is collaborative and user-centered. It typically starts with understanding your goals and target audience, followed by research, wireframing, prototyping, and visual design. I value client feedback at every stage to ensure the final product meets your expectations.",
  },
  {
    question: "How are your projects priced?",
    answer: "Pricing depends on the project's scope and complexity. I offer fixed-price packages for common requests, which you can see on my pricing page. For custom projects, I provide a detailed quote after an initial consultation. My goal is to provide transparent and fair pricing.",
  },
  {
    question: "How long does a typical project take?",
    answer: "The timeline varies depending on the project. A simple landing page might take a few days, while a full app design could take several weeks. I'll provide a detailed project timeline after we discuss your specific needs.",
  },
  {
    question: "What design tools do you primarily use?",
    answer: "I primarily use Figma and Adobe XD for UI/UX design and prototyping. For graphic design work, I rely on Adobe Photoshop and Illustrator to create high-quality visuals and branding assets.",
  },
];

import { Reveal } from "@/components/Reveal";

export const FAQ = () => {
  return (
    <section id="faq" className="py-20 sm:py-32">
      <div className="container mx-auto grid max-w-6xl gap-12 px-4 md:grid-cols-3 md:px-6">
        <div className="md:col-span-1">
          <Reveal>
            <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Frequently Asked Questions
            </h2>
          </Reveal>
          <Reveal delayMs={100}>
            <p className="mt-4 text-text-secondary">
              Here are some common questions about my services and process. If you have other questions, feel free to reach out.
            </p>
          </Reveal>
        </div>
        <div className="md:col-span-2">
          <Reveal delayMs={150}>
            <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-base text-text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
