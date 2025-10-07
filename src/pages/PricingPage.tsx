import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const plans = [
  {
    name: "Starter",
    price: "$25",
    description: "Perfect for a single, focused design.",
    features: [
      "1 Finalized Landing Page",
      "Clean, Responsive-Ready Figma File",
      "1-2 Day Delivery",
      "3 Rounds of Revisions",
      "Includes Source Files (Figma)",
    ],
    isRecommended: false,
  },
  {
    name: "Standard",
    price: "$50",
    description: "Ideal for small to medium-sized projects.",
    features: [
      "Up to 10 Mobile Screens or 5 Web Pages",
      "Full UI/UX Workflow (Wireframes & Mockups)",
      "Basic Style Guide & Component Library",
      "3-5 Day Delivery",
      "8 Rounds of Revisions",
      "Includes Source Files (Figma)",
    ],
    isRecommended: false,
  },
  {
    name: "Advanced",
    price: "$100",
    description: "A comprehensive solution for larger projects.",
    features: [
      "Up to 20 Mobile Screens or 10 Web Pages",
      "Advanced UI Concepts & Interactions",
      "Full Design System & Asset Handoff",
      "7-10 Day Delivery",
      "Priority Revisions & Final Polish",
      "Includes Source Files (Figma)",
    ],
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
              
              <div className="mt-8 flex-grow">
                <h4 className="font-semibold text-text-primary">What's Included:</h4>
                <ul className="mt-4 space-y-4 text-text-secondary">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <Check className="h-5 w-5 flex-shrink-0 text-primary mt-1" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

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