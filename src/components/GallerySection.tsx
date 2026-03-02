import { motion } from "framer-motion";
import heroSushi from "@/assets/hero-sushi-1.jpg";
import heroRamen from "@/assets/hero-ramen-2.jpg";
import heroSashimi from "@/assets/hero-sashimi-3.jpg";
import heroTempura from "@/assets/hero-tempura-4.jpg";
import heroPlatter from "@/assets/hero-platter-5.jpg";

const images = [
  { src: heroPlatter, alt: "Sushi dinner platter" },
  { src: heroSushi, alt: "Fresh sushi rolls" },
  { src: heroRamen, alt: "Tonkotsu ramen bowl" },
  { src: heroSashimi, alt: "Salmon sashimi" },
  { src: heroTempura, alt: "Shrimp tempura" },
];

const GallerySection = () => (
  <section className="py-20 bg-background">
    <div className="container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-primary text-sm uppercase tracking-[0.2em] font-medium mb-2">From Our Kitchen</p>
        <h2 className="font-display text-3xl md:text-4xl font-bold">Gallery</h2>
      </motion.div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="aspect-square overflow-hidden rounded-lg group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
