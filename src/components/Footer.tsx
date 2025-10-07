import { Briefcase } from "lucide-react";

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white py-12">
      <div className="container mx-auto px-4 text-center text-text-secondary md:px-6">
        <div className="flex flex-col items-center justify-center gap-4">
          <p className="text-lg font-medium">mushfiqk47@gmail.com</p>
          <p className="text-lg font-medium">+8801724548528</p>
          <div className="mt-4 flex justify-center gap-6">
            <a href="https://www.behance.net/mushfiqkabir1" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-accent">
              <Briefcase size={24} />
            </a>
          </div>
        </div>
        <div className="mt-8 border-t pt-8">
          <p className="text-sm">
            © 2024 Mushfiq Kabir. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};