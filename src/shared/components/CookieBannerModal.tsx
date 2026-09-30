import React, { useState, useEffect } from 'react';
import { Cookie, Check, X, Shield } from 'lucide-react';

export const CookieBannerModal: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('faar_cookie_consent_v2');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('faar_cookie_consent_v2', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('faar_cookie_consent_v2', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 sm:left-auto sm:right-6 sm:max-w-md z-50 animate-fade-in">
      <div className="bg-stone-900 text-white p-6 rounded-2xl shadow-2xl border border-accent-gold/40 space-y-4">
        
        <div className="flex items-start gap-3">
          <div className="w-9 h-9 rounded-xl bg-accent-gold/20 text-accent-gold flex items-center justify-center shrink-0">
            <Cookie className="w-5 h-5" />
          </div>
          <div>
            <h4 className="font-heading text-lg font-bold text-white">Gestion des Cookies</h4>
            <p className="text-xs text-white/80 font-light leading-relaxed mt-1">
              Nous utilisons des cookies essentiels pour assurer le bon fonctionnement du site et analyser anonymement la fréquentation.
            </p>
          </div>
        </div>

        {showDetails && (
          <div className="text-[11px] text-white/70 bg-white/5 p-3 rounded-xl border border-white/10 space-y-2">
            <div className="flex items-center justify-between">
              <span>Cookies essentiels (navigation)</span>
              <span className="text-accent-gold font-semibold">Requis</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Mesure d'audience anonyme</span>
              <span className="text-white/50">Optionnel</span>
            </div>
          </div>
        )}

        <div className="flex items-center gap-2 pt-1">
          <button
            onClick={handleAcceptAll}
            className="flex-1 bg-accent-gold hover:bg-[#b5873e] text-stone-950 font-bold py-2.5 px-3 rounded-xl text-xs uppercase tracking-wider transition-colors shadow cursor-pointer active:scale-95"
          >
            Tout Accepter
          </button>
          
          <button
            onClick={handleDecline}
            className="px-3.5 py-2.5 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 border border-stone-700 text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer active:scale-95"
          >
            Refuser
          </button>

          <button
            onClick={() => setShowDetails(!showDetails)}
            className="p-2 text-white/60 hover:text-white"
            aria-label="Détails"
          >
            <Shield className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
