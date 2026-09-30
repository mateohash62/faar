import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, X, ShieldCheck, ArrowUpRight, ArrowRight, CheckCircle2, ChevronDown } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  category: 'Cuisine' | 'Dressing' | 'Salle de bain' | 'Agencement' | 'Rénovation Portes';
  categoryLabel: string;
  location: string;
  year: string;
  image: string;
  description: string;
  highlights: string[];
}

interface PortfolioGalleryProps {
  onOpenQuoteModal?: (projectType?: string, description?: string) => void;
}

export const PortfolioGallery: React.FC<PortfolioGalleryProps> = ({ onOpenQuoteModal }) => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [showAllProjects, setShowAllProjects] = useState<boolean>(false);

  // 4 Main Featured REAL FAAR Agencement Projects
  const featuredMure: Project = {
    id: 1,
    title: 'Habillage mural & claustra bois avec miroir arche',
    category: 'Agencement',
    categoryLabel: 'Agencement Intérieur',
    location: 'Hénin-Beaumont (62110)',
    year: '2025',
    image: '/images/Mure.jpg',
    description: 'Conception et pose sur-mesure d’un ensemble séparateur d’entrée comprenant claustra acoustique en tasseaux de bois verticaux, miroir arche découpé sur-mesure et console suspendue avec tiroir invisible.',
    highlights: ['Claustra en tasseaux bois massif', 'Console suspendue avec tiroir invisible', 'Miroir arche sur-mesure intégré', 'Pose millimétrée au sol et plafond'],
  };

  const featuredCuisine: Project = {
    id: 2,
    title: 'Cuisine moderne bicolore & électroménager encastré',
    category: 'Cuisine',
    categoryLabel: 'Cuisine Sur-Mesure',
    location: 'Arras (62000)',
    year: '2025',
    image: '/images/Cuisine2.jpg',
    description: 'Aménagement complet d’une cuisine contemporaine avec façades laquées grises, colonne pour four et micro-ondes intégrés, plan de travail résistant et crédence haute assortie.',
    highlights: ['Façades laquées satinées', 'Électroménager parfaitement affleurant', 'Tiroirs coulissants avec amortisseurs', 'Plan de travail haute densité résistant'],
  };

  const featuredMeuble: Project = {
    id: 3,
    title: 'Meuble console en bois massif & acier noir',
    category: 'Agencement',
    categoryLabel: 'Mobilier Artisanal',
    location: 'Atelier FAAR • Plouvain (62118)',
    year: '2025',
    image: '/images/Meuble.jpg',
    description: 'Façonnage artisanal d’un meuble bas / banc en plateau de bois massif sélectionné avec chants naturels (live-edge) et piètement tubulaire en acier noir thermolaqué.',
    highlights: ['Plateau bois massif avec chant live-edge', 'Structure acier noir robuste', 'Traitement huile protectrice mate', 'Création unique fabriquée en atelier'],
  };

  const featuredEscalier: Project = {
    id: 4,
    title: 'Rénovation & habillage d’escalier en chêne massif',
    category: 'Agencement',
    categoryLabel: 'Escalier & Aménagement',
    location: 'Douai (59000)',
    year: '2025',
    image: '/images/Escalier.jpg',
    description: 'Habillage d’un escalier quart-tournant avec marches et contremarches en chêne massif, intégration parfaite avec mur en pierre naturelle et meuble bas assorti.',
    highlights: ['Marches en chêne massif sur-mesure', 'Ajustement précis sur trémie existante', 'Vernis vitrificateur grand passage', 'Intégration d’un meuble de rangement'],
  };

  // Additional Real FAAR Projects
  const additionalProjects: Project[] = [
    {
      id: 5,
      title: 'Cuisine d’angle avec bar arrondi & arche bois',
      category: 'Cuisine',
      categoryLabel: 'Cuisine Sur-Mesure',
      location: 'Plouvain (62118)',
      year: '2025',
      image: '/images/Cuisine.jpg',
      description: 'Agencement d’un espace cuisine chaleureux avec arche en chêne clair, plan bar arrondi ergonomique pour coin repas et rangements optimisés.',
      highlights: ['Arche en chêne sur-mesure', 'Comptoir bar convivial', 'Prises intégrées escamotables', 'Optimisation d’un espace compact'],
    },
    {
      id: 6,
      title: 'Rénovation de devanture & menuiserie extérieure',
      category: 'Agencement',
      categoryLabel: 'Menuiserie Extérieure',
      location: 'Pas-de-Calais (62)',
      year: '2025',
      image: '/images/Facade.jpg',
      description: 'Rénovation de menuiserie extérieure et façade pour valoriser et isoler le bâtiment, avec porte d’entrée moulurée bleue et châssis assortis.',
      highlights: ['Porte d’entrée moulurée sur-mesure', 'Menuiseries isolantes double vitrage', 'Finition et étanchéité durables'],
    },
    {
      id: 7,
      title: 'Façonnage & ré-stratification de panneaux en atelier',
      category: 'Rénovation Portes',
      categoryLabel: 'Savoir-Faire Atelier',
      location: 'Atelier FAAR • Plouvain (62118)',
      year: '2025',
      image: '/images/fb_photo_full_14.jpg',
      description: 'Découpe et cintrage de stratifié haute résistance pour le mobilier galbé et la ré-stratification de portes intérieures.',
      highlights: ['Stratifié haute résistance anti-rayure', 'Cintrage d’ébénisterie de précision', 'Finition des chants invisible'],
    },
    {
      id: 8,
      title: 'Atelier mobile & outillage de précision sur chantier',
      category: 'Agencement',
      categoryLabel: 'Sur le Terrain',
      location: 'Arras, Douai, Lens, Plouvain',
      year: '2025',
      image: '/images/Camion.jpg',
      description: 'Véhicule d’intervention entièrement équipé pour intervenir chez vous avec réactivité et assurer une pose propre et méticuleuse.',
      highlights: ['Atelier mobile autonome', 'Outillage professionnel de précision', 'Protection complète de votre intérieur'],
    },
  ];



  const handleOpenQuote = (project: Project) => {
    setSelectedProject(null);
    if (onOpenQuoteModal) {
      const type = project.category === 'Cuisine' ? 'cuisine' : project.category === 'Dressing' ? 'dressing' : project.category === 'Salle de bain' ? 'salle-de-bain' : 'agencement';
      onOpenQuoteModal(type, `Je souhaite un projet similaire à : ${project.title} (${project.categoryLabel})`);
    }
  };

  return (
    <section id="realisations" className="py-24 sm:py-32 bg-taupe-bg relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-gold font-semibold block">
            PORTFOLIO • SAVOIR-FAIRE ARTISANAL
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium text-taupe-dark tracking-tight leading-tight">
            Nos réalisations récentes
          </h2>
          <p className="text-sm sm:text-base text-taupe-dark/75 font-light max-w-xl mx-auto leading-relaxed">
            Découvrez nos véritables chantiers en photos, conçus et posés par nos soins dans le Pas-de-Calais et les Hauts-de-France.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 items-stretch">
            
            {/* Column 1: Left Tall - Real Claustra & Arched Mirror Wall Unit */}
            <div
              onClick={() => setSelectedProject(featuredMure)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm bg-taupe-surface border border-taupe-light/30 min-h-[500px] sm:min-h-[580px] lg:min-h-[680px] flex flex-col transition-all duration-500 hover:shadow-xl"
            >
              <img
                src={featuredMure.image}
                alt={featuredMure.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />

              {/* Tag Top Left */}
              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-accent-gold/40 shadow">
                  {featuredMure.categoryLabel}
                </span>
              </div>

              {/* Circular Arrow Button (appears on hover) */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F0E6CE] text-stone-950 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-10 pointer-events-none">
                <ArrowUpRight className="w-5 h-5 text-stone-950 stroke-[2]" />
              </div>

              {/* Card Label */}
              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <h4 className="font-heading text-lg sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                  {featuredMure.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-white/80 font-light mt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                  <span>{featuredMure.location}</span>
                </div>
              </div>
            </div>

            {/* Column 2: Center Stacked Cards (Top Cuisine + Bottom Meuble Massif) */}
            <div className="flex flex-col justify-between gap-4 lg:gap-6 min-h-[500px] sm:min-h-[580px] lg:min-h-[680px]">
              
              {/* Top Card: Real Cuisine */}
              <div
                onClick={() => setSelectedProject(featuredCuisine)}
                className="flex-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm bg-taupe-surface border border-taupe-light/30 min-h-[240px] sm:min-h-[280px] lg:min-h-[328px] transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src={featuredCuisine.image}
                  alt={featuredCuisine.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent transition-opacity duration-500" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-accent-gold/40 shadow">
                    {featuredCuisine.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-[#F0E6CE] text-stone-950 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-10 pointer-events-none">
                  <ArrowUpRight className="w-5 h-5 text-stone-950 stroke-[2]" />
                </div>

                <div className="absolute bottom-4 left-4 right-4 text-white z-10">
                  <h4 className="font-heading text-base sm:text-xl font-semibold text-white tracking-tight leading-snug">
                    {featuredCuisine.title}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-white/80 font-light mt-0.5">
                    <MapPin className="w-3 h-3 text-accent-gold" />
                    <span>{featuredCuisine.location}</span>
                  </div>
                </div>
              </div>

              {/* Bottom Card: Real Meuble Massif with Signature Editorial Cartouche */}
              <div
                onClick={() => setSelectedProject(featuredMeuble)}
                className="flex-1 relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm bg-taupe-surface border border-taupe-light/30 min-h-[240px] sm:min-h-[280px] lg:min-h-[328px] transition-all duration-500 hover:shadow-xl"
              >
                <img
                  src={featuredMeuble.image}
                  alt={featuredMeuble.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-500" />

                <div className="absolute top-3 left-3 z-10">
                  <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold bg-black/80 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-accent-gold/40 shadow">
                    {featuredMeuble.categoryLabel}
                  </span>
                </div>

                {/* Signature Editorial Card */}
                <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 bg-[#FAF7F2]/95 dark:bg-stone-900/95 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-[#E5DAC1] dark:border-accent-gold/40 shadow-lg z-10 flex items-center justify-between gap-3 group-hover:border-accent-gold transition-colors">
                  <div>
                    <h4 className="font-heading text-base sm:text-lg lg:text-xl font-bold text-stone-900 dark:text-white tracking-tight leading-snug">
                      Mobilier sur-mesure en bois massif
                    </h4>
                    <p className="font-body text-[11px] sm:text-xs text-stone-700 dark:text-stone-300 font-medium mt-0.5">
                      FAAR Agencement • Fabrication artisanale en atelier
                    </p>
                  </div>
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-stone-900 dark:bg-stone-800 text-accent-gold border border-accent-gold/40 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow">
                    <ArrowUpRight className="w-4 h-4 text-accent-gold stroke-[2]" />
                  </div>
                </div>
              </div>

            </div>

            {/* Column 3: Right Tall - Real Solid Oak Staircase */}
            <div
              onClick={() => setSelectedProject(featuredEscalier)}
              className="relative group cursor-pointer overflow-hidden rounded-2xl shadow-sm bg-taupe-surface border border-taupe-light/30 min-h-[500px] sm:min-h-[580px] lg:min-h-[680px] flex flex-col transition-all duration-500 hover:shadow-xl"
            >
              <img
                src={featuredEscalier.image}
                alt={featuredEscalier.title}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-500" />

              <div className="absolute top-4 left-4 z-10">
                <span className="text-[10px] uppercase tracking-widest text-accent-gold font-bold bg-black/80 backdrop-blur-md px-3 py-1 rounded-full border border-accent-gold/40 shadow">
                  {featuredEscalier.categoryLabel}
                </span>
              </div>

              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#F0E6CE] text-stone-950 flex items-center justify-center shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-90 group-hover:scale-100 z-10 pointer-events-none">
                <ArrowUpRight className="w-5 h-5 text-stone-950 stroke-[2]" />
              </div>

              <div className="absolute bottom-5 left-5 right-5 text-white z-10">
                <h4 className="font-heading text-lg sm:text-2xl font-semibold text-white tracking-tight leading-snug">
                  {featuredEscalier.title}
                </h4>
                <div className="flex items-center gap-2 text-xs text-white/80 font-light mt-1">
                  <MapPin className="w-3.5 h-3.5 text-accent-gold" />
                  <span>{featuredEscalier.location}</span>
                </div>
              </div>
            </div>

          </div>

        {/* Toggle to see more artisan field projects */}
        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAllProjects(!showAllProjects)}
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-white hover:bg-stone-50 text-stone-900 dark:bg-stone-900 dark:hover:bg-stone-800 dark:text-stone-100 dark:border-accent-gold/40 rounded-full text-xs uppercase tracking-widest font-bold border border-taupe-light/50 shadow-sm transition-all group cursor-pointer active:scale-95"
          >
            <span>{showAllProjects ? 'Réduire la galerie' : 'Voir plus de chantiers réels de l’artisan (+4 chantiers)'}</span>
            <ChevronDown className={`w-4 h-4 text-accent-gold transition-transform duration-300 ${showAllProjects ? 'rotate-180' : ''}`} />
          </button>
        </div>

        {/* Expandable Additional Gallery */}
        <AnimatePresence>
          {showAllProjects && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5 }}
              className="overflow-hidden pt-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {additionalProjects.map((project) => (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    className="group bg-taupe-card rounded-xl overflow-hidden shadow-sm border border-taupe-light/30 dark:border-accent-gold/20 cursor-pointer hover:shadow-lg transition-all"
                  >
                    <div className="relative h-56 overflow-hidden bg-taupe-surface">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
                      <div className="absolute bottom-3 left-3 right-3 text-white">
                        <span className="text-[10px] uppercase tracking-wider text-accent-gold font-bold bg-black/80 backdrop-blur-sm px-2.5 py-0.5 rounded-full inline-block mb-1 border border-accent-gold/30">
                          {project.categoryLabel}
                        </span>
                        <h4 className="font-heading text-sm font-semibold text-white truncate">
                          {project.title}
                        </h4>
                      </div>
                    </div>
                    <div className="p-4 space-y-2">
                      <p className="text-xs text-taupe-dark/75 font-light line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex items-center justify-between text-[11px] text-taupe-main pt-2 border-t border-taupe-light/20">
                        <span className="flex items-center gap-1 font-medium">
                          <MapPin className="w-3 h-3 text-accent-gold" /> {project.location}
                        </span>
                        <span className="text-accent-gold font-semibold uppercase text-[10px] tracking-wider group-hover:underline">
                          Voir détails &rarr;
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

      {/* Detailed Project Lightbox Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="relative bg-taupe-card max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl border border-taupe-light/30 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 text-white bg-stone-900/90 hover:bg-stone-800 rounded-full shadow transition-all border border-white/20 cursor-pointer"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Image Container */}
            <div className="relative h-72 sm:h-96 w-full overflow-hidden bg-taupe-surface shrink-0">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-6 right-6 text-white">
                <span className="text-xs font-bold text-accent-gold bg-black/80 px-3 py-1 rounded-full uppercase tracking-wider border border-accent-gold/40 inline-block mb-2">
                  {selectedProject.categoryLabel}
                </span>
                <h3 className="font-heading text-xl sm:text-3xl font-bold text-white">
                  {selectedProject.title}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-6 sm:p-8 space-y-6 overflow-y-auto font-body">
              <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-taupe-main border-b border-taupe-light/30 pb-4">
                <span className="flex items-center gap-1.5 bg-taupe-surface px-3 py-1.5 rounded-lg border border-taupe-light/40">
                  <MapPin className="w-4 h-4 text-accent-gold" /> {selectedProject.location}
                </span>
                <span className="flex items-center gap-1.5 bg-taupe-surface px-3 py-1.5 rounded-lg border border-taupe-light/40">
                  <ShieldCheck className="w-4 h-4 text-accent-gold" /> Chantier Réalisé par FAAR Agencement
                </span>
              </div>

              <div className="space-y-2">
                <h4 className="font-heading font-bold text-taupe-dark text-lg">Détails de la Réalisation</h4>
                <p className="text-xs sm:text-sm text-taupe-dark/80 leading-relaxed font-light">
                  {selectedProject.description}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="font-heading font-bold text-taupe-dark text-sm uppercase tracking-wider">
                  Points Forts & Matériaux
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {selectedProject.highlights.map((h, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-2 text-xs bg-taupe-surface p-3 rounded-xl border border-taupe-light/30 text-taupe-dark font-medium"
                    >
                      <CheckCircle2 className="w-4 h-4 text-accent-gold shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-taupe-light/30 flex justify-end">
                <button
                  onClick={() => handleOpenQuote(selectedProject)}
                  className="w-full sm:w-auto bg-accent-gold hover:bg-[#b5873e] text-stone-950 font-bold px-8 py-3.5 rounded-full text-xs uppercase tracking-wider flex items-center justify-center gap-3 transition-all shadow-md group border border-accent-gold cursor-pointer active:scale-95"
                >
                  <span>Demander un projet similaire</span>
                  <ArrowRight className="w-4 h-4 text-stone-950 stroke-[2.5] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};
