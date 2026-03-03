import { Star, Users } from "lucide-react";
import { motion } from "framer-motion";

const TrustBadge = () => (
  <section className="py-14 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
      >
        <div className="flex items-center gap-3">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`w-5 h-5 ${i < 4 ? "fill-accent text-accent" : "fill-accent/60 text-accent/60"}`} />
            ))}
          </div>
          <div>
            <span className="font-bold text-lg">4.6</span>
            <span className="text-muted-foreground text-sm ml-1">/ 5</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-muted-foreground">
          <Users className="w-5 h-5" />
          <span className="font-medium">700+ Reviews</span>
        </div>
        <div className="text-sm text-muted-foreground font-medium">
          Dine-In & Takeout
        </div>
      </motion.div>
    </div>
  </section>
);

export default TrustBadge;
