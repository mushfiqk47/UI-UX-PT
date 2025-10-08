import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CheckCircle2, Mail, Phone, MapPin } from "lucide-react";
import { useEffect } from "react";

const formSchema = z.object({
  firstName: z.string().min(2, "First name is too short."),
  lastName: z.string().min(2, "Last name is too short."),
  email: z.string().email("Please enter a valid email."),
  companyName: z.string().optional(),
  pricingPlan: z.string({ required_error: "Please select a pricing plan." }),
  budget: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters."),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms.",
  }),
});

const whyPartnerWithMe = [
    { title: "Clear & Consistent Communication", description: "No guessing games. You'll receive regular updates and have direct access to me throughout the project." },
    { title: "Reliable Delivery, Guaranteed", description: "I respect your time and business goals. You'll receive a clear timeline and can count on me to meet our deadlines." },
    { title: "Dedicated to Your Success", description: "Your project's success is my success. I'm invested in creating a solution that not only looks great but also achieves your objectives." },
    { title: "Professional Workflow", description: "From our first briefing to the final file handoff, you'll experience an organized, transparent, and collaborative process." },
];

const ContactPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      message: "",
      agreeToTerms: false,
    },
  });

  const pricingPlan = form.watch("pricingPlan");

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    console.log(values);
    form.reset();
  }

  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-6xl rounded-xl border border-border bg-card p-8 shadow-2xl md:p-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="text-text-primary">
              <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
                Let's Create Something Amazing Together
              </h1>
              <p className="mt-6 text-lg text-text-secondary">
                Start Your Project with a Trusted Design Partner. You're not just looking for a designer; you're looking for a partner to bring your vision to life. I focus on clear communication, reliable delivery, and designs that drive real results for your business.
              </p>
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-foreground">Why Partner With Me?</h2>
                <ul className="mt-6 space-y-6">
                  {whyPartnerWithMe.map((item) => (
                    <li key={item.title} className="flex items-start gap-4">
                      <CheckCircle2 className="h-6 w-6 flex-shrink-0 text-primary mt-1" />
                      <div>
                        <h3 className="font-semibold text-foreground">{item.title}</h3>
                        <p className="text-text-secondary">{item.description}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <FormField
                      control={form.control}
                      name="firstName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Alber" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name="lastName"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input placeholder="Susanto" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email Address</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="albert@susanto.com"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="companyName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Company Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Name company" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pricingPlan"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select a Pricing Plan</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a plan" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="starter">Starter - $25</SelectItem>
                            <SelectItem value="standard">Standard - $50</SelectItem>
                            <SelectItem value="advanced">Advanced - $100</SelectItem>
                            <SelectItem value="custom">Custom Plan</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {pricingPlan === 'custom' && (
                    <FormField
                      control={form.control}
                      name="budget"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Your Budget</FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., $500 - $1000" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  )}

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Write your message..."
                            className="min-h-[120px] resize-none"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="agreeToTerms"
                    render={({ field }) => (
                      <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                        <FormControl>
                          <Checkbox
                            checked={field.value}
                            onCheckedChange={field.onChange}
                          />
                        </FormControl>
                        <div className="space-y-1 leading-none">
                          <FormLabel>
                            I agree to the{" "}
                            <a href="#" className="text-primary hover:underline">
                              Terms of Use
                            </a>{" "}
                            and{" "}
                            <a href="#" className="text-primary hover:underline">
                              Privacy Policy
                            </a>
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full">
                    Submit
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;