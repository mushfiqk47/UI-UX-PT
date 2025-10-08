import { Button } from "./ui/button";
import { Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const navLinks = [
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Skills",
      href: isHomePage ? "#skills" : "/#skills",
    },
    {
      label: "Testimonials",
      href: isHomePage ? "#testimonials" : "/#testimonials",
    },
    {
      label: "About",
      href: isHomePage ? "#about" : "/#about",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <Link to="/" className="text-2xl font-bold text-primary">
          Mushfiq
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-medium text-text-secondary transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:block">
          <Button asChild>
            <Link to="/contact">Hire Me</Link>
          </Button>
        </div>
        <button className="p-2 md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Open menu</span>
        </button>
      </div>
    </header>
  );
};
