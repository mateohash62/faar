import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, Sparkles, Check } from 'lucide-react';

export const CraftsmanshipSection: React.FC = () => {
  return (
    <section id="qui-sommes-nous" className="py-20 bg-taupe-bg relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Value Prop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-5">
            <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold">
              À Propos de FAAR Agencement
            </span>

            {/* Single Line H2 */}
            <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-taupe-dark leading-tight">
              Des meubles de qualité, sans stress
            </h2>

            <p className="text-sm text-taupe-dark/80 font-light leading-relaxed">
              Basée à Plouvain (Pas-de-Calais), <strong>FAAR Agencement</strong> s'occupe de vos projets de meubles sur-mesure du début à la fin, pour que vous n'ayez rien à gérer.
            </p>

            <ul className="space-y-2.5 text-xs sm:text-sm text-taupe-dark/85">
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-accent-gold shrink-0" />
                <span><strong>Une seule personne à qui parler</strong>, du premier rendez-vous jusqu'à la fin.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-accent-gold shrink-0" />
                <span><strong>On s'occupe de tout</strong> : dessin, fabrication et installation chez vous.</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Check className="w-4 h-4 text-accent-gold shrink-0" />
                <span><strong>Proche de chez vous</strong>, à Plouvain et partout dans le Pas-de-Calais.</span>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div className="bg-taupe-surface p-6 sm:p-8 rounded-3xl border border-taupe-light/40 shadow-sm space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-stone-900 text-accent-gold border border-accent-gold/40 flex items-center justify-center shrink-0">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <h3 className="font-heading text-xl font-bold text-taupe-dark leading-snug">
                  Un chantier en toute tranquillité
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-taupe-dark/75 font-light leading-relaxed">
                Faire des travaux ne devrait pas être stressant. Nous respectons nos délais, nos prix, et nous laissons toujours l'endroit propre en partant.
              </p>

              <div className="pt-2 flex items-center gap-4 text-xs font-semibold text-accent-gold">
                <span className="flex items-center gap-1">
                  <ShieldCheck className="w-4 h-4" /> Garantie Décennale
                </span>
                <span>•</span>
                <span className="flex items-center gap-1">
                  <Compass className="w-4 h-4" /> Plouvain (62118)
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
