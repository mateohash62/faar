import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

interface ThemeToggleProps {
  className?: string;
  isScrolled?: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '', isScrolled = false }) => {
  const { theme, toggleTheme, setTheme } = useTheme();
  const isDark = theme === 'dark';

  return (
    <div
      className={`relative inline-flex items-center p-1 rounded-full border transition-all duration-300 select-none shadow-sm ${
        isScrolled
          ? 'bg-taupe-bg/90 border-taupe-light/60 text-taupe-dark'
          : 'bg-black/35 dark:bg-white/10 border-taupe-light/50 dark:border-white/20 text-taupe-dark dark:text-white backdrop-blur-md'
      } ${className}`}
      role="group"
      aria-label="Sélecteur de mode clair / sombre"
    >
      {/* Light Mode Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setTheme('light');
        }}
        aria-label="Activer le mode clair"
        title="Passer au mode clair"
        className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 cursor-pointer ${
          !isDark
            ? 'bg-white text-accent-gold shadow-md font-bold scale-105 border border-taupe-light/40'
            : 'text-taupe-medium/80 hover:text-taupe-dark dark:text-white/60 dark:hover:text-white'
        }`}
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      {/* Dark Mode Button */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          setTheme('dark');
        }}
        aria-label="Activer le mode sombre"
        title="Passer au mode sombre"
        className={`relative flex items-center justify-center w-7 h-7 rounded-full transition-all duration-300 cursor-pointer ${
          isDark
            ? 'bg-[#211E1B] text-[#D4AF37] shadow-md font-bold scale-105 border border-accent-gold/40'
            : 'text-taupe-medium/80 hover:text-taupe-dark dark:text-white/60 dark:hover:text-white'
        }`}
      >
        <Moon className="w-3.5 h-3.5" />
      </button>
    </div>
  );
};
