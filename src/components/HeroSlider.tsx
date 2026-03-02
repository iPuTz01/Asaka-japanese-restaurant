import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarDays, ShoppingBag, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroSushi from "@/assets/hero-sushi-1.jpg";
import heroRamen from "@/assets/hero-ramen-2.jpg";
import heroSashimi from "@/assets/hero-sashimi-3.jpg";
import heroTempura from "@/assets/hero-tempura-4.jpg";
import heroPlatter from "@/assets/hero-platter-5.jpg";

const PHONE_HREF = "tel:+13175760556";

const slides = [
  { src: heroPlatter, alt: "Premium sushi platter at Asaka" },
  { src: heroSushi, alt: "Fresh sushi rolls" },
  { src: heroRamen, alt: "Authentic tonkotsu ramen" },
  { src: heroSashimi, alt: "Salmon sashimi" },
  { src: heroTempura, alt: "Crispy shrimp tempura" },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), []);
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), []);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  return (
    <section className="relative h-[85vh] min-h-[550px] max-h-[900px] overflow-hidden">
      {/* Background Images */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].src}
            alt={slides[current].alt}
            className="w-full h-full object-cover"
            loading={current === 0 ? "eager" : "lazy"}
          />
        </motion.div>
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/50 via-foreground/60 to-foreground/80" />

      {/* Arrows */}
      <button onClick={prev} className="absolute left-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-foreground/20 hover:bg-foreground/40 text-primary-foreground transition" aria-label="Previous slide">
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button onClick={next} className="absolute right-3 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-foreground/20 hover:bg-foreground/40 text-primary-foreground transition" aria-label="Next slide">
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? "bg-primary w-6" : "bg-primary-foreground/50"}`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center">
        <div className="container text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-accent text-sm md:text-base uppercase tracking-[0.25em] font-medium mb-4"
          >
            Authentic Japanese Cuisine
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-4 leading-tight"
          >
            Asaka Japanese<br />Restaurant
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-primary-foreground/80 text-base md:text-lg max-w-xl mx-auto mb-8"
          >
            Sushi · Ramen · Noodles · Full Bar — Dine-In & Takeout in Castleton, Indianapolis
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
          >
            <Button asChild variant="hero" size="lg">
              <a href={PHONE_HREF}>
                <Phone className="w-4 h-4" /> Call Now
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href="/contact#reserve">
                <CalendarDays className="w-4 h-4" /> Reserve a Table
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="lg">
              <a href={PHONE_HREF}>
                <ShoppingBag className="w-4 h-4" /> Order Takeout
              </a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
