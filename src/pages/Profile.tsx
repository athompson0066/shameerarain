import { motion } from 'motion/react';
import { User, Calendar, Star, ExternalLink, Award } from 'lucide-react';

export function Profile() {
  return (
    <div className="flex flex-col pt-16">
      {/* Editorial Intro */}
      <section className="bg-white py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2"
          >
            <div className="relative inline-block mb-8">
              <span className="text-xs font-bold text-toronto-blue uppercase tracking-[0.2em] mb-2 block">The Face of Toronto Real Estate</span>
              <h1 className="font-display text-4xl md:text-6xl text-deep-charcoal uppercase leading-tight mb-6">
                Shameer Arain
              </h1>
              <div className="h-1 w-24 bg-toronto-blue" />
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              With over two decades of immersion in the Greater Toronto Area's real estate market, Shameer Arain has established himself as a definitive authority on urban luxury and architectural excellence. His approach transcends mere transactions; it's about curated lifestyles and strategic wealth building in the world's most dynamic metropolis.
            </p>

            <div className="grid grid-cols-2 gap-8 mb-12">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-toronto-blue">
                  <Award className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-widest">Top Tier</span>
                </div>
                <p className="text-xs text-gray-400">Consistent multi-million dollar producer in the GTA.</p>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-toronto-blue">
                  <User className="w-5 h-5" />
                  <span className="font-bold text-sm uppercase tracking-widest">Client First</span>
                </div>
                <p className="text-xs text-gray-400">98% referral-based business built on integrity.</p>
              </div>
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-deep-charcoal text-white px-10 py-5 rounded-xl font-headline text-lg hover:bg-toronto-blue transition-all shadow-lg flex items-center gap-3"
            >
              REQUEST A CONSULTATION
              <Calendar className="w-5 h-5" />
            </motion.button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src="https://photos.zillowstatic.com/fp/1125d2d5766ee9a8ea644122437bd541-h_l.jpg" 
                alt="Shameer Arain Professional Portrait" 
                className="w-full h-[600px] object-cover"
              />
            </div>
            {/* Design Accents */}
            <div className="absolute -top-6 -right-6 w-48 h-48 bg-toronto-blue/5 rounded-full z-0 blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-toronto-blue/5 rounded-full z-0 blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* Zillow Iframe Wrapper */}
      <section className="bg-cool-gray py-24 px-4 md:px-12 border-t border-gray-100">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="flex justify-center gap-1 mb-4">
              {[1,2,3,4,5].map(s => <Star key={s} className="w-5 h-5 fill-toronto-blue text-toronto-blue" />)}
            </div>
            <h2 className="font-display text-3xl md:text-5xl text-deep-charcoal uppercase">Verified Excellence</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transparency is the bedrock of our business. Explore our verified client reviews and active rankings on Zillow's premier agent platform.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-200 h-[800px] relative">
            <iframe 
              src="https://www.zillow.com/profile/Shameer%20Arain" 
              className="w-full h-full border-none"
              title="Shameer Arain Zillow Profile"
              referrerPolicy="no-referrer"
            />
            
            {/* Overlay link in case of iframe restrictions */}
            <div className="absolute bottom-8 right-8">
              <a 
                href="https://www.zillow.com/profile/Shameer%20Arain" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white/90 backdrop-blur px-6 py-3 rounded-full text-deep-charcoal font-bold text-sm shadow-xl flex items-center gap-2 border border-gray-100 hover:bg-toronto-blue hover:text-white transition-all transform hover:scale-105"
              >
                OPEN ON ZILLOW
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
