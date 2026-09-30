import React, { useState, useRef, useCallback } from 'react';
import { Sparkles, ArrowRightLeft, ShieldCheck, Sparkle } from 'lucide-react';

interface BeforeAfterSliderProps {
  onOpenQuoteModal: () => void;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ onOpenQuoteModal }) => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let percentage = (x / rect.width) * 100;
    if (percentage < 0) percentage = 0;
    if (percentage > 100) percentage = 100;
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = (e: React.TouchEvent) => handleMove(e.touches[0].clientX);
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging && e.buttons !== 1) return;
    handleMove(e.clientX);
  };

  return (
    <section id="restratification" className="py-24 bg-taupe-dark text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Innovation Rénovation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            La Ré-stratification : Métamorphoser sans démolir
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
            Offrez un nouvel éclat à vos portes intérieures. Nous sublimons l'existant avec une finition Taupe & Blanc soignée, sans les désagréments d'un chantier lourd.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-5xl mx-auto">
          
          {/* Slider */}
          <div className="lg:col-span-8">
            <div
              ref={containerRef}
              onMouseDown={() => setIsDragging(true)}
              onMouseUp={() => setIsDragging(false)}
              onMouseLeave={() => setIsDragging(false)}
              onMouseMove={handleMouseMove}
              onTouchMove={handleTouchMove}
              className="relative w-full h-[360px] sm:h-[440px] rounded-2xl overflow-hidden shadow-2xl border-2 border-accent-gold/40 select-none cursor-ew-resize touch-none"
            >
              {/* After */}
              <div className="absolute inset-0 w-full h-full">
                <img
                  src="/images/door_restratification.jpg"
                  alt="Porte après ré-stratification Taupe"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 bg-taupe-dark/90 text-accent-gold text-xs font-bold px-3.5 py-1.5 rounded-full border border-accent-gold/40 flex items-center gap-1.5 shadow-lg">
                  <Sparkle className="w-3.5 h-3.5" /> APRÈS : Finition Taupe Moderne
                </div>
              </div>

              {/* Before */}
              <div
                className="absolute inset-0 w-full h-full overflow-hidden"
                style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
              >
                <img
                  src="/images/door_restratification.jpg"
                  alt="Porte avant ré-stratification"
                  className="w-full h-full object-cover filter sepia brightness-90 saturate-50 contrast-125"
                />
                <div className="absolute top-4 left-4 bg-black/80 text-white text-xs font-bold px-3.5 py-1.5 rounded-full">
                  AVANT : Porte d'Origine
                </div>
              </div>

              {/* Slider bar */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-accent-gold z-20"
                style={{ left: `${sliderPosition}%` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 -left-4 w-9 h-9 rounded-full bg-accent-gold text-taupe-dark shadow-xl flex items-center justify-center border-2 border-white">
                  <ArrowRightLeft className="w-4 h-4" />
                </div>
              </div>
            </div>
            <p className="text-center text-xs text-white/50 mt-3">
              ← Glissez le curseur pour apprécier la transformation →
            </p>
          </div>

          {/* Key Points */}
          <div className="lg:col-span-4 space-y-6">
            <div className="space-y-4 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Une démarche écoresponsable</strong>
                  Conservez la structure d'origine et évitez le remplacement inutile de vos blocs-portes.
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-5 h-5 text-accent-gold shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white block font-semibold">Un chantier serein & propre</strong>
                  Intervention rapide à votre domicile sans poussière ni démolition de cloisons.
                </div>
              </div>
            </div>

            <button
              onClick={onOpenQuoteModal}
              className="w-full bg-accent-gold hover:bg-accent-gold/90 text-taupe-dark font-bold px-5 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-md"
            >
              Étudier la rénovation de mes portes
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
