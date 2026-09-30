import React from 'react';
import { X, ShieldCheck, Lock } from 'lucide-react';

interface RGPDModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RGPDModal: React.FC<RGPDModalProps> = ({ isOpen, onClose }) => {
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
            <Lock className="w-5 h-5 text-accent-gold" />
            <h3 className="font-heading text-2xl font-bold">Politique de Confidentialité (RGPD)</h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-xs text-taupe-dark/85 leading-relaxed">
          
          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              1. Collecte des Données Personnelles
            </h4>
            <p>
              FAAR Agencement s'engage à ce que la collecte et le traitement de vos données soient conformes au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés. Les données récoltées via nos formulaires (nom, téléphone, adresse email) sont strictement réservées au traitement de votre demande de devis ou de rendez-vous.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              2. Utilisation et Destinataires des Données
            </h4>
            <p>
              Vos informations personnelles ne sont en aucun cas vendues, louées ni cédées à des tiers. Elles sont uniquement consultées par l'équipe de FAAR Agencement dans le cadre de la gestion de votre projet d'agencement.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              3. Durée de Conservation
            </h4>
            <p>
              Les données transmises pour une demande de devis sont conservées pour une durée maximale de 3 ans à compter du dernier contact avec le prospect, ou pour la durée légale en cas de relation contractuelle.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-heading text-lg font-bold text-taupe-dark border-b border-taupe-light/30 pb-1">
              4. Vos Droits Informatique et Libertés
            </h4>
            <p>
              Conformément à la réglementation européenne, vous disposez d’un droit d’accès, de rectification, de suppression et d’opposition sur vos données personnelles. Vous pouvez exercer ce droit en nous écrivant à :<br />
              <strong>Email :</strong> faar.agencement@gmail.com<br />
              <strong>Courrier :</strong> FAAR Agencement, Plouvain, 62118, Pas-de-Calais.
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
