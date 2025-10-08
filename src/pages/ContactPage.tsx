import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  return (
    <div className="bg-background font-sans text-text-primary">
      <Header />
      <main>
        <section id="contact" className="py-20 sm:py-32">
          <div className="container mx-auto max-w-6xl px-4 md:px-6">
            <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-24">
              <div>
                <p className="text-sm font-semibold uppercase tracking-widest text-primary">
                  Contact Me
                </p>
                <h2 className="mt-4 text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                  Let's Work Together
                </h2>
                <p className="mt-4 text-lg text-text-secondary">
                  Have a project in mind or interested in a collaboration? I'd love to hear about it. Fill out the form, and I'll get back to you as soon as possible.
                </p>
                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground">Trusted by Great People & Brands</h3>
                  <p className="mt-2 text-text-secondary">
                    I've had the pleasure of working with innovative startups and established market leaders to create user-centric digital experiences.
                  </p>
                </div>
              </div>
              <form className="space-y-4 rounded-lg border border-border bg-card p-8 shadow-lg">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <Input placeholder="Name" />
                  <Input type="email" placeholder="Email" />
                </div>
                <Textarea placeholder="Your Message" rows={5} />
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}