import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  return (
    <header className="fixed left-1/2 top-8 z-50 -translate-x-1/2">
      <div className="container mx-auto flex items-center justify-between rounded-full border border-border bg-background/50 p-3 backdrop-blur-sm">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <div className="flex flex-col gap-6 p-6">
              <a href="#" className="text-xl font-bold text-foreground">
                MK
              </a>
              <nav className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-lg text-text-secondary transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
        <a href="#" className="text-xl font-bold text-foreground">
          MK
        </a>
        <Button asChild className="rounded-full">
          <a href="#contact">Contact</a>
        </Button>
      </div>
    </header>
  );
};