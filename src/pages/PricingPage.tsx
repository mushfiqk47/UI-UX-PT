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
    description: "1 Screen/Landing Page",
    details: "Clean Figma layout, Responsive-ready UI.",
    delivery: "1 day",
    revisions: "3",
    sourceFiles: false,
    isRecommended: false,
  },
  {
    name: "Standard",
    price: "$50",
    description: "10 Mobile Screens/5 Web Pages",
    details: "Full Figma Design System, Mobile & Website, UI/UX.",
    delivery: "3 days",
    revisions: "8",
    sourceFiles: true,
    isRecommended: false,
  },
  {
    name: "Advanced",
    price: "$100",
    description: "20 Mobile Screens/10 Web Pages",
    details: "Amazing concepts, all source files, and unlimited revisions.",
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
            Transparent Pricing
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-xl text-text-secondary">
            Choose the plan that's right for you. No hidden fees, just beautiful design delivered on time. I'm committed to providing value and ensuring you're 100% satisfied with the final result.
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
            <h2 className="text-3xl font-bold text-center">Optional Add-ons</h2>
            <p className="text-center text-text-secondary mt-2">You can add these on the next page.</p>
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