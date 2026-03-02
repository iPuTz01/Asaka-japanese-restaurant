import { Link } from "react-router-dom";
import { Phone, MapPin, Clock } from "lucide-react";

const PHONE = "(317) 576-0556";
const PHONE_HREF = "tel:+13175760556";

const SiteFooter = () => (
  <footer className="bg-section-dark py-16">
    <div className="container">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-display text-2xl font-bold text-gradient-gold mb-4">Asaka</h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            Authentic Japanese cuisine in the heart of Indianapolis. Traditional sushi, ramen, and more — crafted with care.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">Home</Link>
            <Link to="/menu" className="text-sm text-muted-foreground hover:text-primary transition-colors">Menu</Link>
            <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact & Reservations</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <div className="flex flex-col gap-3 text-sm text-muted-foreground">
            <a href={PHONE_HREF} className="flex items-center gap-2 hover:text-primary transition-colors">
              <Phone className="w-4 h-4" /> {PHONE}
            </a>
            <div className="flex items-start gap-2">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
              <span>6414 E 82nd St, Indianapolis, IN 46250<br />Castle Run Shopping Center</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" /> Open Daily · Closes 9:30 PM
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-muted/20 pt-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Asaka Japanese Restaurant. All rights reserved. LGBTQ+ Friendly.
      </div>
    </div>
  </footer>
);

export default SiteFooter;
