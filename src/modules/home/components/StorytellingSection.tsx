import React, { useState } from 'react';
import { Sparkles, ArrowRight, CheckCircle2, Eye, Compass, Hammer, Home } from 'lucide-react';

interface StorytellingSectionProps {
  onOpenQuoteModal: () => void;
}

export const StorytellingSection: React.FC<StorytellingSectionProps> = ({ onOpenQuoteModal }) => {
  const [activeChapter, setActiveChapter] = useState(0);

  const chapters = [
    {
      number: '01',
      tag: 'Chapitre I • La Rencontre',
      title: 'L’Écoute & La Vision',
      subtitle: 'Comprendre votre art de vivre',
      description:
        'Tout commence par un échange chaleureux à votre domicile dans le Pas-de-Calais. Nous analysons la lumière de vos pièces, vos habitudes de vie et captons l’essence de ce que vous souhaitez ressentir chez vous.',
      quote: '« Un projet réussi ne naît pas d’un catalogue, mais de la compréhension intime de votre espace. »',
      image: '/images/hero_kitchen.jpg',
      icon: Compass,
      highlights: ['Rendez-vous sur place', 'Analyse de l’éclairage & volumes', 'Conseil personnalisé'],
    },
    {
      number: '02',
      tag: 'Chapitre II • La Conception',
      title: 'L’Étude & L’Harmonie',
      subtitle: 'Donner forme à l’invisible',
      description:
        'Grâce à notre étude de conception sur-mesure, votre futur intérieur prend vie. Nous marions la noblesse du Taupe à la pureté du Blanc pour créer une atmosphère apaisante et intemporelle.',
      quote: '« Vous vous projetez dans votre futur chez-vous avant même le premier coup de tournevis. »',
      image: '/images/dressing.jpg',
      icon: Eye,
      highlights: ['Étude sur-mesure', 'Choix des textures & finitions', 'Devis transparent sans surprise'],
    },
    {
      number: '03',
      tag: 'Chapitre III • Le Façonnage',
      title: 'L’Excellence de la Confection',
      subtitle: 'Le geste juste & la précision',
      description:
        'Chaque panneau, chaque porte et chaque tiroir est préparé avec une minutie artisanale. Quincaillerie allemande invisible, finitions satinées ultra-résistantes et ré-stratification soignée.',
      quote: '« La véritable qualité réside dans les détails invisibles qui durent toute une vie. »',
      image: '/images/door_restratification.jpg',
      icon: Hammer,
      highlights: ['Usinage au millimètre', 'Matériaux hydrofuges & durables', 'Quincaillerie haut de gamme'],
    },
    {
      number: '04',
      tag: 'Chapitre IV • La Révélation',
      title: 'La Pose Sereine Clé en Main',
      subtitle: 'Vivre la métamorphose',
      description:
        'Notre artisan intervient chez vous dans le respect absolu de votre domicile. Chantier protégé, découpes nettes et nettoyage minutieux : vous réceptionnez votre nouvel espace prêt à vivre.',
      quote: '« Vous n’avez qu’une chose à faire : ouvrir la porte et savourer votre nouveau cadre de vie. »',
      image: '/images/bathroom.jpg',
      icon: Home,
      highlights: ['Protection intégrale du lieu', 'Chantier propre & sans démolition', 'Garantie Décennale'],
    },
  ];

  const current = chapters[activeChapter];
  const Icon = current.icon;

  return (
    <section id="histoire" className="py-24 bg-taupe-dark text-white relative overflow-hidden">
      {/* Ambient background light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-accent-gold/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5" /> Le Récit de Votre Projet
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
            Du Rêve à la Révélation
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
            Découvrez comment nous transformons votre habitat à travers une expérience fluide, poétique et sans la moindre contrainte.
          </p>
        </div>

        {/* Chapter Navigation Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-12">
          {chapters.map((chap, idx) => (
            <button
              key={idx}
              onClick={() => setActiveChapter(idx)}
              className={`p-4 rounded-2xl border text-left transition-all flex flex-col justify-between ${
                activeChapter === idx
                  ? 'bg-taupe-card text-taupe-dark border-accent-gold shadow-2xl scale-[1.02]'
                  : 'bg-white/5 text-white/80 border-white/10 hover:border-accent-gold/50'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span
                  className={`font-heading font-bold text-lg ${
                    activeChapter === idx ? 'text-accent-gold' : 'text-accent-gold/80'
                  }`}
                >
                  {chap.number}
                </span>
                <chap.icon className={`w-4 h-4 ${activeChapter === idx ? 'text-accent-gold' : 'text-white/50'}`} />
              </div>
              <div className="text-xs font-bold truncate">{chap.title}</div>
              <div className={`text-[10px] truncate ${activeChapter === idx ? 'text-taupe-main' : 'text-white/50'}`}>
                {chap.subtitle}
              </div>
            </button>
          ))}
        </div>

        {/* Active Chapter Showcase Card */}
        <div className="bg-taupe-card text-taupe-dark rounded-3xl overflow-hidden shadow-2xl grid grid-cols-1 lg:grid-cols-12 border border-accent-gold/30">
          
          {/* Text & Narrative (Left) */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-accent-gold text-xs uppercase tracking-widest font-bold">
                <Icon className="w-4 h-4" /> {current.tag}
              </div>

              <h3 className="font-heading text-3xl sm:text-4xl font-bold text-taupe-dark">
                {current.title}
              </h3>

              <p className="text-sm sm:text-base text-taupe-dark/80 font-light leading-relaxed">
                {current.description}
              </p>

              <blockquote className="p-4 rounded-xl bg-taupe-surface border-l-4 border-accent-gold italic text-xs sm:text-sm text-taupe-main font-serif">
                {current.quote}
              </blockquote>

              <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2">
                {current.highlights.map((h, i) => (
                  <div key={i} className="flex items-center gap-1.5 text-xs text-taupe-dark font-medium">
                    <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-taupe-light/30 flex items-center justify-between">
              <span className="text-xs text-taupe-main">Étape {activeChapter + 1} sur 4</span>
              <button
                onClick={onOpenQuoteModal}
                className="bg-accent-gold hover:bg-[#b5873e] text-stone-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow border border-accent-gold cursor-pointer active:scale-95"
              >
                <span>Commencer mon histoire</span>
                <ArrowRight className="w-4 h-4 text-stone-950 stroke-[2.5]" />
              </button>
            </div>
          </div>

          {/* Chapter Visual (Right) */}
          <div className="lg:col-span-5 relative min-h-[300px] lg:min-h-full">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-taupe-dark/60 via-transparent to-transparent lg:hidden" />
          </div>

        </div>

      </div>
    </section>
  );
};
