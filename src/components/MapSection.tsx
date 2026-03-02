import { motion } from "framer-motion";
import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "(317) 576-0556";
const PHONE_HREF = "tel:+13175760556";

const MapSection = () => (
  <section className="py-20 bg-section-warm">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-2">Find Us</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Visit Us</h2>
      </motion.div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="rounded-lg overflow-hidden shadow-lg aspect-video lg:aspect-auto"
        >
          <iframe
            title="Asaka Japanese Restaurant Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3058.0!2d-86.066!3d39.882!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8814b3880c78d9a9%3A0x9e6c7f15c5a8e0b0!2s6414%20E%2082nd%20St%2C%20Indianapolis%2C%20IN%2046250!5e0!3m2!1sen!2sus!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0, minHeight: "300px" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          <div className="flex items-start gap-4">
            <MapPin className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Address</h3>
              <p className="text-muted-foreground">6414 E 82nd St<br />Indianapolis, IN 46250<br />Castle Run Shopping Center</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Clock className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Hours</h3>
              <p className="text-muted-foreground">Open Daily · Closes at 9:30 PM</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <Phone className="w-6 h-6 text-primary mt-1 shrink-0" />
            <div>
              <h3 className="font-display font-semibold text-lg mb-1">Phone</h3>
              <a href={PHONE_HREF} className="text-primary font-semibold hover:underline text-lg">{PHONE}</a>
            </div>
          </div>
          <div className="flex gap-3 mt-2">
            <Button asChild variant="default" size="lg">
              <a href="/contact#reserve">Reserve a Table</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href={PHONE_HREF}>
                <Phone className="w-4 h-4" /> Call to Order
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default MapSection;
