import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from './LanguageContext';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.experience, href: '#experience' },
    { name: t.nav.projects, href: '#projects' },
    { name: t.nav.skills, href: '#skills' },
    { name: t.nav.contact, href: '#contact' },
  ];

  const toggleLanguage = () => {
      setLanguage(language === 'en' ? 'fr' : 'en');
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled 
          ? 'bg-slate-900/90 backdrop-blur-xl border-b border-white/5 h-16 shadow-2xl' 
          : 'bg-transparent h-20 border-b border-transparent'
      }`}
    >
      <div className="w-full max-w-[1920px] mx-auto px-4 md:px-8 h-full flex justify-between items-center">
        {/* Stylish Networks & IoT Logo */}
        <a href="#" className="flex items-center gap-4 group transition-all duration-300">
          <div className="relative w-12 h-12 flex items-center justify-center">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-blue-500/10 blur-xl rounded-full group-hover:bg-blue-500/30 transition-all duration-700" />
            
            {/* Animated Network Signal Rings */}
            <svg className="absolute w-full h-full overflow-visible" viewBox="0 0 40 40">
              <motion.circle 
                cx="20" cy="20" r="18" fill="none" stroke="currentColor" 
                className="text-blue-500/20" strokeWidth="1" strokeDasharray="4 8"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="20" cy="20" r="14" fill="none" stroke="currentColor" 
                className="text-blue-500/40" strokeWidth="1.5" strokeDasharray="10 15"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.circle 
                cx="20" cy="20" r="10" fill="none" stroke="currentColor" 
                className="text-blue-500/60" strokeWidth="2" strokeDasharray="2 4"
                animate={{ rotate: 360 }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              />
            </svg>

            {/* Central IoT Node Core */}
            <div className="relative z-10">
              <motion.div 
                className="w-3.5 h-3.5 bg-blue-500 rounded-sm shadow-[0_0_15px_rgba(59,130,246,0.8)] border border-blue-400/50"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.8, 1, 0.8]
                }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <div className="absolute inset-0 bg-blue-400 rounded-sm animate-ping opacity-20" />
            </div>

            {/* Orbital Particle (IoT Link) */}
            <motion.div 
              className="absolute w-1.5 h-1.5 bg-white rounded-full blur-[1px] opacity-0 group-hover:opacity-100 transition-opacity"
              animate={{ 
                offsetPath: "M 20 6 A 14 14 0 1 1 20 34 A 14 14 0 1 1 20 6",
                offsetDistance: ["0%", "100%"]
              }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="flex flex-col tracking-widest">
            <span className="text-xl font-black text-white uppercase italic group-hover:text-blue-50 transition-colors">
              My-P<span className="text-blue-500 group-hover:text-blue-400 font-mono">0</span>rtf<span className="text-blue-500 group-hover:text-blue-400 font-mono">0</span>l<span className="text-blue-500 group-hover:text-blue-400 font-mono">1</span>o
            </span>
            <div className="flex items-center gap-1.5">
              <div className="h-[2px] w-4 bg-blue-500/50 rounded-full" />
              <span className="text-[9px] font-mono font-bold text-gray-500 uppercase group-hover:text-blue-400 transition-colors">
                Version <span className="text-blue-500">1</span>.<span className="text-blue-500">0</span>
              </span>
            </div>
          </div>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-widest text-gray-400 hover:text-blue-400 transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 transition-all group-hover:w-full" />
            </a>
          ))}
          
          {/* Language Switcher */}
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 hover:border-blue-500/30 transition-all text-[10px] font-mono font-black text-gray-400 hover:text-white"
          >
              <Globe size={12} className="text-blue-400" />
              <span>{language.toUpperCase()}</span>
          </button>
        </div>

        {/* Mobile Toggle & Lang */}
        <div className="md:hidden flex items-center gap-4">
             <button 
                onClick={toggleLanguage}
                className="flex items-center gap-1 px-2 py-1 rounded-md bg-white/5 border border-white/10 text-[10px] font-bold text-gray-400"
            >
                {language.toUpperCase()}
            </button>

            <button
              className="p-2 rounded-lg bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10 transition-all"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-16 left-0 w-full bg-slate-900 border-b border-white/10 md:hidden flex flex-col items-center py-8 gap-6 shadow-2xl overflow-hidden backdrop-blur-xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-black uppercase tracking-[0.2em] text-gray-400 hover:text-blue-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;