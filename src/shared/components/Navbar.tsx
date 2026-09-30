import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Phone } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';

interface NavbarProps {
  onOpenQuoteModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuoteModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('hero');

  const navLinks = [
    { id: 'hero', name: 'Accueil', href: '#hero' },
    { id: 'prestations', name: 'Prestations', href: '#prestations' },
    { id: 'qui-sommes-nous', name: 'À Propos', href: '#qui-sommes-nous' },
    { id: 'realisations', name: 'Réalisations', href: '#realisations' },
    { id: 'avis', name: 'Avis Clients', href: '#avis' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Real-time Scrollspy UX Feedback matching exact page sequence
      const sectionIds = ['hero', 'prestations', 'qui-sommes-nous', 'realisations', 'avis'];
      const scrollPosition = window.scrollY + 250;

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el && el.offsetTop <= scrollPosition) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 85;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
    }
  };

  return (
    <>
      {/* Sleek Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-taupe-surface/95 backdrop-blur-md shadow-sm py-3.5 border-b border-taupe-light/30'
            : 'bg-gradient-to-b from-black/75 via-black/35 to-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          
          {/* Brand Logo & Monograph */}
          <a
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero', 'hero')}
            className="flex items-center gap-3 group shrink-0 active:scale-95 transition-transform"
            aria-label="Accueil FAAR Agencement"
          >
            <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-xl overflow-hidden shadow-md border border-accent-gold/50 bg-[#1A1816] group-hover:border-accent-gold group-hover:scale-105 group-hover:shadow-accent-gold/20 transition-all duration-300 shrink-0 flex items-center justify-center">
              <img
                src="/images/logo_faar_emblem.png"
                alt="Logo FAAR Agencement"
                className="w-full h-full object-cover rounded-xl select-none"
                loading="eager"
              />
            </div>
            <div className="flex flex-col justify-center">
              <span className={`font-heading tracking-[0.16em] font-bold text-base sm:text-lg uppercase leading-none transition-colors duration-300 ${
                isScrolled ? 'text-taupe-dark' : 'text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
              }`}>
                FAAR
              </span>
              <span className={`text-[10px] uppercase tracking-[0.28em] font-semibold leading-tight mt-1 transition-colors duration-300 ${
                isScrolled 
                  ? 'text-[#8C6226] dark:text-accent-gold' 
                  : 'text-accent-gold drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]'
              }`}>
                Agencement
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Scrollspy UX Feedback */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href, link.id)}
                  className={`text-xs font-semibold uppercase tracking-[0.18em] transition-all duration-300 relative py-1.5 whitespace-nowrap active:scale-95 ${
                    isActive
                      ? 'text-accent-gold font-bold'
                      : isScrolled
                        ? 'text-taupe-dark/80 hover:text-accent-gold'
                        : 'text-white/85 hover:text-white'
                  }`}
                >
                  <span>{link.name}</span>
                  {/* Active Indicator Underline */}
                  <span
                    className={`absolute bottom-0 left-0 right-0 h-0.5 bg-accent-gold rounded-full transition-all duration-300 ${
                      isActive ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Desktop Right Actions: Unified Primary CTA + ThemeToggle */}
          <div className="hidden lg:flex items-center gap-3.5">
            {/* Primary Action Button: Demander un Devis */}
            <button
              onClick={onOpenQuoteModal}
              className="px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-md hover:shadow-lg border border-accent-gold bg-accent-gold hover:bg-[#b5873e] text-stone-950 flex items-center gap-2 group cursor-pointer active:scale-95"
            >
              <span>Demander un Devis</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-stone-950 stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>

            {/* Subtle Vertical Divider */}
            <div className={`h-6 w-px mx-0.5 transition-colors ${
              isScrolled ? 'bg-taupe-light/50' : 'bg-white/25'
            }`} />

            {/* ThemeToggle Switch */}
            <ThemeToggle isScrolled={isScrolled} />
          </div>

          {/* Mobile Actions: Phone Quick Call + Menu trigger */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:0645158743"
              className={`p-2 rounded-lg transition-all flex items-center justify-center border active:scale-95 ${
                isScrolled
                  ? 'text-taupe-dark border-taupe-light/40 bg-taupe-card shadow-sm'
                  : 'text-white border-white/30 bg-white/10 backdrop-blur-sm'
              }`}
              aria-label="Appeler l'artisan"
            >
              <Phone className="w-4 h-4 text-accent-gold" />
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-all active:scale-95 ${
                isScrolled
                  ? 'text-taupe-dark hover:bg-taupe-light/20'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Ouvrir le menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm lg:hidden animate-fade-in"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-4/5 max-w-xs bg-taupe-surface shadow-2xl p-6 flex flex-col justify-between border-l border-taupe-light/30 transition-transform duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              {/* Drawer Top Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-taupe-light/30">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl overflow-hidden border border-accent-gold/50 shadow-sm shrink-0 flex items-center justify-center bg-[#1A1816]">
                    <img
                      src="/images/logo_faar_emblem.png"
                      alt="Logo FAAR Agencement"
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-heading text-lg font-bold tracking-wider uppercase text-taupe-dark leading-none">
                      FAAR
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.25em] font-semibold text-[#8C6226] dark:text-accent-gold mt-0.5">
                      Agencement
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-taupe-dark p-1.5 rounded-lg hover:bg-taupe-light/20 active:scale-95 transition-all"
                  aria-label="Fermer le menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Dedicated Theme Switcher Card */}
              <div className="mb-6 p-3.5 rounded-2xl bg-taupe-card border border-taupe-light/40 flex items-center justify-between shadow-sm">
                <div className="flex flex-col">
                  <span className="text-xs font-bold uppercase tracking-wider text-taupe-dark">
                    Mode d'affichage
                  </span>
                  <span className="text-[10px] text-taupe-medium font-light">
                    Clair ou Sombre
                  </span>
                </div>
                <ThemeToggle isScrolled={true} />
              </div>

              {/* Nav Links in Mobile Drawer with Active Highlight */}
              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.id;
                  return (
                    <a
                      key={link.id}
                      href={link.href}
                      onClick={(e) => {
                        setIsMobileMenuOpen(false);
                        handleNavClick(e, link.href, link.id);
                      }}
                      className={`text-sm font-semibold uppercase tracking-wider transition-colors py-2.5 px-3 rounded-xl flex items-center justify-between ${
                        isActive
                          ? 'bg-accent-gold/15 text-accent-gold font-bold'
                          : 'text-taupe-dark hover:text-accent-gold hover:bg-taupe-light/20'
                      }`}
                    >
                      <span>{link.name}</span>
                      {isActive && <span className="w-1.5 h-1.5 rounded-full bg-accent-gold" />}
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Actions */}
            <div className="space-y-3 pt-6 border-t border-taupe-light/30">
              <a
                href="tel:0645158743"
                className="w-full bg-taupe-card border border-taupe-light/60 text-taupe-dark hover:bg-taupe-surface py-3 rounded-xl text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors active:scale-98"
              >
                <Phone className="w-4 h-4 text-accent-gold" />
                <span>Appeler (06 45 15 87 43)</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onOpenQuoteModal();
                }}
                className="w-full bg-accent-gold hover:bg-[#b5873e] text-stone-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow border border-accent-gold transition-colors active:scale-98 cursor-pointer"
              >
                <span>Demander un Devis</span>
                <ArrowUpRight className="w-4 h-4 text-stone-950 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
