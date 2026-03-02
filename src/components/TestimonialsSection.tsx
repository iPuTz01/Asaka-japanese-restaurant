import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah M.",
    text: "Best sushi in Indianapolis, hands down! The Asaka Special is absolutely incredible. Fresh, beautifully presented, and the service is always wonderful.",
    rating: 5,
  },
  {
    name: "James K.",
    text: "The tonkotsu ramen is like a warm hug. Rich, flavorful broth with perfect noodles. We come here every week and it never disappoints.",
    rating: 5,
  },
  {
    name: "Mei L.",
    text: "Authentic flavors that remind me of home. The sushi happy hour is an incredible deal. Great atmosphere and incredibly friendly staff!",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 bg-section-dark">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">What Our Guests Say</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Loved by the Community</h2>
      </motion.div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-muted/10 rounded-lg p-6 border border-muted/20"
          >
            <Quote className="w-8 h-8 text-primary/40 mb-3" />
            <p className="text-sm leading-relaxed mb-4 text-muted-foreground">{t.text}</p>
            <div className="flex items-center justify-between">
              <span className="font-display font-semibold text-sm">{t.name}</span>
              <div className="flex">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
