import { motion } from "framer-motion";
import { Flame } from "lucide-react";

const highlights = [
  { name: "Sushi Happy Hour", desc: "Daily specials on select rolls", badge: "Special" },
  { name: "Sushi Rolls", desc: "Fresh, hand-crafted daily" },
  { name: "Tonkotsu Ramen", desc: "Rich, creamy pork bone broth" },
  { name: "Spicy Miso Ramen", desc: "Bold miso with chili kick" },
  { name: "Curry Udon", desc: "Thick noodles in savory curry" },
  { name: "Salmon Sashimi", desc: "Premium grade, melt-in-your-mouth" },
  { name: "Sashimi Dinner A", desc: "Chef's selection assortment" },
  { name: "Sushi Dinner B", desc: "Nigiri & roll combination" },
  { name: "Kabocha Tempura Roll", desc: "Sweet pumpkin tempura inside" },
  { name: "Asaka Special Sushi", desc: "Our signature platter" },
];

const HighlightsSection = () => (
  <section className="py-20 bg-section-warm">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-2">Our Favorites</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Menu Highlights</h2>
      </motion.div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="group bg-card rounded-lg p-5 hover:shadow-lg transition-all duration-300 border border-border hover:border-primary/30 relative"
          >
            {item.badge && (
              <span className="absolute top-3 right-3 flex items-center gap-1 bg-primary/10 text-primary text-xs font-semibold px-2 py-0.5 rounded-full">
                <Flame className="w-3 h-3" /> {item.badge}
              </span>
            )}
            <h3 className="font-display font-semibold text-base mb-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default HighlightsSection;
