import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const plans = [
  {
    name: "Starter",
    price: "$25",
    description: "Perfect for a single, focused design.",
    details: "Includes one screen or landing page with a clean, responsive-ready Figma layout.",
    delivery: "1 day",
    revisions: "3",
    sourceFiles: false,
    isRecommended: false,
  },
  {
    name: "Standard",
    price: "$50",
    description: "Ideal for small to medium-sized projects.",
    details: "Covers up to 10 mobile screens or 5 web pages, including a full UI/UX workflow and design system.",
    delivery: "3 days",
    revisions: "8",
    sourceFiles: true,
    isRecommended: false,
  },
  {
    name: "Advanced",
    price: "$100",
    description: "A comprehensive solution for larger projects.",
    details: "Up to 20 mobile screens or 10 web pages, with advanced concepts, all source files, and unlimited revisions.",
    delivery: "7 days",
    revisions: "Unlimited",
    sourceFiles: true,
    isRecommended: true,
  },
];

const addOns = [
    { name: "Fast Delivery", price: "+$20 - $40" },
    { name: "Additional Revision", price: "+$5" },
    { name: "Extra Page Website (+1 Day)", price: "+$10" },
    { name: "Extra Page Mobile", price: "+$5" },
];

const PricingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-5xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Design Packages
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-text-secondary">
            I offer clear, upfront pricing to match the scope of your project. Each package is designed to deliver exceptional value and a high-quality, user-centric final product. Let's find the perfect fit for your vision.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={cn(
                "relative flex flex-col rounded-2xl border border-border bg-card p-8 shadow-lg",
                plan.isRecommended && "border-2 border-primary"
              )}
            >
              {plan.isRecommended && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-sm font-semibold text-primary-foreground">
                  Highly Recommended
                </div>
              )}
              <h3 className="text-2xl font-semibold">{plan.name}</h3>
              <p className="mt-4 text-5xl font-bold tracking-tight">
                {plan.price}
              </p>
              <p className="mt-4 font-semibold text-text-primary">{plan.description}</p>
              <p className="text-sm text-text-secondary">{plan.details}</p>
              
              <ul className="mt-8 flex-grow space-y-4">
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Delivery Time: <strong>{plan.delivery}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  <span>Revisions: <strong>{plan.revisions}</strong></span>
                </li>
                <li className="flex items-center gap-3">
                  {plan.sourceFiles ? (
                    <Check className="h-5 w-5 flex-shrink-0 text-primary" />
                  ) : (
                    <Minus className="h-5 w-5 flex-shrink-0 text-text-secondary" />
                  )}
                  <span>Source Files</span>
                </li>
              </ul>

              <Button asChild className="mt-10 w-full">
                <Link to="/contact">Get Started</Link>
              </Button>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-24 max-w-4xl rounded-xl border border-border bg-card p-8">
            <h2 className="text-3xl font-bold text-center">Customize Your Package</h2>
            <p className="text-center text-text-secondary mt-2">Need something extra? Enhance your project with these popular add-ons.</p>
            <div className="mt-8 space-y-4">
                {addOns.map(addon => (
                    <div key={addon.name} className="flex justify-between border-b border-border pb-2">
                        <span className="text-text-primary">{addon.name}</span>
                        <span className="font-semibold">{addon.price}</span>
                    </div>
                ))}
            </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PricingPage;