import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  return (
    <footer className="bg-background text-text-primary">
      <div className="container mx-auto px-4 py-24 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-16 bg-border"></div>
            <span className="text-sm uppercase tracking-widest text-text-secondary">
              Available to work
            </span>
            <div className="h-px w-16 bg-border"></div>
          </div>
          <h2 className="text-5xl font-bold text-foreground sm:text-6xl md:text-7xl">
            Let's Connect
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-text-secondary">
            Feel free to contact me if having any questions. I'm available for
            new projects or just for chatting.
          </p>
          <Button
            onClick={handleNavigate}
            variant="outline"
            className="mt-10 rounded-full border-border bg-transparent px-8 py-6 text-foreground hover:bg-secondary hover:text-secondary-foreground"
          >
            Let's Go
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto flex flex-col items-center justify-center px-4 py-6 md:flex-row md:px-6">
          <p className="text-center text-sm text-text-secondary">
            © Mushfiq Kabir, 2024. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};