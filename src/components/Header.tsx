import { Button } from "@/components/ui/button";
import { ArrowRight, Menu, X } from "lucide-react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
  ];

  return (
    <header className="sticky top-0 z-50 p-4 md:top-4">
      <div className="container mx-auto flex items-center justify-between rounded-xl bg-white/80 p-3 shadow-sm backdrop-blur-sm md:p-4">
        <a href="#" className="text-2xl font-bold text-text-primary">
          MK
        </a>
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-base font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <Button asChild className="hidden bg-gray-900 text-base text-white hover:bg-gray-800 md:flex">
          <a href="#contact">
            Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </Button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMenuOpen && (
        <div className="container mx-auto mt-2 rounded-xl bg-white/95 p-4 shadow-lg md:hidden">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-base font-medium text-text-secondary transition-colors hover:text-text-primary"
              >
                {link.label}
              </a>
            ))}
            <Button asChild className="w-full bg-gray-900 text-base text-white hover:bg-gray-800">
              <a href="#contact" onClick={() => setIsMenuOpen(false)}>
                Let's Talk <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};