import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="bg-background font-sans text-text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
};

export default Index;