import { Linkedin, Dribbble, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-12">
      <div className="container mx-auto px-4 text-center text-text-secondary md:px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-lg font-medium">hello@elenareed.design</p>
          <p className="text-lg font-medium">+1 (555) 123-4567</p>
          <div className="mt-4 flex gap-6">
            <a href="#" className="text-text-secondary hover:text-accent">
              <Linkedin size={24} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent">
              <Dribbble size={24} />
            </a>
            <a href="#" className="text-text-secondary hover:text-accent">
              <Twitter size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm">
            © 2023 Elena Reed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};