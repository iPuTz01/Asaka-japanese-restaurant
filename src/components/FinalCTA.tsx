import { motion } from "framer-motion";
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const PHONE = "(317) 576-0556";
const PHONE_HREF = "tel:+13175760556";

const FinalCTA = () => (
  <section className="py-20 bg-section-dark text-center">
    <div className="container max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-3">Ready to Dine?</p>
        <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">Your Table Awaits</h2>
        <p className="text-muted-foreground mb-8 text-lg">
          Call us now or visit our Contact page to make a reservation. We look forward to serving you.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild variant="cta" size="lg" className="text-base px-10">
            <a href={PHONE_HREF}>
              <Phone className="w-5 h-5" /> {PHONE}
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="lg">
            <a href="/contact#reserve">Make a Reservation</a>
          </Button>
        </div>
      </motion.div>
    </div>
  </section>
);

export default FinalCTA;
