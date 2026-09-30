import React from 'react';
import { Star, ExternalLink } from 'lucide-react';

interface ReviewItem {
  id: number;
  text: string;
  rating: number;
  name: string;
  role: string;
  avatar: string;
}

export const ReviewsSection: React.FC = () => {
  // 6 Authentic Google Reviews from FAAR Agencement
  const googleReviews: ReviewItem[] = [
    {
      id: 1,
      name: "Annie Dziadek",
      role: "Avis Google vérifié",
      rating: 5,
      avatar: "/images/google_avatar_annie.png",
      text: "Excellent travail d'Arnaud et Fabien pour le remplacement d'un plan de travail, d'une crédence, la mise en place de nouveaux appareils ménagers. De +, la cuisine n'étant pas récente, ils ont effectué tous les réglages de portes et des coulisses, refait des joints là où c'était nécessaire. Ce sont d'excellents professionnels, minutieux et très à l'écoute du client. On dirait que la cuisine est neuve. Encore Merci à vous 2.",
    },
    {
      id: 2,
      name: "Anne",
      role: "Avis Google vérifié",
      rating: 5,
      avatar: "/images/google_avatar_anne.png",
      text: "Arnaud et Fabien ont réalisé chez nous un dressing, des placards sous pente et des étagères. Travail très soigné, résultat au top.",
    },
    {
      id: 3,
      name: "JACQUES justine",
      role: "Avis Google vérifié",
      rating: 5,
      avatar: "/images/google_avatar_justine.png",
      text: "Équipe très sympathique et dynamique. Le travail a été réalisé dans les délais et avec un souci du détail. Je recommande vivement cette entreprise à tous ceux qui recherchent des solutions d'agencement de qualité.",
    },
    {
      id: 4,
      name: "Coline DERUY",
      role: "Avis Google vérifié",
      rating: 5,
      avatar: "/images/google_avatar_coline.png",
      text: "Super bon travail, bonnes finitions et équipe sympa! Je recommande!",
    },
    {
      id: 5,
      name: "Thomas Vanini",
      role: "Avis Google vérifié",
      rating: 5,
      avatar: "/images/google_avatar_thomas.png",
      text: "Travail de qualité, Équipe sympathique. Je recommande.",
    },
    {
      id: 6,
      name: "Baptiste Gernez",
      role: "Avis Google vérifié",
      rating: 5,
      avatar: "/images/google_avatar_baptiste.png",
      text: "Très professionnel, avec des finitions au top 👍",
    },
  ];

  return (
    <section id="avis" className="py-24 sm:py-32 bg-taupe-bg relative overflow-hidden scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-3">
          <span className="text-xs uppercase tracking-[0.3em] text-accent-gold font-bold block">
            AVIS VÉRIFIÉS • RETOURS D'EXPÉRIENCE
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-normal sm:font-medium text-taupe-dark tracking-tight leading-tight">
            Ce que pensent nos clients
          </h2>
          <p className="text-sm sm:text-base text-taupe-dark/75 font-light max-w-xl mx-auto leading-relaxed">
            Découvrez les retours d'expérience de nos clients sur la conception et la pose de leurs aménagements sur-mesure.
          </p>
        </div>

        {/* 3x2 Grid of 6 Authentic Google Reviews */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {googleReviews.map((review) => (
            <div
              key={review.id}
              className="bg-taupe-card rounded-2xl p-7 sm:p-8 border border-taupe-light/30 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <p className="text-sm sm:text-[15px] text-taupe-dark/90 leading-relaxed font-normal">
                  "{review.text}"
                </p>
                <div className="flex items-center gap-1 my-5 text-[#F2542D]">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#F2542D]" />
                  ))}
                </div>
              </div>
              <div className="flex items-center gap-3 pt-2">
                <img
                  src={review.avatar}
                  alt={review.name}
                  className="w-10 h-10 rounded-full object-cover shrink-0 border border-taupe-light/40 shadow-xs"
                />
                <div>
                  <h4 className="text-sm font-semibold text-taupe-dark leading-tight">
                    {review.name}
                  </h4>
                  <p className="text-xs text-taupe-medium font-normal mt-0.5">
                    {review.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bouton Ajouter un avis Google */}
        <div className="mt-14 text-center">
          <a
            href="https://www.google.com/search?sca_esv=2f8f76a28fa0a08e&rlz=1C5OZZY_enFR1222FR1222&hl=fr-FR&sxsrf=APpeQnvzJbU25PipCnY8Wev0mpJNQ1um9A:1789144601339&q=FAAR+AGENCEMENT&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_y4VSZ89euORoDJTY7OpEFrpUJ1E5-9J_16KGS1KHJUhJS8rf17WkdTY82PgItcTWC3erCw%3D&uds=AJ5uw195I-HiO8RgG3HHbr6KY2_8SJcQbgTE1BP3Enln5Kl1_J9OusYVPKht0fjj6DOC5Ydcj5EJHm62O8VybzYbzAVCIz6pZbK2yWfdWIzevT6j9E5g2Lo&sa=X&ved=2ahUKEwiFkqiD--aWAxWsTqQEHa2XEYEQ3PALegQIHRAE&biw=1512&bih=781&dpr=2"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 bg-stone-900 hover:bg-stone-800 text-white border border-accent-gold/40 transition-all duration-300 rounded-full text-xs font-semibold uppercase tracking-wider shadow-md group active:scale-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:scale-110">
              <path d="M22.56 12.25C22.56 11.47 22.49 10.71 22.36 9.97H12V14.28H17.92C17.66 15.68 16.88 16.85 15.69 17.65V20.45H19.26C21.34 18.53 22.56 15.66 22.56 12.25Z" fill="#4285F4"/>
              <path d="M12 23C14.97 23 17.46 22.02 19.26 20.45L15.69 17.65C14.7 18.31 13.46 18.7 12 18.7C9.17 18.7 6.77 16.79 5.88 14.23H2.21V17.08C4.01 20.65 7.69 23 12 23Z" fill="#34A853"/>
              <path d="M5.88 14.23C5.65 13.56 5.52 12.83 5.52 12.08C5.52 11.33 5.65 10.6 5.88 9.93V7.08H2.21C1.47 8.56 1.05 10.27 1.05 12.08C1.05 13.89 1.47 15.6 2.21 17.08L5.88 14.23Z" fill="#FBBC05"/>
              <path d="M12 5.46C13.62 5.46 15.06 6.02 16.2 7.11L19.33 3.98C17.45 2.23 14.97 1.16 12 1.16C7.69 1.16 4.01 3.51 2.21 7.08L5.88 9.93C6.77 7.37 9.17 5.46 12 5.46Z" fill="#EA4335"/>
            </svg>
            <span>Ajouter un avis Google</span>
            <ExternalLink className="w-3.5 h-3.5 text-accent-gold ml-0.5" />
          </a>
        </div>

      </div>
    </section>
  );
};
