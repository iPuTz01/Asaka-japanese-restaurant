import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import HeroSlider from "@/components/HeroSlider";
import HighlightsSection from "@/components/HighlightsSection";
import TrustBadge from "@/components/TrustBadge";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import MapSection from "@/components/MapSection";
import FinalCTA from "@/components/FinalCTA";

const Index = () => (
  <>
    <SiteHeader />
    <main>
      <HeroSlider />
      <TrustBadge />
      <HighlightsSection />
      <TestimonialsSection />
      <GallerySection />
      <MapSection />
      <FinalCTA />
    </main>
    <SiteFooter />
  </>
);

export default Index;
