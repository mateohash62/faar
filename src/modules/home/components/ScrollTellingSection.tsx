import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring, AnimatePresence, useVelocity } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Compass, Eye, Hammer, Home, CheckCircle2, Navigation } from 'lucide-react';

interface ScrollTellingSectionProps {
  onOpenQuoteModal: () => void;
}

export const ScrollTellingSection: React.FC<ScrollTellingSectionProps> = ({ onOpenQuoteModal }) => {
  const streamRef = useRef<HTMLDivElement>(null);
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // 158px = top-32 (128px) + top-6 (24px) + half diamond (6px)
  const { scrollYProgress, scrollY } = useScroll({
    target: streamRef,
    offset: ['start 158px', 'end 158px'],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 1,
    restDelta: 0.001
  });

  // Floating effect based on scroll velocity
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 25,
    stiffness: 300
  });
  const velocityY = useTransform(smoothVelocity, [-1000, 0, 1000], [80, 0, -80]);

  const chapters = [
    {
      num: '01',
      tag: 'Étape 1 • La Rencontre',
      title: 'Comprendre vos envies',
      desc: 'Nous venons chez vous dans le Pas-de-Calais pour discuter de votre projet et voir ce qui est possible.',
      quote: '« Un bon aménagement commence par bien vous écouter. »',
      icon: Compass,
      image: '/images/Cuisine2.jpg',
      highlights: ['Rendez-vous chez vous', 'Conseils sur-mesure'],
    },
    {
      num: '02',
      tag: 'Étape 2 • Le Projet',
      title: 'Création de vos meubles',
      desc: 'Nous dessinons vos meubles et choisissons ensemble les couleurs et les matériaux qui vous plaisent.',
      quote: "« Découvrez votre futur intérieur avant même qu'il soit fabriqué. »",
      icon: Eye,
      image: '/images/Meuble.jpg',
      highlights: ['Dessins et plans clairs', 'Devis simple et sans surprise'],
    },
    {
      num: '03',
      tag: 'Étape 3 • La Fabrication',
      title: "Construction & Préparation",
      desc: 'Vos meubles sont préparés avec soin avec nos véhicules d’intervention et notre équipement pro.',
      quote: '« La qualité se voit dans les petits détails et la solidité. »',
      icon: Hammer,
      image: '/images/Camion.jpg',
      highlights: ['Équipement professionnel', 'Matériaux de haute qualité'],
    },
    {
      num: '04',
      tag: "Étape 4 • L'Installation",
      title: 'La Pose chez vous',
      desc: "Nous installons tout proprement chez vous. Vous n'avez plus qu'à profiter de votre nouvelle pièce !",
      quote: "« Votre nouvelle pièce est prête, il n'y a plus qu'à en profiter. »",
      icon: Home,
      image: '/images/Cuisine.jpg',
      highlights: ['Travail propre et soigné', 'Garantie Décennale incluse'],
    },
  ];

  const currentActive = chapters[activeChapterIndex] || chapters[0];
  const CurrentIcon = currentActive.icon;

  return (
    <section id="histoire" className="py-24 bg-taupe-dark text-white relative">
      {/* Background Ambient Lights */}
      <div className="absolute top-1/4 right-10 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto space-y-2"
        >
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Notre Façon de Faire
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
            Comment se déroule votre projet ?
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
        </motion.div>

        {/* Scrolltelling Grid Container */}
        <div ref={streamRef} className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Full Section Height Track & 1:1 Sliding Follower */}
          <div className="hidden lg:block lg:col-span-4 relative h-full min-h-full">
            
            {/* Full Height Vertical Background Track Line */}
            <div className="absolute left-6 top-0 bottom-0 w-1 bg-white/10 rounded-full" />
            
            {/* Filled Accent Line (Fills 100% of height in 1:1 speed) */}
            <motion.div
              style={{ scaleY: smoothProgress }}
              className="absolute left-6 top-0 bottom-0 w-1 bg-accent-gold rounded-full origin-top shadow-[0_0_15px_rgba(197,154,104,0.7)]"
            />

            {/* Stepper Dots along the full track */}
            {chapters.map((chap, idx) => {
              const topPos = `${(idx / (chapters.length - 1)) * 95}%`;
              const isActive = activeChapterIndex === idx;

              return (
                <div
                  key={idx}
                  style={{ top: topPos }}
                  className="absolute left-4 -translate-y-1/2 flex items-center gap-3 z-10"
                >
                  <button
                    onClick={() => {
                      const el = document.getElementById(`chapter-${idx}`);
                      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    }}
                    className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold transition-all ${
                      isActive
                        ? 'bg-accent-gold text-taupe-dark shadow-lg ring-4 ring-accent-gold/30 scale-110'
                        : 'bg-taupe-dark border border-white/30 text-white/70 hover:border-accent-gold'
                    }`}
                  >
                    {chap.num}
                  </button>
                </div>
              );
            })}

            {/* Sticky Scroll Follower Element */}
            <div className="sticky top-32 pl-14 pointer-events-auto">
              <motion.div 
                style={{ y: velocityY }}
                className="bg-taupe-surface text-taupe-dark p-5 rounded-2xl border-2 border-accent-gold shadow-2xl space-y-3 relative group"
              >
                
                {/* Connection Arrow Pointer */}
                <div className="absolute -left-3 top-6 w-3 h-3 bg-accent-gold rotate-45 border-l border-b border-accent-gold" />

                <div className="flex items-center justify-between border-b border-taupe-light/30 pb-2">
                  <div className="flex items-center gap-2 text-accent-gold font-bold text-xs uppercase tracking-wider">
                    <Navigation className="w-3.5 h-3.5 animate-pulse" />
                    <span>Progression Directe</span>
                  </div>
                  <span className="font-heading font-bold text-lg text-taupe-dark">
                    {currentActive.num} / 04
                  </span>
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeChapterIndex}
                    initial={{ opacity: 0, y: 15, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -15, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="space-y-3"
                  >
                    <div className="space-y-1">
                      <div className="text-[10px] uppercase tracking-widest text-accent-gold font-bold flex items-center gap-1">
                        <CurrentIcon className="w-3.5 h-3.5" /> {currentActive.tag}
                      </div>
                      <h4 className="font-heading text-base font-bold text-taupe-dark leading-tight">
                        {currentActive.title}
                      </h4>
                    </div>

                    {/* Mini Image Preview */}
                    <div className="h-20 rounded-xl overflow-hidden relative border border-taupe-light/40">
                      <img
                        src={currentActive.image}
                        alt={currentActive.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-taupe-dark/40 to-transparent" />
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Live Progress Percentage */}
                <div className="space-y-1">
                  <div className="w-full bg-taupe-light/30 h-1.5 rounded-full overflow-hidden">
                    <motion.div
                      style={{ width: useTransform(smoothProgress, (v) => `${Math.min(100, Math.max(0, Math.round(v * 100)))}%`) }}
                      className="h-full bg-accent-gold rounded-full"
                    />
                  </div>
                </div>

              </motion.div>
            </div>

          </div>

          {/* Right Column: Chapters Stream (Full height matching left track) */}
          <div className="lg:col-span-8 space-y-16">
            {chapters.map((chap, idx) => {
              const Icon = chap.icon;

              return (
                <motion.div
                  id={`chapter-${idx}`}
                  key={idx}
                  onViewportEnter={() => setActiveChapterIndex(idx)}
                  viewport={{ amount: 0.4 }}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ type: 'spring', stiffness: 80, damping: 15, mass: 1 }}
                  className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center bg-white/5 p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-md group hover:border-accent-gold/40 transition-colors relative"
                >
                  {/* Content Block */}
                  <div className="md:col-span-7 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-accent-gold text-xs font-bold uppercase tracking-widest">
                        <Icon className="w-4 h-4" /> {chap.tag}
                      </div>
                      <span className="font-heading text-2xl font-bold text-accent-gold/40">
                        {chap.num}
                      </span>
                    </div>

                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
                      {chap.title}
                    </h3>

                    <p className="text-sm text-white/80 font-light leading-relaxed">
                      {chap.desc}
                    </p>

                    <blockquote className="p-3.5 rounded-xl bg-white/5 border-l-2 border-accent-gold italic text-xs text-white/90 font-serif">
                      {chap.quote}
                    </blockquote>

                    <div className="flex flex-wrap gap-2.5 pt-1">
                      {chap.highlights.map((h, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1.5 text-xs bg-white/10 px-3 py-1 rounded-full text-white/90 border border-white/10 font-medium"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-gold" />
                          <span>{h}</span>
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Real Image */}
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                    className="md:col-span-5 relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden shadow-2xl border border-white/20"
                  >
                    <img
                      src={chap.image}
                      alt={`${chap.title} - Photo réelle FAAR Agencement`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-taupe-dark/60 via-transparent to-transparent pointer-events-none" />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-taupe-surface text-taupe-dark p-6 sm:p-8 rounded-3xl border border-accent-gold/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-2xl"
        >
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="font-heading text-xl sm:text-2xl font-bold text-taupe-dark leading-snug">
              Prêt à démarrer votre projet ?
            </h4>
            <p className="text-xs text-taupe-main flex items-center justify-center sm:justify-start gap-1.5 font-light">
              <ShieldCheck className="w-4 h-4 text-accent-gold" />
              <span>On s'occupe de tout, près de chez vous (Pas-de-Calais)</span>
            </p>
          </div>

          <button
            onClick={onOpenQuoteModal}
            className="bg-taupe-dark hover:bg-taupe-main text-white font-bold px-6 py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow-lg flex items-center gap-2 shrink-0 border border-accent-gold/30 group"
          >
            <span>Demander mon devis gratuit</span>
            <ArrowRight className="w-4 h-4 text-accent-gold group-hover:translate-x-1 transition-transform" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};




