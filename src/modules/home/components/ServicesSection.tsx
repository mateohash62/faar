import React from 'react';
import { ChefHat, Shirt, Bath, Layers, ArrowUpRight } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuoteModal: (projectType?: string, description?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuoteModal }) => {
  const prestations = [
    {
      id: 'cuisine',
      icon: ChefHat,
      title: 'Cuisine',
      subtitle: 'Sur-mesure & Conviviale',
      image: '/images/prestation_cuisine.jpg',
      description: 'Conception et pose de cuisines sur-mesure, pensées pour être fonctionnelles, durables et adaptées à vos envies.',
      prefilledDescription: 'Bonjour, je souhaite échanger pour un projet similaire : Cuisine sur-mesure.',
    },
    {
      id: 'salle_de_bain',
      icon: Bath,
      title: 'Salle de Bain',
      subtitle: 'Confort & Résistance',
      image: '/images/prestation_salle_de_bain.jpg',
      description: 'Meubles suspendus hydrofuges, vasques et agencements résistants à l’humidité pour un espace d’eau élégant.',
      prefilledDescription: 'Bonjour, je souhaite échanger pour un projet similaire : Salle de Bain sur-mesure.',
    },
    {
      id: 'agencement',
      icon: Layers,
      title: 'Agencement',
      subtitle: 'Escaliers, Meubles & Cloisons',
      image: '/images/prestation_agencement.jpg',
      description: 'Aménagements astucieux pour valoriser chaque volume : sous-escaliers, cloisons décoratives et meubles intégrés.',
      prefilledDescription: 'Bonjour, je souhaite échanger pour un projet similaire : Agencement intérieur sur-mesure.',
    },
    {
      id: 'dressing',
      icon: Shirt,
      title: 'Dressing',
      subtitle: 'Rangements Optimisés',
      image: '/images/prestation_dressing.jpg',
      description: 'Dressings sur-mesure, placards intégrés et penderies conçus au millimètre pour exploiter chaque recoin.',
      prefilledDescription: 'Bonjour, je souhaite échanger pour un projet similaire : Dressing & Rangement sur-mesure.',
    },
  ];

  return (
    <section id="prestations" className="py-20 bg-taupe-surface scroll-mt-20">
      <div id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Line Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold">
            Notre Savoir-Faire
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-taupe-dark leading-tight">
            Nos Prestations
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
        </div>

        {/* 4 Clean Real Photo Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {prestations.map((prestation) => {
            const Icon = prestation.icon;
            return (
              <div
                key={prestation.id}
                onClick={() => onOpenQuoteModal(prestation.id, prestation.prefilledDescription)}
                className="bg-taupe-card rounded-2xl overflow-hidden border border-taupe-light/30 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="relative h-48 overflow-hidden bg-taupe-light/20">
                    <img
                      src={prestation.image}
                      alt={`${prestation.title} - Réalisation réelle FAAR Agencement`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-stone-900 text-accent-gold border border-accent-gold/40 flex items-center justify-center shadow">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="p-5 space-y-2">
                    <span className="text-[10px] text-accent-gold font-semibold uppercase tracking-wider block">
                      {prestation.subtitle}
                    </span>
                    <h3 className="font-heading text-xl font-bold text-taupe-dark group-hover:text-accent-gold transition-colors flex items-center justify-between gap-2 leading-snug">
                      <span>{prestation.title}</span>
                      <ArrowUpRight className="w-4 h-4 text-taupe-medium group-hover:text-accent-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                    </h3>
                    <p className="text-xs text-taupe-dark/75 font-light leading-relaxed">
                      {prestation.description}
                    </p>
                  </div>
                </div>

                <div className="px-5 pb-5 pt-3 border-t border-taupe-light/20">
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-accent-gold uppercase tracking-wider group-hover:underline">
                    <span>Demander un projet similaire.</span>
                    <span>&rarr;</span>
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
