import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { toast } from "sonner";

const PHONE = "(317) 576-0556";
const PHONE_HREF = "tel:+13175760556";

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      toast.success("Reservation request sent! We'll confirm shortly.");
    }, 1000);
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-section-dark py-16 text-center">
          <div className="container">
            <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">Get in Touch</p>
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Contact & Reservations</h1>
            <p className="text-muted-foreground max-w-lg mx-auto">
              Call us or fill out the form below to reserve your table.
            </p>
          </div>
        </section>

        <section className="py-16 bg-background">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Reservation Form */}
              <motion.div
                id="reserve"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="font-display text-2xl font-bold mb-6">Reserve a Table</h2>
                {submitted ? (
                  <div className="text-center py-12 bg-card rounded-lg border border-border">
                    <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                    <h3 className="font-display text-xl font-bold mb-2">Request Received!</h3>
                    <p className="text-muted-foreground">We'll call or email to confirm your reservation.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" name="name" required placeholder="Your name" maxLength={100} />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone *</Label>
                        <Input id="phone" name="phone" type="tel" required placeholder="(555) 000-0000" maxLength={20} />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" name="email" type="email" placeholder="you@email.com" maxLength={255} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="party">Party Size *</Label>
                        <Input id="party" name="party" type="number" min={1} max={20} required placeholder="2" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="date">Preferred Date *</Label>
                        <Input id="date" name="date" type="date" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="time">Preferred Time *</Label>
                        <Input id="time" name="time" type="time" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Special Requests</Label>
                      <Textarea id="message" name="message" placeholder="Allergies, celebrations, seating preference..." maxLength={1000} rows={3} />
                    </div>
                    <Button type="submit" variant="cta" size="lg" className="w-full" disabled={loading}>
                      {loading ? "Sending..." : "Request Reservation"}
                    </Button>
                    <p className="text-xs text-muted-foreground text-center">
                      For immediate reservations, call <a href={PHONE_HREF} className="text-primary font-semibold">{PHONE}</a>
                    </p>
                  </form>
                )}
              </motion.div>

              {/* Info & Map */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Click to call */}
                <div className="bg-card rounded-lg p-6 border border-border text-center">
                  <h3 className="font-display text-lg font-semibold mb-3">Call Us Directly</h3>
                  <Button asChild variant="cta" size="lg" className="text-lg px-10">
                    <a href={PHONE_HREF}>
                      <Phone className="w-5 h-5" /> {PHONE}
                    </a>
                  </Button>
                </div>

                {/* Hours */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-display text-lg font-semibold mb-4 flex items-center gap-2">
                    <Clock className="w-5 h-5 text-primary" /> Business Hours
                  </h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between"><span>Monday – Thursday</span><span className="font-medium">11:00 AM – 9:30 PM</span></div>
                    <div className="flex justify-between"><span>Friday – Saturday</span><span className="font-medium">11:00 AM – 9:30 PM</span></div>
                    <div className="flex justify-between"><span>Sunday</span><span className="font-medium">11:30 AM – 9:30 PM</span></div>
                  </div>
                </div>

                {/* Address */}
                <div className="bg-card rounded-lg p-6 border border-border">
                  <h3 className="font-display text-lg font-semibold mb-3 flex items-center gap-2">
                    <MapPin className="w-5 h-5 text-primary" /> Location
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    6414 E 82nd St, Indianapolis, IN 46250<br />Castle Run Shopping Center
                  </p>
                  <div className="rounded-lg overflow-hidden aspect-video">
                    <iframe
                      title="Asaka location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.0!2d-86.066!3d39.882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814b3880c78d9a9%3A0x9e6c7f15c5a8e0b0!2s6414%20E%2082nd%20St%2C%20Indianapolis%2C%20IN%2046250!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
};

export default ContactPage;
