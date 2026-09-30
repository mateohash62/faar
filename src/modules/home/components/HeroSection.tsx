import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Star } from 'lucide-react';

interface HeroSectionProps {
  onOpenQuoteModal?: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = () => {
  return (
    <section
      id="hero"
      className="relative min-h-[92vh] lg:min-h-screen flex items-center overflow-hidden"
    >
      {/* Dark Mode Background: Evening Luxury Living Room */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-0 dark:opacity-100 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundImage: `url('/images/hero_luxury.jpg')` }}
        aria-hidden="true"
      />
      {/* Dark Mode Gradient & Vignette */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-black/25 opacity-0 dark:opacity-100 transition-opacity duration-700 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/80 via-black/40 to-transparent opacity-0 dark:opacity-100 transition-opacity duration-700 pointer-events-none"
        aria-hidden="true"
      />

      {/* Light Mode Background: Sunlit Luxury Kitchen */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100 dark:opacity-0 transition-opacity duration-700 pointer-events-none"
        style={{ backgroundImage: `url('/images/hero_kitchen.jpg')` }}
        aria-hidden="true"
      />
      {/* Light Mode Gradient: Soft editorial scrim ensuring perfect readability */}
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/45 to-black/15 opacity-100 dark:opacity-0 transition-opacity duration-700 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-black/70 via-black/30 to-transparent opacity-100 dark:opacity-0 transition-opacity duration-700 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full min-h-[92vh] lg:min-h-screen flex flex-col justify-center pt-36 pb-28 lg:pt-44 lg:pb-32">
        {/* Main Brand Title - Elevated Architectural Monograph Style */}
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="select-none mb-8 sm:mb-12"
          >
            <span className="block font-heading font-medium tracking-[0.06em] sm:tracking-[0.1em] text-5xl sm:text-7xl md:text-8xl lg:text-[7rem] text-white leading-[0.95] uppercase drop-shadow-md">
              FAAR
            </span>
            <span className="block font-heading italic font-normal text-4xl sm:text-6xl md:text-7xl lg:text-[5.6rem] text-accent-gold tracking-tight leading-[1] mt-1 sm:mt-2.5 drop-shadow-md">
              Agencement
            </span>
          </motion.h1>

          {/* Bouton Appeler avec le numéro de téléphone noté à côté */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center"
          >
            <a
              href="tel:0645158743"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-full bg-accent-gold hover:bg-[#b5873e] text-stone-950 font-bold text-xs sm:text-sm uppercase tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] group shrink-0 border border-accent-gold"
            >
              <Phone className="w-4 h-4 text-stone-950 fill-current" />
              <span>Appeler : 06 45 15 87 43</span>
            </a>
          </motion.div>
        </div>

        {/* Note globale des avis (4,9) affichée en bas à droite */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="absolute bottom-8 right-4 sm:bottom-10 sm:right-6 lg:bottom-12 lg:right-8 z-20"
        >
          <a
            href="#avis"
            className="inline-flex items-center gap-3 px-5 py-3 sm:px-6 sm:py-3.5 rounded-full bg-white/90 hover:bg-white text-taupe-dark border border-taupe-light/60 dark:bg-black/60 dark:hover:bg-black/75 dark:border-white/20 dark:text-white backdrop-blur-md transition-all duration-500 shadow-xl group cursor-pointer"
          >
            {/* 5 étoiles */}
            <div className="flex items-center gap-1 text-[#F2542D]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-[#F2542D]" />
              ))}
            </div>

            {/* Note 4,9 */}
            <div className="flex items-center gap-2">
              <span className="font-heading font-bold text-base sm:text-lg text-taupe-dark dark:text-white leading-none transition-colors duration-500">
                4,9
              </span>
              <span className="text-taupe-medium dark:text-white/60 text-xs font-light leading-none transition-colors duration-500">
                / 5
              </span>
              <span className="text-taupe-light dark:text-white/40 text-xs leading-none transition-colors duration-500">•</span>
              <span className="text-xs font-medium text-taupe-dark/90 dark:text-white/90 uppercase tracking-wider leading-none transition-colors duration-500">
                Avis Google
              </span>
            </div>
          </a>
        </motion.div>

      </div>
    </section>
  );
};
