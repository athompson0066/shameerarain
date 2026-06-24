import { useState, FormEvent, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Calculator, Calendar, Lock, Send, User, Mail, Home as HomeIcon, Download, Sparkles, Star } from 'lucide-react';
import { TestimonialCarousel } from '../components/TestimonialCarousel';
import { ContactMe } from '../components/ContactMe';
import type { Page } from '../types';

export function Home({ setPage }: { setPage: (page: Page) => void }) {
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [showInstallBtn, setShowInstallBtn] = useState(true);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setShowInstallBtn(true);
    };

    // Check if already installed
    if (window.matchMedia('(display-mode: standalone)').matches) {
      setShowInstallBtn(false);
    }

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === 'accepted') {
        setShowInstallBtn(false);
      }
      setDeferredPrompt(null);
    } else {
      // Fallback instructions for iOS or if prompt hasn't fired
      alert("To install this app:\n\nOn iOS: Tap the Share button and 'Add to Home Screen'.\nOn Android/Chrome: Tap the three dots menu and 'Install App'.");
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] pt-16 flex flex-col items-center justify-center bg-cool-gray overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-10 grayscale pointer-events-none">
          <img 
            alt="Toronto Skyline" 
            className="w-full h-full object-cover" 
            src="/src/assets/images/toronto_skyline_modern_1781642385032.jpg" 
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 flex flex-col items-center text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="relative mb-8"
          >
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white">
              <img 
                className="w-full h-full object-cover" 
                src="https://photos.zillowstatic.com/fp/1125d2d5766ee9a8ea644122437bd541-h_l.jpg" 
                alt="Shameer Arain"
              />
            </div>
            <div className="absolute -bottom-2 right-4 bg-toronto-blue text-white px-4 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shadow-lg">
              Specialist
            </div>
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-deep-charcoal mb-4 uppercase tracking-tighter"
          >
            Shameer Arain
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-headline text-lg md:text-2xl text-toronto-blue mb-6"
          >
            Toronto Real Estate Specialist
          </motion.p>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl text-lg text-gray-600 mb-12 leading-relaxed"
          >
            Elevating the Toronto real estate experience with data-driven insights, unwavering integrity, and an architectural eye. From luxury penthouses in Yorkville to first-time modern lofts in Liberty Village.
          </motion.p>

          {/* PWA Install Button */}
          <AnimatePresence>
            {showInstallBtn && (
              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleInstallClick}
                className="mb-8 bg-white border-2 border-toronto-blue text-toronto-blue px-6 py-3 rounded-full font-bold text-sm flex items-center gap-2 shadow-lg hover:bg-toronto-blue hover:text-white transition-all"
              >
                <Download className="w-4 h-4" />
                ADD TO HOME SCREEN
              </motion.button>
            )}
          </AnimatePresence>

          {/* Bento Hub */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <motion.button 
              onClick={() => setPage('LISTINGS')}
              whileHover={{ y: -4, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
              className="md:col-span-2 group relative overflow-hidden bg-deep-charcoal p-8 rounded-xl border border-gray-800 w-full"
            >
              <div className="flex justify-between items-center">
                <div className="text-left">
                  <span className="text-[10px] text-gray-500 uppercase tracking-widest block mb-2 font-bold">Live Listings</span>
                  <span className="font-display text-2xl md:text-4xl text-white leading-tight">SEARCH TORONTO PROPERTIES</span>
                </div>
                <Search className="text-white w-10 h-10 group-hover:scale-110 transition-transform" />
              </div>
            </motion.button>

            <motion.button 
              onClick={() => setPage('EVALUATION')}
              whileHover={{ y: -4 }}
              className="bg-white p-6 rounded-xl border border-gray-200 flex flex-col justify-between h-48 text-left w-full"
            >
              <Calculator className="text-toronto-blue w-8 h-8" />
              <div>
                <span className="text-[10px] text-gray-400 uppercase font-bold mb-1 block">Free Service</span>
                <span className="font-headline text-xl text-deep-charcoal">WHAT'S YOUR HOME WORTH?</span>
              </div>
            </motion.button>

            <motion.button 
              onClick={() => setPage('PROFILE')}
              whileHover={{ y: -4 }}
              className="bg-toronto-blue p-6 rounded-xl border border-blue-400 flex flex-col justify-between h-48 text-left group w-full"
            >
              <Sparkles className="text-white w-8 h-8 group-hover:rotate-12 transition-transform" />
              <div>
                <span className="text-[10px] text-white/60 uppercase font-bold mb-1 block">The Expert</span>
                <span className="font-headline text-xl text-white">MEET SHAMEER ARAIN</span>
              </div>
            </motion.button>

            <motion.button 
              onClick={() => setPage('CALCULATOR')}
              whileHover={{ y: -2 }}
              className="md:col-span-2 bg-cool-gray p-6 rounded-xl border border-gray-200 flex items-center justify-between w-full"
            >
              <div className="flex items-center gap-6">
                <Lock className="text-deep-charcoal w-6 h-6" />
                <span className="font-headline text-lg text-deep-charcoal uppercase">BROWSE POCKET LISTINGS</span>
              </div>
              <span className="text-xs text-toronto-blue font-bold tracking-widest uppercase">Exclusives</span>
            </motion.button>
          </div>
        </div>
      </section>

      {/* Neighborhood Spotlight */}
      <section className="py-24 px-4 md:px-12 bg-cool-gray/30">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Star className="w-5 h-5 fill-toronto-blue text-toronto-blue" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400">Verified Client Success</span>
            <Star className="w-5 h-5 fill-toronto-blue text-toronto-blue" />
          </div>
          <h2 className="font-display text-3xl md:text-5xl text-deep-charcoal uppercase mb-6">What My Clients Say</h2>
          <div className="h-1 w-20 bg-toronto-blue mx-auto" />
        </div>
        <TestimonialCarousel />
      </section>

      {/* Neighborhood Spotlight */}
      <section className="py-24 px-4 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-gray-200 shadow-lg group">
              <img 
                alt="Toronto Neighborhood" 
                className="w-full aspect-[16/9] object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/src/assets/images/toronto_skyline_modern_1781642385032.jpg"
              />
            </div>
            <div className="w-full md:w-1/2 text-left">
              <h3 className="font-display text-3xl md:text-4xl text-deep-charcoal mb-6 uppercase tracking-tight">The 6 Neighborhoods</h3>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Toronto is a city of neighborhoods. From the bustling Financial District to the historic charm of Distillery, Shameer provides hyper-local expertise to ensure you find the perfect pocket of the city to call home.
              </p>
              <div className="flex flex-wrap gap-2">
                {['KING WEST', 'YORKVILLE', 'THE ANNEX', 'LEASIDE'].map(tag => (
                  <span key={tag} className="bg-deep-charcoal text-white px-3 py-1 text-[10px] font-bold rounded shadow-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactMe />
    </div>
  );
}
