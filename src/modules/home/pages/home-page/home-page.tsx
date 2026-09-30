import React, { useState } from 'react';
import { Navbar } from '@/shared/components/Navbar';
import { Footer } from '@/shared/components/Footer';
import { QuoteModal } from '@/shared/components/Modal';
import { MentionsLegalesModal } from '@/shared/components/MentionsLegalesModal';
import { RGPDModal } from '@/shared/components/RGPDModal';
import { CookieBannerModal } from '@/shared/components/CookieBannerModal';
import { HeroSection } from '../../components/HeroSection';
import { ServicesSection } from '../../components/ServicesSection';
import { PortfolioGallery } from '../../components/PortfolioGallery';
import { CraftsmanshipSection } from '../../components/CraftsmanshipSection';
import { ContactSection } from '../../components/ContactSection';
import { ServiceAreaSection } from '../../components/ServiceAreaSection';
import { ReviewsSection } from '../../components/ReviewsSection';

export const HomePage: React.FC = () => {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProjectType, setQuoteProjectType] = useState<string>('cuisine');
  const [quoteDescription, setQuoteDescription] = useState<string>('');
  const [isMentionsModalOpen, setIsMentionsModalOpen] = useState(false);
  const [isRGPDModalOpen, setIsRGPDModalOpen] = useState(false);

  const handleOpenQuoteModal = (projectType?: string, description?: string) => {
    if (projectType) setQuoteProjectType(projectType);
    setQuoteDescription(description || '');
    setIsQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-taupe-bg text-taupe-dark flex flex-col font-body selection:bg-accent-gold/30 selection:text-taupe-dark relative">
      {/* Navbar Header */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal('cuisine', '')} />

      {/* Main Sections - Matching Base Site Architecture */}
      <main className="flex-grow">
        <HeroSection onOpenQuoteModal={() => handleOpenQuoteModal('cuisine', '')} />
        <ServicesSection onOpenQuoteModal={handleOpenQuoteModal} />
        <CraftsmanshipSection />
        <PortfolioGallery onOpenQuoteModal={handleOpenQuoteModal} />
        <ReviewsSection />
        <ServiceAreaSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer
        onOpenMentions={() => setIsMentionsModalOpen(true)}
        onOpenRGPD={() => setIsRGPDModalOpen(true)}
      />

      {/* Modals & Consent Banner */}
      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProjectType={quoteProjectType}
        initialDescription={quoteDescription}
      />
      <MentionsLegalesModal isOpen={isMentionsModalOpen} onClose={() => setIsMentionsModalOpen(false)} />
      <RGPDModal isOpen={isRGPDModalOpen} onClose={() => setIsRGPDModalOpen(false)} />
      <CookieBannerModal />
    </div>
  );
};
