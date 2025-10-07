import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Header = () => {
  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/#projects" },
    { name: "Skills", href: "/#skills" },
    { name: "Pricing", href: "/pricing" },
    { name: "FAQ", href: "/#faq" },
  ];

  return (
    <header className="fixed top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-xl font-bold">
          Mushfiq Kabir
        </Link>
        <nav className="hidden space-x-6 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-text-secondary transition-colors hover:text-text-primary"
            >
              {link.name}
            </a>
          ))}
        </nav>
        <Button asChild className="rounded-full">
          <Link to="/contact">Contact</Link>
        </Button>
      </div>
    </header>
  );
};