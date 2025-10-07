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
  description: z.string().min(1, "Please select an option."),
  message: z.string().min(10, "Message must be at least 10 characters."),
  agreeToTerms: z.boolean().refine((val) => val === true, {
    message: "You must agree to the terms.",
  }),
});

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

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. We'll get back to you soon.",
    });
    console.log(values);
    form.reset();
  }

  const features = [
    "Reliable Delivery",
    "Comprehensive Token & Digest",
    "Customizable Notifications",
    "Real-Time Updates",
    "Seamless Integration",
  ];

  return (
    <div className="bg-background font-sans text-foreground">
      <Header />
      <main className="container mx-auto px-4 py-24 sm:px-6 lg:py-32">
        <div className="mx-auto max-w-6xl rounded-xl border border-border bg-card p-8 shadow-2xl md:p-12">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            <div className="text-text-primary">
              <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                Contact Us
              </p>
              <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
                Get in Touch with Us
              </h1>
              <p className="mt-6 text-lg text-text-secondary">
                We're here to help. Whether you're interested in learning more
                about our services or need support, we're happy to assist you.
              </p>
              <ul className="mt-8 space-y-4">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <span className="text-lg font-medium">{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-12 border-t border-border pt-8">
                <h2 className="text-xl font-semibold text-foreground">
                  General Contact Info
                </h2>
                <div className="mt-4 space-y-4 text-text-secondary">
                  <p className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>+8801724548528</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <span>mushfiqk47@gmail.com</span>
                  </p>
                  <p className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <span>Dhaka, Bangladesh</span>
                  </p>
                </div>
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
                    name="description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Which best describes you?</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select one" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="designer">Designer</SelectItem>
                            <SelectItem value="developer">Developer</SelectItem>
                            <SelectItem value="business">
                              Business Owner
                            </SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
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