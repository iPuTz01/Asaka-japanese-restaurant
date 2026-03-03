import { motion } from "framer-motion";
import { Flame } from "lucide-react";
import heroPlatter from "@/assets/hero-platter-5.jpg";

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

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const HighlightsSection = () => (
  <section className="py-20 relative overflow-hidden">
    {/* Subtle background image */}
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url(${heroPlatter})` }}
    />
    <div className="absolute inset-0 bg-section-warm/[0.96]" />

    <div className="container relative z-10">
      <div className="flex justify-center mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center bg-section-warm/80 backdrop-blur-sm rounded-xl py-6 px-4 w-full max-w-md"
      >
        <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-2 drop-shadow-sm">Our Favorites</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold drop-shadow-sm">Menu Highlights</h2>
      </motion.div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {highlights.map((item, i) => (
          <motion.div
            key={item.name}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-40px" }}
            variants={cardVariants}
            whileHover={{ y: -6, scale: 1.03 }}
            className="group bg-card/90 backdrop-blur-sm rounded-lg p-5 shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border hover:border-primary/30 relative cursor-default"
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
