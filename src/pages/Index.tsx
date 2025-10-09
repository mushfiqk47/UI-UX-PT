import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SoftwareCarousel } from "@/components/SoftwareCarousel";
import { FeaturedProjects } from "@/components/FeaturedProjects";

const Index = () => {
  return (
    <div className="bg-background font-sans text-text-primary">
      <Header />
      <main>
        <Hero />
        <SoftwareCarousel />
        <Skills />
        <Testimonials />
        <About />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
