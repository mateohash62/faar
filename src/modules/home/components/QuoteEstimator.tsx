import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Sparkles, Send } from 'lucide-react';

interface QuoteEstimatorProps {
  onOpenQuoteModal: () => void;
}

export const QuoteEstimator: React.FC<QuoteEstimatorProps> = ({ onOpenQuoteModal }) => {
  const [projectType, setProjectType] = useState<'cuisine' | 'dressing' | 'salle_de_bain' | 'restratification'>('cuisine');
  const [size, setSize] = useState<number>(3); // e.g., meters or doors count
  const [finish, setFinish] = useState<'standard' | 'premium' | 'luxe'>('premium');
  const [includeLighting, setIncludeLighting] = useState<boolean>(true);

  // Price calculations
  const calculateEstimate = () => {
    let base = 0;
    if (projectType === 'cuisine') base = 1800 * size;
    else if (projectType === 'dressing') base = 1200 * size;
    else if (projectType === 'salle_de_bain') base = 1500 * size;
    else if (projectType === 'restratification') base = 180 * size; // per door

    const finishMultiplier = finish === 'standard' ? 1.0 : finish === 'premium' ? 1.25 : 1.5;
    const lightingExtra = includeLighting ? 350 : 0;

    const total = Math.round(base * finishMultiplier + lightingExtra);
    const min = Math.round(total * 0.9);
    const max = Math.round(total * 1.15);

    return { min, max };
  };

  const estimate = calculateEstimate();

  return (
    <section id="estimateur" className="py-20 bg-taupe-surface relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-gold/15 text-taupe-dark text-xs font-semibold uppercase tracking-wider">
            <Calculator className="w-4 h-4 text-accent-gold" /> Outil d'estimation rapide
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-taupe-dark">
            Simulateur de Devis en Ligne
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-taupe-main">
            Estimez le budget indicatif de votre projet d'agencement en quelques clics.
          </p>
        </div>

        {/* Simulator Box */}
        <div className="max-w-4xl mx-auto bg-taupe-card rounded-2xl shadow-soft border border-taupe-light/30 overflow-hidden grid grid-cols-1 lg:grid-cols-12">
          
          {/* Controls (Left) */}
          <div className="lg:col-span-7 p-6 sm:p-8 space-y-6">
            
            {/* Step 1: Type */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-taupe-dark mb-3">
                1. Choisissez le type d'agencement
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { id: 'cuisine', label: 'Cuisine' },
                  { id: 'dressing', label: 'Dressing' },
                  { id: 'salle_de_bain', label: 'Salle de bain' },
                  { id: 'restratification', label: 'Ré-stratification Portes' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setProjectType(item.id as any)}
                    className={`py-3 px-3 rounded-xl text-xs font-semibold transition-all border text-center ${
                      projectType === item.id
                        ? 'bg-taupe-dark text-white border-accent-gold shadow-md'
                        : 'bg-taupe-bg text-taupe-dark border-taupe-light/40 hover:border-taupe-medium'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Size / Quantity */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs uppercase tracking-wider font-bold text-taupe-dark">
                  2. {projectType === 'restratification' ? 'Nombre de portes' : 'Longueur d’agencement (mètres)'}
                </label>
                <span className="text-sm font-bold text-accent-gold bg-taupe-dark px-3 py-0.5 rounded">
                  {size} {projectType === 'restratification' ? 'portes' : 'mètres'}
                </span>
              </div>
              <input
                type="range"
                min={projectType === 'restratification' ? 1 : 1.5}
                max={projectType === 'restratification' ? 15 : 10}
                step={projectType === 'restratification' ? 1 : 0.5}
                value={size}
                onChange={(e) => setSize(parseFloat(e.target.value))}
                className="w-full accent-accent-gold cursor-pointer"
              />
            </div>

            {/* Step 3: Finish Quality */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-bold text-taupe-dark mb-3">
                3. Gamme de finitions
              </label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'standard', label: 'Essentiel' },
                  { id: 'premium', label: 'Satiné Taupe' },
                  { id: 'luxe', label: 'Sur-mesure Luxe' },
                ].map((f) => (
                  <button
                    key={f.id}
                    type="button"
                    onClick={() => setFinish(f.id as any)}
                    className={`py-2.5 px-2 rounded-xl text-xs font-semibold transition-all border text-center ${
                      finish === f.id
                        ? 'bg-accent-gold text-taupe-dark border-taupe-dark font-bold shadow-md'
                        : 'bg-taupe-bg text-taupe-dark border-taupe-light/40 hover:border-taupe-medium'
                    }`}
                  >
                    {f.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 4: Option LED */}
            <div className="pt-2">
              <label className="flex items-center gap-3 cursor-pointer select-none">
                <input
                  type="checkbox"
                  checked={includeLighting}
                  onChange={(e) => setIncludeLighting(e.target.checked)}
                  className="w-4 h-4 accent-accent-gold rounded cursor-pointer"
                />
                <span className="text-xs font-medium text-taupe-dark">
                  Inclure l'intégration d'éclairage LED d'ambiance encastré
                </span>
              </label>
            </div>

          </div>

          {/* Result Display (Right) */}
          <div className="lg:col-span-5 bg-taupe-dark text-white p-6 sm:p-8 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-accent-gold/20">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-gold text-xs uppercase tracking-widest font-bold">
                <Sparkles className="w-4 h-4" /> Estimation indicative
              </div>

              <h3 className="font-heading text-2xl font-bold">
                Budget Estimé
              </h3>

              <div className="py-4 border-y border-white/10 space-y-1">
                <div className="text-xs text-white/60">Fourchette de prix hors pose :</div>
                <div className="font-heading text-4xl sm:text-5xl font-bold text-accent-gold">
                  {estimate.min.toLocaleString('fr-FR')} € – {estimate.max.toLocaleString('fr-FR')} €
                </div>
                <div className="text-[11px] text-white/50 pt-1">
                  TTC • Matériaux & Quincaillerie incluse
                </div>
              </div>

              <ul className="space-y-2 text-xs text-white/80">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-gold" />
                  <span>Étude gratuite avec mesure à domicile</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-accent-gold" />
                  <span>Prix garanti sans coûts cachés</span>
                </li>
              </ul>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenQuoteModal}
                className="w-full bg-accent-gold hover:bg-accent-gold/90 text-taupe-dark font-bold py-3.5 px-4 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <span>Finaliser mon devis gratuit</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
