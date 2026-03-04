import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";

import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery7 from "@/assets/gallery-7.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery9 from "@/assets/gallery-9.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery11 from "@/assets/gallery-11.jpg";
import gallery12 from "@/assets/gallery-12.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery17 from "@/assets/gallery-17.jpg";
import gallery18 from "@/assets/gallery-18.jpg";
import gallery19 from "@/assets/gallery-19.jpg";
import gallery20 from "@/assets/gallery-20.jpg";

const images = [
  { src: gallery1, alt: "Our team member in the kitchen" },
  { src: gallery2, alt: "Sushi rolls and hand rolls platter" },
  { src: gallery3, alt: "Japanese cherry blossom decoration" },
  { src: gallery4, alt: "Seared fish bowl with nori" },
  { src: gallery5, alt: "Staff member at the restaurant" },
  { src: gallery6, alt: "The Asaka team" },
  { src: gallery7, alt: "Fun moments at Asaka" },
  { src: gallery8, alt: "Glazed unagi over rice" },
  { src: gallery9, alt: "Fresh sashimi on wooden board" },
  { src: gallery10, alt: "Uni and ikura sushi board" },
  { src: gallery11, alt: "Sushi roll platter with tempura" },
  { src: gallery12, alt: "Grilled fish with potato salad and noodles" },
  { src: gallery13, alt: "Tempura sushi rolls close-up" },
  { src: gallery14, alt: "Shrimp tempura sushi platter" },
  { src: gallery15, alt: "Sashimi and nigiri assortment" },
  { src: gallery16, alt: "Bento box with tempura and teriyaki" },
  { src: gallery17, alt: "Hand roll in front of Asaka sign" },
  { src: gallery18, alt: "Premium sushi roll platter" },
  { src: gallery19, alt: "Tuna and salmon sashimi bowl" },
  { src: gallery20, alt: "Heart-shaped sushi box" },
];

const GalleryPage = () => (
  <>
    <SiteHeader />
    <main>
      <section className="bg-section-dark py-16 text-center">
        <div className="container">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">Our Story in Pictures</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Gallery</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            A glimpse into the food, team, and atmosphere at Asaka.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
            {images.map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
                className="break-inside-avoid overflow-hidden rounded-lg group"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
);

export default GalleryPage;
