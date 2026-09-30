import React, { useState } from 'react';
import { X, Send, CheckCircle2, Phone, Mail, User, MessageSquare, Compass, Sparkles } from 'lucide-react';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProjectType?: string;
  initialDescription?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProjectType = 'cuisine',
  initialDescription = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: initialProjectType,
    location: '',
    budget: '5000-10000',
    description: initialDescription,
  });

  const [submitted, setSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      setFormData((prev) => ({
        ...prev,
        projectType: initialProjectType || prev.projectType || 'cuisine',
        description: initialDescription !== undefined ? initialDescription : prev.description,
      }));
    }
  }, [isOpen, initialProjectType, initialDescription]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      // Auto close after 3s
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2500);
    }, 500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md animate-fade-in">
      <div
        className="relative w-full max-w-2xl bg-taupe-surface rounded-2xl shadow-2xl overflow-hidden border border-taupe-light/40"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-stone-900 text-white p-6 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 text-white/70 hover:text-white rounded-full hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className="flex items-center gap-2 text-accent-gold text-xs uppercase tracking-widest font-semibold mb-1">
            <Sparkles className="w-4 h-4" /> Devis Gratuit & Sans Engagement
          </div>
          <h3 className="font-heading text-2xl md:text-3xl font-bold">
            Étudions Votre Projet d'Agencement
          </h3>
          <p className="text-xs text-white/70 mt-1">
            FAAR Agencement vous répond sous 24h à 48h ouvrées.
          </p>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="w-16 h-16 bg-accent-gold/20 text-accent-gold border-2 border-accent-gold rounded-full flex items-center justify-center mx-auto animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-heading text-2xl font-bold text-taupe-dark">
                Demande transmise avec succès !
              </h4>
              <p className="text-sm text-taupe-main max-w-md mx-auto">
                Merci {formData.name}, nous avons bien reçu votre demande. Un artisan spécialisé de FAAR Agencement prendra contact avec vous rapidement au {formData.phone || 'numéro indiqué'}.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-taupe-dark mb-1.5 flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-accent-gold" /> Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="ex. Laurent Dubois"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-card text-taupe-dark text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-taupe-dark mb-1.5 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-accent-gold" /> Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="06 12 34 56 78"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-card text-taupe-dark text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-taupe-dark mb-1.5 flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-accent-gold" /> Adresse Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="votre@email.fr"
                    className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-card text-taupe-dark text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-taupe-dark mb-1.5 flex items-center gap-1.5">
                    <Compass className="w-3.5 h-3.5 text-accent-gold" /> Type de Projet *
                  </label>
                  <select
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-card text-taupe-dark text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                  >
                    <option value="cuisine">Cuisine</option>
                    <option value="salle_de_bain">Salle de Bain</option>
                    <option value="agencement">Agencement</option>
                    <option value="dressing">Dressing</option>
                    <option value="autre">Autre projet sur-mesure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-taupe-dark mb-1.5 flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-accent-gold" /> Détails du projet / Dimensions estimées
                </label>
                <textarea
                  rows={3}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Décrivez votre besoin (ex: rénovation de 6 portes intérieures, création d'un dressing sous pente...)"
                  className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-card text-taupe-dark text-sm focus:outline-none focus:border-accent-gold focus:ring-1 focus:ring-accent-gold"
                ></textarea>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <span className="text-[11px] text-taupe-medium italic">
                  Vos informations restent strictement confidentielles.
                </span>
                <button
                  type="submit"
                  className="bg-accent-gold hover:bg-[#b5873e] text-stone-950 font-bold px-6 py-3 rounded-xl text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 border border-accent-gold cursor-pointer active:scale-95"
                >
                  <Send className="w-4 h-4 text-stone-950 stroke-[2.5]" /> Envoyer Ma Demande
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
