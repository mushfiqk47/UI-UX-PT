import { Button } from "./ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-6xl px-4 py-16 md:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-lg text-text-secondary">
            I'm always open to discussing new projects and design challenges.
          </p>
          <Button asChild className="mt-8">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
        <div className="mt-16 border-t border-border pt-8 text-center text-sm text-text-secondary">
          <p>&copy; 2024 Mushfiq Kabir. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};