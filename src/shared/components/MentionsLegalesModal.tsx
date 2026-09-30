import React from 'react';
import { X, ShieldCheck, FileText, Scale } from 'lucide-react';

interface MentionsLegalesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MentionsLegalesModal: React.FC<MentionsLegalesModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-3xl max-h-[85vh] bg-taupe-card rounded-2xl shadow-2xl overflow-hidden border border-taupe-light/40 dark:border-accent-gold/30 flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 relative flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-accent-gold" />
            <h3 className="font-heading text-2xl font-bold">Mentions Légales</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content (Scrollable) */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-taupe-dark/85 leading-relaxed">
          
          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              1. Éditeur du Site
            </h4>
            <p>
              Le site <strong>FAAR Agencement</strong> est édité par l’entreprise FAAR Agencement.<br />
              <strong>Siège social :</strong> Plouvain, 62118, Pas-de-Calais, France.<br />
              <strong>Téléphone :</strong> 06 45 15 87 43<br />
              <strong>Adresse Email :</strong> faar.agencement@gmail.com<br />
              <strong>Numéro SIRET :</strong> [Numéro SIRET à compléter]<br />
              <strong>Directeur de la publication :</strong> [Nom du dirigeant à compléter]
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              2. Hébergement du Site
            </h4>
            <p>
              Le site est hébergé par [Nom de l'hébergeur - ex: Vercel Inc. / Hostinger / OVH Cloud].<br />
              <strong>Adresse de l'hébergeur :</strong> [Adresse hébergeur à compléter]<br />
              <strong>Site web hébergeur :</strong> [https://...]
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              3. Propriété Intellectuelle
            </h4>
            <p>
              L’ensemble des contenus présents sur le site FAAR Agencement (textes, photographies, éléments graphiques, logo) est protégé par le droit d’auteur et la propriété intellectuelle. Toute reproduction ou représentation, intégrale ou partielle, sans l’autorisation expresse de FAAR Agencement est strictement interdite.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              4. Assurance & Garantie Décennale
            </h4>
            <p>
              L’entreprise FAAR Agencement souscrit une assurance de responsabilité civile professionnelle et une garantie décennale couvrant l’ensemble de ses travaux d’agencement et de rénovation dans le Pas-de-Calais.
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="p-4 bg-taupe-surface border-t border-taupe-light/30 text-right">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white text-xs font-semibold uppercase tracking-wider border border-accent-gold/40 cursor-pointer active:scale-95"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  );
};
