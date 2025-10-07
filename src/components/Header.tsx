import { Button } from "@/components/ui/button";

export const Header = () => {
  return (
    <header className="fixed left-1/2 top-8 z-50 -translate-x-1/2">
      <div className="container mx-auto flex items-center justify-between rounded-full border border-border bg-background/50 p-3 backdrop-blur-sm">
        <Button variant="ghost" className="rounded-full">Menu</Button>
        <a href="#" className="text-xl font-bold text-foreground">
          MK
        </a>
        <Button asChild className="rounded-full">
          <a href="#">Contact</a>
        </Button>
      </div>
    </header>
  );
};