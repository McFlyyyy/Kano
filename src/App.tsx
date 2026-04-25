import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu as MenuIcon, 
  X, 
  Utensils, 
  Flame, 
  Leaf, 
  Beef, 
  Instagram, 
  Phone, 
  MapPin, 
  Clock,
  ChevronRight,
  Star,
  ShoppingBag,
  Navigation,
  MessageCircle,
  Video as TikTok
} from 'lucide-react';
import { Category, Dish } from './types';
import { MENU_DATA } from './constants';

// --- Helpers ---

const isOpenNow = () => {
  const now = new Date();
  const hours = now.getHours();
  // Assuming 11:00 - 22:00 daily
  return hours >= 11 && hours < 22;
};

// --- Components ---

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Menü', href: '#menu' },
    { name: 'Standort', href: '#location' },
    { name: 'Kontakt', href: '#contact' },
  ];

  return (
    <header className={`glass-header ${isScrolled ? 'shadow-md py-2' : 'py-4'}`}>
      <div className="container-custom flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group cursor-pointer">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white group-hover:rotate-12 transition-transform">
            <Flame size={24} />
          </div>
          <span className={`text-xl font-display font-bold tracking-tighter transition-colors ${isScrolled ? 'text-ink' : 'text-white md:text-ink'}`}>KANO KEBAB</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href}
              className="text-sm font-medium text-ink-muted hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </a>
          ))}
          <a href="https://wa.me/49123456789" className="btn-primary py-2 px-6 text-sm cursor-pointer">
            Jetzt bestellen
          </a>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className={`md:hidden p-2 transition-colors cursor-pointer ${isScrolled ? 'text-ink' : 'text-white'}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Menü öffnen"
        >
          {isMobileMenuOpen ? <X aria-hidden="true" /> : <MenuIcon aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface border-t border-ink/5 overflow-hidden"
          >
            <div className="container-custom py-6 flex flex-col gap-4">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href}
                  className="text-lg font-medium text-ink cursor-pointer"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a 
                href="https://wa.me/49123456789" 
                className="btn-primary w-full cursor-pointer"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Jetzt bestellen
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-hero-bg overflow-hidden flex items-center pt-32 pb-12"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(217,119,6,0.15),transparent_60%)]" />
      
      {/* Full Height Image with Modern Blend */}
      <motion.div 
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute top-0 right-0 w-full lg:w-[60%] h-full z-0"
      >
        <div className="relative w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=1200&auto=format&fit=crop" 
            alt="Frischer Döner Kebab" 
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          {/* Gradient Overlays for Modern Transition */}
          <div className="absolute inset-0 bg-gradient-to-r from-hero-bg via-hero-bg/40 to-transparent w-full hidden lg:block" />
          <div className="absolute inset-0 bg-hero-bg/60 lg:hidden" />
          <div className="absolute inset-0 bg-gradient-to-t from-hero-bg via-transparent to-transparent h-1/4 bottom-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-hero-bg via-transparent to-transparent h-1/4 top-0" />
        </div>
      </motion.div>

      <div className="relative z-10 w-full h-full flex flex-col justify-center px-6 md:px-16 lg:px-24">
        <div className="max-w-xl lg:max-w-3xl">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white text-left"
          >
            <div className="flex items-center justify-start gap-2 mb-6">
              <div className="flex text-accent" aria-label="4.9 von 5 Sternen">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={14} 
                    fill="currentColor" 
                    aria-hidden="true" 
                  />
                ))}
              </div>
              <span className="text-sm font-bold tracking-wide">4.9⭐ (438 Bewertungen)</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl xl:text-7xl mb-6 leading-[1.1] font-display font-bold">
              Frisch belegt.<br />
              <span className="text-primary">Perfekt gewürzt.</span><br />
              In Minuten bei dir.
            </h1>
            
            <p className="text-lg text-white/60 mb-8 max-w-lg lg:mx-0 leading-relaxed">
              Erlebe den besten Döner der Stadt. Handgeschichtetes Fleisch, knackiger Salat und unsere legendären hausgemachten Soßen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 justify-start items-center">
              <motion.a 
                href="https://wa.me/49123456789" 
                whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(217,119,6,0.4)" }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary text-base px-10 py-4 shadow-xl shadow-primary/20 cursor-pointer"
              >
                Jetzt bestellen
              </motion.a>
              <div className="flex flex-col items-start border-l border-white/10 pl-6">
                <span className="text-3xl font-bold">1.000+</span>
                <span className="text-[10px] text-white/40 uppercase tracking-widest font-semibold">Zufriedene Kunden</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Bestseller = () => {
  const bestsellers = MENU_DATA.filter(d => d.isBestseller);

  return (
    <section className="py-12 bg-white">
      <div className="container-custom">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl mb-2">Bestseller / Empfehlungen</h2>
          <div className="w-20 h-1 bg-primary rounded-full" />
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {bestsellers.map((dish) => (
            <motion.div
              key={dish.id}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className="bg-white rounded-[12px] shadow-sm border border-ink/5 overflow-hidden group cursor-pointer"
              onClick={() => document.getElementById(`dish-${dish.id}`)?.scrollIntoView({ behavior: 'smooth' })}
            >
              {dish.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
              <div className="p-6 relative">
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-[10px] font-bold" aria-label="Bestseller">
                  <Star size={12} fill="currentColor" aria-hidden="true" /> Beliebt
                </div>
                <span className="text-primary font-display font-bold text-lg mb-2 block">#{dish.number}</span>
                <h3 className="text-xl font-bold mb-2 text-ink">{dish.name}</h3>
                <p className="text-ink-muted text-sm mb-4 line-clamp-2">
                  {dish.description}
                </p>
                <div className="text-primary font-bold text-lg">
                  {dish.price.toFixed(2)} €
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuSection = () => {
  const [filter, setFilter] = useState<Category | 'All'>('All');
  const [filteredDishes, setFilteredDishes] = useState<Dish[]>(MENU_DATA);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      if (filter === 'All') {
        setFilteredDishes(MENU_DATA);
      } else {
        setFilteredDishes(MENU_DATA.filter(d => d.category === filter));
      }
      setIsLoading(false);
    }, 150); // Artificial delay for premium feel skeleton effect

    return () => clearTimeout(timer);
  }, [filter]);

  const categories = ['All', ...Object.values(Category)];

  const SkeletonCard = () => (
    <div className="bg-surface rounded-2xl border-2 border-ink/5 flex flex-col overflow-hidden animate-pulse">
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex justify-between items-start mb-4">
            <div className="w-16 h-4 bg-ink/5 rounded"></div>
            <div className="w-12 h-4 bg-ink/5 rounded"></div>
          </div>
          <div className="w-3/4 h-6 bg-ink/5 rounded mb-2"></div>
          <div className="w-full h-4 bg-ink/5 rounded mb-1"></div>
          <div className="w-5/6 h-4 bg-ink/5 rounded mb-4"></div>
        </div>
        <div className="pt-4 border-t border-ink/5 flex justify-between items-center">
          <div className="w-8 h-4 bg-ink/5 rounded"></div>
          <div className="w-4 h-4 bg-ink/5 rounded"></div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="menu" className="pt-12 pb-12 bg-[#F7F7F7]">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4">Unsere Speisekarte</h2>
          <p className="text-ink-muted max-w-xl mx-auto">
            Wähle aus unserer vielfältigen Auswahl an frischen Gerichten.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat as any)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all cursor-pointer ${
                filter === cat 
                  ? 'bg-primary text-white shadow-md' 
                  : 'bg-surface border border-ink/10 text-ink-muted hover:border-primary/50'
              }`}
            >
              {cat === 'All' ? 'Alle' : cat}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="min-h-[400px] relative">
          <AnimatePresence mode="wait">
            {isLoading ? (
              <motion.div 
                key="skeleton"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              >
                {[...Array(6)].map((_, i) => <SkeletonCard key={i} />)}
              </motion.div>
            ) : (
              <motion.div 
                key="grid"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
              >
                {filteredDishes.map((dish) => (
                  <motion.div
                    key={dish.id}
                    id={`dish-${dish.id}`}
                    layout
                    className="bg-surface rounded-2xl border-2 border-ink/10 flex flex-col overflow-hidden hover:border-primary/40 transition-colors"
                  >
                    <div className="p-6 flex flex-col justify-between flex-grow">
                      <div>
                        <div className="flex justify-between items-start mb-4">
                          <span className={`text-[10px] uppercase tracking-widest font-bold px-2 py-1 rounded ${
                            dish.category === Category.VEGAN ? 'bg-green-100 text-green-700' :
                            dish.category === Category.VEGETARIAN ? 'bg-amber-100 text-amber-700' :
                            dish.category === Category.DRINK ? 'bg-blue-100 text-blue-700' :
                            'bg-red-100 text-red-700'
                          }`}>
                            {dish.category}
                          </span>
                          <span className="font-display font-bold text-primary">
                            {dish.price.toFixed(2)} €
                          </span>
                        </div>
                        <h4 className="text-xl mb-2">{dish.name}</h4>
                        <p className="text-sm text-ink-muted leading-relaxed mb-4">
                          {dish.description}
                        </p>
                      </div>
                      <div className="pt-4 border-t border-ink/5 flex justify-between items-center">
                        <span className="text-xs font-bold text-primary bg-primary/5 px-2 py-1 rounded">
                          #{dish.number}
                        </span>
                        {dish.isBestseller && <Star size={14} className="text-primary" fill="currentColor" />}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const reviews = [
    {
      name: "Felix",
      text: "Brutal guter Döner. Das Brot ist einfach genial und das Fleisch saftig und zart. Auch der vegetarische Döner schmeckt top! Unglaublich gutes Preis-Leistungs-Verhältnis!",
      rating: 5,
      date: "vor 2 Wochen"
    },
    {
      name: "Florian Franke",
      text: "Das Fleisch und die Zutaten schmecken sehr gut. Der Inhaber ist auch sehr freundlich bzw seine Familie auch die dort arbeiten. Immer Sommer ist es sehr schön weil da kann man auch draußen sitzen",
      rating: 5,
      date: "vor einem Monat"
    },
    {
      name: "Julia",
      text: "4,9 Sterne lügen nicht. Der Döner mit Hähnchenfleisch war super lecker. Das Brot hat sooo frisch und fluffig geschmeckt 👌 Das Personal hat so eine gute Laune verbreitet, wirklich schön zu sehen wie viel Spaß man an der Arbeit haben kann. Ich komme gerne wieder!",
      rating: 5,
      date: "vor 3 Tagen"
    }
  ];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl mb-4 font-display">Was unsere Kunden sagen</h2>
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="flex items-center gap-2 text-accent">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={20} 
                    fill={i < 4 ? "currentColor" : "url(#star-grad-2)"} 
                    className={i === 4 ? "text-accent" : ""}
                  />
                ))}
                <svg width="0" height="0" className="absolute">
                  <defs>
                    <linearGradient id="star-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="90%" stopColor="currentColor" />
                      <stop offset="90%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <span className="font-bold text-ink text-xl">4.9/5 (438 Bewertungen)</span>
            </div>
            <a 
              href="https://www.google.com/search?sca_esv=33295543d8b8cd1e&sxsrf=ANbL-n6Ab0ZEQiJ1V-yBu2NAYEJxhsjRBw:1776957040330&q=kano+kebab+vaihingen+enz&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qOUwSLm_1SsPywZWsb_I5dTr64WghMW7i7EPtON8McsWph5JuN3YU8goaRFmjklqGyuruGho%3D&uds=ALYpb_kG5vW-vCilX_Rbjx0DZ5HJQ3LrtBGxka0fZK9-FjMg3HHOc-DD3kedZxS9Ye7N1wP5SqUmEDoPPpR9hhfSbpjrgQG2kGAQyjqcXPsBq22rQCXFGVGm3qqS3XUdXXeZixfxsIrB&sa=X&ved=2ahUKEwjX2K3poISUAxXE-wIHHTKVL50Q3PALegQIJRAF&biw=1272&bih=668&dpr=1.5" 
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-3 px-8 text-sm cursor-pointer inline-flex items-center gap-2"
            >
              Alle Bewertungen lesen
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-surface p-8 rounded-2xl border border-ink/5 shadow-sm relative"
            >
              <div className="flex text-accent mb-4">
                {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-ink-muted italic mb-6 leading-relaxed">
                "{review.text}"
              </p>
              <div className="flex justify-between items-center">
                <span className="font-bold text-ink">{review.name}</span>
                <span className="text-xs text-ink-muted">{review.date}</span>
              </div>
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary/5 rounded-full flex items-center justify-center text-primary/20">
                <MessageCircle size={24} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const InfoSection = () => {
  const open = isOpenNow();
  const dayIndex = new Date().getDay();
  const currentYear = new Date().getFullYear();

  return (
    <section id="location" className="py-20 bg-surface">
      <div className="container-custom">
        <div className="mb-12 text-center lg:text-left">
          <h2 className="text-3xl md:text-5xl mb-4 font-display">Besuche uns vor Ort</h2>
          <div className="flex items-center justify-center lg:justify-start gap-2 text-accent">
            <div className="flex text-accent">
              {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <span className="font-bold text-ink text-sm">4.9/5 (438 Bewertungen)</span>
          </div>
        </div>

        {/* 3-Column Modern Box */}
        <div className="bg-background rounded-3xl overflow-hidden shadow-2xl border border-ink/5 grid lg:grid-cols-[0.8fr_1.2fr_1fr]">
          
          {/* Column 1: Small Atmosphere Image */}
          <div className="relative h-64 lg:h-full overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1561651823-34feb02250e4?q=80&w=1200&auto=format&fit=crop" 
              alt="Imbiss Atmosphäre" 
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/10" />
          </div>

          {/* Column 2: Address & Contact */}
          <div className="p-8 lg:p-12 border-b lg:border-b-0 lg:border-r border-ink/5">
            <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Hier findest du uns</h3>
            <div className="space-y-4">
              <p className="text-xl md:text-2xl font-bold text-ink leading-tight">
                KANO Pizza - Pide - Döner
              </p>
              <a 
                href="https://maps.app.goo.gl/..." 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-2xl md:text-3xl font-display font-bold text-ink hover:text-primary transition-colors leading-tight"
              >
                Steinbeisstraße 41,<br />
                71665 Vaihingen
              </a>
              <div className="flex flex-wrap gap-4 pt-4">
                <motion.a 
                  href="tel:+49123456789" 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-white font-bold text-sm shadow-lg shadow-primary/20 cursor-pointer"
                >
                  <Phone size={16} /> Anrufen
                </motion.a>
                <motion.a 
                  href="https://maps.app.goo.gl/..." 
                  target="_blank"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 px-6 py-3 rounded-xl bg-ink text-white font-bold text-sm shadow-lg cursor-pointer"
                >
                  <MapPin size={16} /> Google Maps
                </motion.a>
              </div>
            </div>
          </div>

          {/* Column 3: Hours */}
          <div className="p-8 lg:p-12 bg-surface/30">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-primary font-bold uppercase tracking-widest text-xs">Öffnungszeiten</h3>
              <div className={`flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${open ? 'bg-green-500/10 text-green-600' : 'bg-red-500/10 text-red-600'}`}>
                <div className={`w-1.5 h-1.5 rounded-full ${open ? 'bg-green-500' : 'bg-red-500'} animate-pulse`} />
                {open ? 'Offen' : 'Zu'}
              </div>
            </div>

            <div className="space-y-2">
              {['Mo.', 'Di.', 'Mi.', 'Do.', 'Fr.', 'Sa.', 'So.'].map((day, idx) => {
                const isToday = (dayIndex === 0 ? 6 : dayIndex - 1) === idx;
                return (
                  <div 
                    key={day} 
                    className={`flex justify-between items-center py-1.5 px-3 rounded-lg transition-all ${isToday ? 'bg-primary/10 border border-primary/20 font-bold' : 'text-ink-muted'}`}
                  >
                    <span className="text-xs">{day}</span>
                    <span className="text-xs">11:00 - 22:00</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-20 bg-[#f5f2ee] overflow-hidden relative">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary/20 via-primary/40 to-primary/20" />
      <div className="container-custom relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl mb-8 text-ink font-display font-bold">Lust auf frisches Essen?</h2>
          <p className="text-ink-muted text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            Bestelle jetzt bequem über WhatsApp oder besuche uns direkt vor Ort. Wir freuen uns auf dich!
          </p>
          <motion.a 
            href="https://wa.me/49123456789" 
            whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgba(217,119,6,0.2)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary py-5 px-12 text-lg shadow-xl shadow-primary/20 cursor-pointer"
          >
            Jetzt per WhatsApp bestellen
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-ink text-white py-8 md:py-10 border-t border-primary">
      <div className="container-custom">
        {/* Top Row: 4 Columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* Column 1: Company */}
          <div className="space-y-3">
            <h3 className="text-lg font-display font-bold tracking-tighter uppercase">KANO KEBAB.</h3>
            <p className="text-white/40 text-xs leading-relaxed">
              Kebab Protocol<br />
              Vaihingen // Est. 2024
            </p>
          </div>

          {/* Column 2: Legal Content */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Rechtliches</h3>
            <nav className="flex flex-col gap-1.5">
              <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Impressum</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Datenschutz</a>
              <a href="#" className="text-white/40 hover:text-white transition-colors text-xs">Kontakt</a>
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Kontakt</h3>
            <div className="text-white/40 text-xs space-y-1.5 leading-relaxed">
              <p>Steinbeisstraße 41, 71665 Vaihingen</p>
              <p>+49 123 456 789</p>
              <p>hello@kanokebab.de</p>
            </div>
          </div>

          {/* Column 4: Hours */}
          <div className="space-y-3">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-primary">Öffnungszeiten</h3>
            <div className="text-white/40 text-xs space-y-1.5 leading-relaxed">
              <p className="font-bold text-white/50">Mo - So</p>
              <p>11:00 - 22:00 Uhr</p>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px w-full bg-white/5 mb-6" />

        {/* Bottom Row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] uppercase tracking-[0.15em] font-medium text-white/20">
          <div className="flex items-center gap-4">
            <span className="text-primary/60 font-bold">Social Media</span>
            <a href="#" className="hover:text-white transition-colors">
              Tik Tok
            </a>
          </div>

          <p className="text-center">© {currentYear} KANO KEBAB. ALL RIGHTS RESERVED.</p>

          <p>
            Made by <a href="#" className="text-white/40 font-bold hover:text-primary transition-colors">Webmanufaktur</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

const MobileStickyCTA = () => {
  return (
    <div className="md:hidden fixed bottom-6 left-0 right-0 z-50 px-4 pointer-events-none">
      <motion.a 
        href="https://wa.me/49123456789"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="btn-primary w-full shadow-2xl pointer-events-auto flex items-center justify-center gap-2 cursor-pointer"
      >
        <ShoppingBag size={20} /> Jetzt bestellen
      </motion.a>
    </div>
  );
};

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Bestseller />
        <MenuSection />
        <Testimonials />
        <InfoSection />
        <CTA />
      </main>
      <Footer />
      <MobileStickyCTA />
    </div>
  );
}
