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
