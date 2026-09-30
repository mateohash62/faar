import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onOpenMentions: () => void;
  onOpenRGPD: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenMentions, onOpenRGPD }) => {
  return (
    <footer className="bg-[#141210] text-white/90 pt-16 pb-8 border-t border-accent-gold/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-12 border-b border-taupe-medium/20">
          
          {/* Brand */}
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-accent-gold/60 shadow-md shrink-0 flex items-center justify-center bg-[#1A1816]">
                <img
                  src="/images/logo_faar_emblem.png"
                  alt="Logo FAAR Agencement"
                  className="w-full h-full object-cover rounded-xl"
                  loading="lazy"
                />
              </div>
              <h3 className="font-heading text-2xl font-bold tracking-tight text-white">
                FAAR Agencement
              </h3>
            </div>
            <p className="text-xs text-white/70 font-light leading-relaxed max-w-sm">
              L'agencement sur-mesure d'exception et la rénovation de portes à Plouvain & Pas-de-Calais.
            </p>
            <div className="pt-1 flex items-center gap-2 text-xs text-accent-gold font-medium">
              <ShieldCheck className="w-4 h-4" /> Garantie Décennale & Artisan Qualifié
            </div>
          </div>

          {/* Essentiel Prestations */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white tracking-wide border-b border-accent-gold/30 pb-1 inline-block">
              Prestations
            </h4>
            <ul className="space-y-2 text-xs text-white/75 font-light">
              <li><a href="#prestations" className="hover:text-accent-gold transition-colors">Cuisine</a></li>
              <li><a href="#prestations" className="hover:text-accent-gold transition-colors">Salle de Bain</a></li>
              <li><a href="#prestations" className="hover:text-accent-gold transition-colors">Agencement</a></li>
              <li><a href="#prestations" className="hover:text-accent-gold transition-colors">Dressing</a></li>
            </ul>
          </div>

          {/* Contact Rapide */}
          <div className="space-y-3">
            <h4 className="font-heading text-lg font-semibold text-white tracking-wide border-b border-accent-gold/30 pb-1 inline-block">
              Contact
            </h4>
            <div className="space-y-2 text-xs text-white/80 font-light">
              <a href="tel:0645158743" className="block hover:text-accent-gold transition-colors">
                📞 06 45 15 87 43
              </a>
              <a href="mailto:faar.agencement@gmail.com" className="block hover:text-accent-gold transition-colors truncate">
                ✉️ faar.agencement@gmail.com
              </a>
              <p className="flex items-center gap-1 text-white/60">
                📍 Plouvain (62118) • Pas-de-Calais
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Legal Links */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center text-xs text-white/50 space-y-4 sm:space-y-0">
          <p>© {new Date().getFullYear()} FAAR Agencement. Tous droits réservés.</p>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <button onClick={onOpenMentions} className="hover:text-accent-gold transition-colors">
              Mentions Légales
            </button>
            <button onClick={onOpenRGPD} className="hover:text-accent-gold transition-colors">
              Politique RGPD
            </button>
            <span className="flex items-center gap-1 text-accent-gold/80">
              Conçu par studiostatic.net
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
};
