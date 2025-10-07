import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
];

export const Header = () => {
  return (
    <header className="fixed left-1/2 top-8 z-50 -translate-x-1/2">
      <div className="container mx-auto flex items-center justify-between rounded-full border border-border bg-background/50 p-3 backdrop-blur-sm">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="rounded-full">Menu</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start">
            {navLinks.map((link) => (
              <DropdownMenuItem key={link.href} asChild>
                <a href={link.href}>{link.label}</a>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        
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