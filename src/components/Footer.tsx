import { Button } from "@/components/ui/button";
import { ArrowRight, Linkedin, Dribbble, ArrowUp } from "lucide-react";
import { Briefcase } from "lucide-react";

export const Footer = () => {
  const socialLinks = [
    { href: "#", icon: <Dribbble size={20} />, label: "Dribbble" },
    { href: "https://www.behance.net/mushfiqkabir1", icon: <Briefcase size={20} />, label: "Behance" },
    { href: "#", icon: <Linkedin size={20} />, label: "LinkedIn" },
  ];

  return (
    <footer id="contact" className="bg-white px-4 pb-8 pt-20">
      <div className="container mx-auto">
        <div className="relative rounded-3xl bg-primary px-4 py-16 text-center text-white md:px-6">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Let's Create Impactful Designs Together 👍
          </h2>
          <Button asChild size="lg" className="mt-8 bg-black text-white hover:bg-gray-800">
            <a href="mailto:mushfiqk47@gmail.com">
              Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="absolute -top-5 right-4 h-12 w-12 rounded-full shadow-lg md:right-8"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp size={24} />
          </Button>
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-6 border-t pt-8 md:flex-row">
          <p className="text-sm text-text-secondary">
            © 2024 Mushfiq Kabir. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-text-secondary transition-colors hover:border-primary hover:text-primary"
              >
                {link.icon}
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};