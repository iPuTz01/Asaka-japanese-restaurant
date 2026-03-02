import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { motion } from "framer-motion";
import { Flame } from "lucide-react";

interface MenuItem {
  name: string;
  desc?: string;
  price?: string;
  badge?: string;
}

interface MenuCategory {
  title: string;
  items: MenuItem[];
}

const menuData: MenuCategory[] = [
  {
    title: "Sushi Happy Hour",
    items: [
      { name: "California Roll", price: "$5", badge: "Happy Hour" },
      { name: "Spicy Tuna Roll", price: "$6", badge: "Happy Hour" },
      { name: "Salmon Avocado Roll", price: "$6", badge: "Happy Hour" },
      { name: "Philadelphia Roll", price: "$5", badge: "Happy Hour" },
      { name: "Shrimp Tempura Roll", price: "$6", badge: "Happy Hour" },
    ],
  },
  {
    title: "Sushi Rolls",
    items: [
      { name: "Dragon Roll", desc: "Eel, avocado, cucumber topped with avocado", price: "$16" },
      { name: "Rainbow Roll", desc: "California roll topped with assorted sashimi", price: "$17" },
      { name: "Spider Roll", desc: "Soft shell crab, cucumber, avocado", price: "$15" },
      { name: "Kabocha Tempura Roll", desc: "Sweet pumpkin tempura, spicy mayo", price: "$14" },
      { name: "Asaka Special Roll", desc: "Chef's signature creation", price: "$18" },
      { name: "Volcano Roll", desc: "Baked seafood on California roll", price: "$16" },
    ],
  },
  {
    title: "Sashimi",
    items: [
      { name: "Salmon Sashimi", desc: "6 pieces of fresh salmon", price: "$14" },
      { name: "Tuna Sashimi", desc: "6 pieces of bluefin tuna", price: "$15" },
      { name: "Sashimi Dinner A", desc: "Chef's selection, 15 pieces", price: "$26" },
      { name: "Yellowtail Sashimi", desc: "6 pieces", price: "$14" },
    ],
  },
  {
    title: "Sushi Dinners",
    items: [
      { name: "Sushi Dinner A", desc: "8 pcs nigiri, 1 roll", price: "$22" },
      { name: "Sushi Dinner B", desc: "10 pcs nigiri, 1 roll, miso soup", price: "$28" },
      { name: "Asaka Special Sushi Dinner", desc: "Chef's premium selection", price: "$35" },
      { name: "Chirashi", desc: "Assorted sashimi over sushi rice", price: "$24" },
    ],
  },
  {
    title: "Ramen",
    items: [
      { name: "Tonkotsu Ramen", desc: "Rich pork bone broth, chashu, egg, nori", price: "$16" },
      { name: "Spicy Miso Ramen", desc: "Miso broth with chili, ground pork, corn", price: "$16" },
      { name: "Shoyu Ramen", desc: "Soy sauce broth, chicken, bamboo shoots", price: "$15" },
      { name: "Vegetable Ramen", desc: "Miso broth with seasonal vegetables", price: "$14" },
    ],
  },
  {
    title: "Udon",
    items: [
      { name: "Curry Udon", desc: "Thick noodles in Japanese curry broth", price: "$15" },
      { name: "Tempura Udon", desc: "With shrimp and vegetable tempura", price: "$16" },
      { name: "Nabeyaki Udon", desc: "Hot pot style with shrimp tempura, egg", price: "$17" },
    ],
  },
  {
    title: "Appetizers",
    items: [
      { name: "Edamame", price: "$5" },
      { name: "Gyoza", desc: "Pan-fried pork dumplings (6 pcs)", price: "$7" },
      { name: "Takoyaki", desc: "Octopus balls with bonito flakes", price: "$8" },
      { name: "Agedashi Tofu", desc: "Fried tofu in dashi broth", price: "$7" },
    ],
  },
  {
    title: "Tempura",
    items: [
      { name: "Shrimp Tempura", desc: "5 pieces with dipping sauce", price: "$13" },
      { name: "Vegetable Tempura", desc: "Assorted seasonal vegetables", price: "$10" },
      { name: "Combo Tempura", desc: "Shrimp and vegetables", price: "$15" },
    ],
  },
  {
    title: "Specials",
    items: [
      { name: "Bento Box Lunch", desc: "Choice of entrée with sides", price: "$14" },
      { name: "Teriyaki Chicken", desc: "Grilled chicken with teriyaki sauce", price: "$15" },
      { name: "Salmon Teriyaki", desc: "Grilled salmon fillet", price: "$18" },
    ],
  },
  {
    title: "Drinks & Bar",
    items: [
      { name: "Japanese Beer", desc: "Asahi, Sapporo, Kirin", price: "$6" },
      { name: "Hot Sake", price: "$7" },
      { name: "Cold Sake", desc: "Premium selection", price: "$9–15" },
      { name: "Japanese Whisky", desc: "Suntory, Hibiki", price: "$12–18" },
      { name: "Green Tea", price: "$3" },
      { name: "Ramune Soda", price: "$4" },
    ],
  },
];

const MenuPage = () => (
  <>
    <SiteHeader />
    <main>
      {/* Hero */}
      <section className="bg-section-dark py-16 text-center">
        <div className="container">
          <p className="text-accent text-sm uppercase tracking-[0.2em] font-medium mb-2">Explore Our</p>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-3">Menu</h1>
          <p className="text-muted-foreground max-w-lg mx-auto">
            From hand-crafted sushi to steaming ramen bowls — discover the flavors of Japan.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container max-w-4xl">
          {menuData.map((cat, ci) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.03 }}
              className="mb-12"
            >
              <h2 className="font-display text-2xl font-bold mb-1 flex items-center gap-2">
                {cat.title}
                {cat.title.includes("Happy Hour") && <Flame className="w-5 h-5 text-primary" />}
              </h2>
              <div className="w-12 h-0.5 bg-primary mb-6" />
              <div className="space-y-4">
                {cat.items.map((item) => (
                  <div key={item.name} className="flex justify-between items-start gap-4 group">
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-medium">{item.name}</span>
                        {item.badge && (
                          <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">{item.badge}</span>
                        )}
                      </div>
                      {item.desc && <p className="text-sm text-muted-foreground mt-0.5">{item.desc}</p>}
                    </div>
                    {item.price && (
                      <span className="font-display font-semibold text-primary shrink-0">{item.price}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
          <p className="text-center text-sm text-muted-foreground mt-8">
            Prices and availability may vary. Please call <a href="tel:+13175760556" className="text-primary font-semibold hover:underline">(317) 576-0556</a> for current specials.
          </p>
        </div>
      </section>
    </main>
    <SiteFooter />
  </>
);

export default MenuPage;
