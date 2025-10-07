import { Button } from "./ui/button";
import {
  Mail,
  Dribbble,
  Linkedin,
  Instagram,
  ArrowRight,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/contact");
  };

  const socialLinks = [
    { icon: <Mail size={20} />, href: "mailto:hello@example.com" },
    { icon: <Dribbble size={20} />, href: "#" },
    { icon: <Linkedin size={20} />, href: "#" },
    { icon: <Instagram size={20} />, href: "#" },
  ];

  return (
    <footer className="bg-black text-gray-300">
      <div className="container mx-auto px-4 py-24 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="mb-6 flex items-center gap-4">
            <div className="h-px w-16 bg-gray-600"></div>
            <span className="text-sm uppercase tracking-widest text-gray-400">
              Available to work
            </span>
            <div className="h-px w-16 bg-gray-600"></div>
          </div>
          <h2 className="text-5xl font-bold text-white sm:text-6xl md:text-7xl">
            Let's Connect
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-gray-400">
            Feel free to contact me if having any questions. I'm available for
            new projects or just for chatting.
          </p>
          <Button
            onClick={handleNavigate}
            variant="outline"
            className="mt-10 rounded-full border-gray-600 bg-transparent px-8 py-6 text-white hover:bg-gray-800 hover:text-white"
          >
            Let's Go
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
      </div>
      <div className="border-t border-gray-800">
        <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 py-6 md:flex-row md:px-6">
          <div className="text-center text-sm text-gray-500 md:text-left">
            <span>© Mushfiq Kabir, 2024</span>
            <a href="#" className="ml-4 hover:text-white">
              Legal Notice
            </a>
            <a href="#" className="ml-4 hover:text-white">
              Privacy Policy
            </a>
          </div>
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-600 text-gray-400 transition-colors hover:border-white hover:text-white"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};