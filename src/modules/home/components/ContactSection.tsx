import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: 'Cuisine',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-taupe-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Single Line Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold">
            Devis Gratuit
          </span>
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl font-bold text-taupe-dark leading-tight">
            Parlez-nous de votre projet
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-5xl mx-auto">
          
          {/* Direct Contact Info */}
          <div className="lg:col-span-5 bg-stone-900 text-white p-6 sm:p-8 rounded-2xl space-y-6 flex flex-col justify-between border border-accent-gold/30">
            <div className="space-y-5">
              <h3 className="font-heading text-2xl font-bold text-white leading-snug">
                FAAR Agencement
              </h3>

              <div className="space-y-3.5 text-sm">
                <a
                  href="tel:0645158743"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Téléphone direct</div>
                    <div className="font-semibold text-white">06 45 15 87 43</div>
                  </div>
                </a>

                <a
                  href="mailto:faar.agencement@gmail.com"
                  className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-accent-gold transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Email</div>
                    <div className="font-semibold text-white truncate">faar.agencement@gmail.com</div>
                  </div>
                </a>

                <div className="flex items-center gap-3.5 p-4 rounded-xl bg-white/5 border border-white/10">
                  <div className="w-10 h-10 rounded-lg bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-white/50 uppercase tracking-wider">Zone d'intervention</div>
                    <div className="font-semibold text-white">Plouvain • Tout le Pas-de-Calais</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-accent-gold font-medium">
              <ShieldCheck className="w-4 h-4" />
              <span>Réponse garantie sous 24h à 48h</span>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-7 bg-taupe-card p-8 rounded-2xl border border-taupe-light/30 shadow-sm transition-colors duration-300">
            {submitted ? (
              <div className="py-12 text-center space-y-3">
                <div className="w-12 h-12 bg-accent-gold/20 text-accent-gold rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-2xl font-bold text-taupe-dark">
                  Message bien envoyé !
                </h3>
                <p className="text-xs text-taupe-main max-w-sm mx-auto font-light leading-relaxed">
                  Merci {formData.name}, nous avons bien reçu votre message et nous vous appelons très vite.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-taupe-dark mb-1">
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="votre nom"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-surface text-taupe-dark text-sm focus:outline-none focus:border-accent-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-taupe-dark mb-1">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="06 00 00 00 00"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-surface text-taupe-dark text-sm focus:outline-none focus:border-accent-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-taupe-dark mb-1">
                      Adresse Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="votre@email.fr"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-surface text-taupe-dark text-sm focus:outline-none focus:border-accent-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-taupe-dark mb-1">
                      Prestation
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-surface text-taupe-dark text-sm focus:outline-none focus:border-accent-gold"
                    >
                      <option value="Cuisine">Cuisine</option>
                      <option value="Salle de Bain">Salle de Bain</option>
                      <option value="Agencement">Agencement</option>
                      <option value="Dressing">Dressing</option>
                      <option value="Autre projet sur-mesure">Autre projet sur-mesure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-taupe-dark mb-1">
                    Votre Message *
                  </label>
                  <textarea
                    rows={3}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Partagez vos idées ou votre besoin..."
                    className="w-full px-3.5 py-2.5 rounded-lg border border-taupe-light/50 bg-taupe-surface text-taupe-dark text-sm focus:outline-none focus:border-accent-gold"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-accent-gold hover:bg-[#b5873e] text-stone-950 font-bold py-3.5 rounded-xl text-xs uppercase tracking-wider transition-all shadow flex items-center justify-center gap-2 border border-accent-gold cursor-pointer active:scale-98"
                >
                  <Send className="w-4 h-4 text-stone-950 stroke-[2.5]" />
                  <span>Demander mon devis gratuit</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
