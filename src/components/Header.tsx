import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 p-4">
      <div className="container mx-auto flex items-center justify-between rounded-full border border-border bg-background/50 p-3 backdrop-blur-sm">
        <Button variant="ghost" className="rounded-full">Menu</Button>
        <a href="#" className="text-xl font-bold text-foreground">
          MK
        </a>
        <Button asChild variant="ghost" className="rounded-full">
          <a href="#contact">Contact Us</a>
        </Button>
      </div>
    </header>
  );
};