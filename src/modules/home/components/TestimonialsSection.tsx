import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const reviews = [
    {
      name: 'Marc & Sophie L.',
      city: 'Plouvain',
      project: 'Rénovation de 6 portes par ré-stratification',
      rating: 5,
      comment:
        'Un travail d’une précision incroyable ! Nos anciennes portes en bois démodées ont retrouvé un aspect taupe satiné d’une modernité remarquable. Économique et rapide.',
    },
    {
      name: 'Claire D.',
      city: 'Arras',
      project: 'Cuisine complète sur-mesure',
      rating: 5,
      comment:
        'L’équipe de FAAR Agencement a su concrétiser exactement ce que nous voulions : un îlot central en taupe mat et marbre blanc. Conseils avisés et pose très soignée.',
    },
    {
      name: 'Frédéric B.',
      city: 'Douai',
      project: 'Dressing sous pente & Meuble TV',
      rating: 5,
      comment:
        'Chaque centimètre carré sous nos combles a été exploité à la perfection. Matériaux solides, éclairage LED superbe. Je recommande les yeux fermés !',
    },
  ];

  return (
    <section className="py-20 bg-taupe-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold">
            Témoignages Clients
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-taupe-dark">
            Ils Nous Font Confiance
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-taupe-main">
            La satisfaction de nos clients à Plouvain et dans les Hauts-de-France est notre plus belle carte de visite.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, idx) => (
            <div
              key={idx}
              className="bg-taupe-card p-6 sm:p-8 rounded-2xl border border-taupe-light/30 shadow-soft flex flex-col justify-between relative shadow-hover"
            >
              <Quote className="w-10 h-10 text-accent-gold/20 absolute top-6 right-6" />

              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-1 text-accent-gold">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-taupe-dark/85 italic leading-relaxed">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-taupe-light/20 flex items-center justify-between">
                <div>
                  <h4 className="font-heading font-bold text-base text-taupe-dark">{rev.name}</h4>
                  <p className="text-xs text-taupe-main">{rev.city} • {rev.project}</p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-accent-gold font-semibold bg-taupe-bg px-2.5 py-1 rounded">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Client Vérifié
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
