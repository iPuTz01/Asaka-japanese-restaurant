import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Phone, Menu, X, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const PHONE = "(317) 576-0556";
const PHONE_HREF = "tel:+13175760556";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/menu", label: "Menu" },
  { to: "/gallery", label: "Gallery" },
  { to: "/contact", label: "Contact" },
];

const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary/50">
      <div className="container flex items-center justify-between h-16 md:h-18">
        <Link to="/" className="font-display text-xl md:text-2xl font-bold text-secondary-foreground tracking-wide">
          Asaka
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors text-secondary-foreground/80 hover:text-primary-foreground",
                location.pathname === link.to && "text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a href="https://www.facebook.com/indyAsaka/" target="_blank" rel="noopener noreferrer" aria-label="Asaka on Facebook" className="text-secondary-foreground/80 hover:text-primary-foreground transition-colors">
            <Facebook className="w-5 h-5" />
          </a>
          <Button asChild variant="hero" size="sm" className="hidden sm:inline-flex">
            <a href={PHONE_HREF}>
              <Phone className="w-4 h-4" />
              Call Now
            </a>
          </Button>
          <Button asChild variant="hero" size="icon" className="sm:hidden">
            <a href={PHONE_HREF} aria-label="Call Asaka">
              <Phone className="w-4 h-4" />
            </a>
          </Button>
          <button
            className="md:hidden text-secondary-foreground p-2"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {open && (
        <nav className="md:hidden bg-secondary border-t border-secondary/50 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={cn(
                "block px-6 py-3 text-sm font-medium uppercase tracking-wide text-secondary-foreground/80 hover:text-primary-foreground hover:bg-secondary/80 transition-colors",
                location.pathname === link.to && "text-primary-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="px-6 pt-2">
            <Button asChild variant="hero" className="w-full">
              <a href={PHONE_HREF}>
                <Phone className="w-4 h-4" />
                {PHONE}
              </a>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
