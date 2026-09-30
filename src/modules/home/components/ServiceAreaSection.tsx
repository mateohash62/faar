import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

const cities = [
  { name: 'PLOUVAIN', cx: 440, cy: 400, main: true, url: 'https://maps.google.com/?q=Plouvain', labelOffset: { x: 0, y: 40 } },
  { name: 'ARRAS', cx: 250, cy: 430, main: false, url: 'https://maps.google.com/?q=Arras', labelOffset: { x: 0, y: 30 } },
  { name: 'LENS', cx: 350, cy: 200, main: false, url: 'https://maps.google.com/?q=Lens', labelOffset: { x: -20, y: 30 } },
  { name: 'HÉNIN\nBEAUMONT', cx: 490, cy: 190, main: false, url: 'https://maps.google.com/?q=Henin-Beaumont', labelOffset: { x: 50, y: 0 } },
  { name: 'VITRY-EN-ARTOIS', cx: 500, cy: 350, main: false, url: 'https://maps.google.com/?q=Vitry-en-Artois', labelOffset: { x: 45, y: 15 } },
  { name: 'DOUAI', cx: 620, cy: 280, main: false, url: 'https://maps.google.com/?q=Douai', labelOffset: { x: 0, y: 30 } },
];

// Custom SVG Paths matching the diagram's stylized roads
const roads = [
  "M 190 480 Q 220 460 250 430 Q 270 380 320 370 Q 360 360 410 340 Q 450 340 500 350", // Arras to Vitry
  "M 500 350 Q 550 330 620 280 L 650 250", // Vitry to Douai
  "M 350 200 Q 380 250 420 280 Q 460 330 440 400 L 420 450", // Lens to Plouvain
  "M 490 160 L 490 190 Q 490 260 450 300 Q 470 330 500 350 L 515 400", // Henin to Vitry
  "M 250 430 Q 280 430 330 400 Q 380 390 440 400", // Arras to Plouvain directly
];

export const ServiceAreaSection: React.FC = () => {
  return (
    <section className="py-24 bg-taupe-surface relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Content */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase tracking-[0.25em] text-accent-gold font-bold">
            Zone d'intervention
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-taupe-dark leading-tight">
            Au cœur des Hauts-de-France
          </h2>
          <div className="w-16 h-0.5 bg-accent-gold mx-auto" />
          <p className="text-taupe-dark/80 font-light leading-relaxed text-lg pt-4">
            Basés à Plouvain, nous intervenons principalement dans le Pas-de-Calais et le Nord.
            <br className="hidden sm:block" /> Cliquez sur un point pour l'ouvrir dans Google Maps.
          </p>
        </div>

        {/* Custom SVG Map */}
        <div className="relative w-full max-w-4xl mx-auto bg-taupe-card rounded-3xl shadow-sm border border-taupe-light/20 p-2 sm:p-6 pb-12 sm:pb-12 transition-colors duration-300">
          <div className="relative w-full">
            <svg 
              viewBox="120 120 600 400" 
              className="w-full h-auto drop-shadow-sm"
              preserveAspectRatio="xMidYMid meet"
            >
              {/* Draw Roads */}
              {roads.map((path, index) => (
                <motion.path
                  key={`road-${index}`}
                  d={path}
                  fill="none"
                  stroke="var(--color-taupe-main)"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.6 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 1.5, delay: index * 0.2, ease: "easeInOut" }}
                />
              ))}

              {/* Draw Cities */}
              {cities.map((city, index) => (
                <g 
                  key={city.name}
                  className="cursor-pointer group"
                  onClick={() => window.open(city.url, '_blank')}
                >
                  {/* Hover Hitbox for easier clicking */}
                  <circle cx={city.cx} cy={city.cy} r={30} fill="transparent" />
                  
                  {/* Outer Glow / Base Ring */}
                  <motion.circle
                    cx={city.cx}
                    cy={city.cy}
                    r={city.main ? 22 : 14}
                    fill={city.main ? '#C59A68' : '#DBC3A3'}
                    opacity="0.8"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 1 + index * 0.1 }}
                    className="group-hover:scale-110 transition-transform duration-300 origin-center"
                    style={{ transformOrigin: `${city.cx}px ${city.cy}px` }}
                  />
                  
                  {/* Inner Ring */}
                  <motion.circle
                    cx={city.cx}
                    cy={city.cy}
                    r={city.main ? 14 : 9}
                    fill="var(--color-taupe-card)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 1.2 + index * 0.1 }}
                  />
                  
                  {/* Center Dot */}
                  <motion.circle
                    cx={city.cx}
                    cy={city.cy}
                    r={city.main ? 6 : 4}
                    fill="var(--color-accent-gold)"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 1.4 + index * 0.1 }}
                  />

                  {/* City Label */}
                  <motion.text
                    x={city.cx + city.labelOffset.x}
                    y={city.cy + city.labelOffset.y}
                    textAnchor="middle"
                    className={`font-heading font-bold uppercase tracking-widest ${city.main ? 'text-[15px] fill-taupe-dark' : 'text-[10px] sm:text-xs fill-taupe-dark/90'}`}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  >
                    {city.name.split('\n').map((line, i) => (
                      <tspan 
                        x={city.cx + city.labelOffset.x} 
                        dy={i === 0 ? 0 : 12} 
                        key={line}
                      >
                        {line}
                      </tspan>
                    ))}
                  </motion.text>
                </g>
              ))}
            </svg>
          </div>
          
          <div className="absolute bottom-4 left-6 text-xs text-taupe-medium/80 font-light flex items-center gap-2">
            <MapPin className="w-3 h-3" />
            Cliquez sur un point pour l'ouvrir dans Google Maps
          </div>
        </div>

      </div>
    </section>
  );
};
