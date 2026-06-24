import { motion } from 'motion/react';
import { ExternalLink, Home, MapPin, Sparkles } from 'lucide-react';

export function Listings() {
  return (
    <div className="flex flex-col pt-16">
      {/* Intro Section */}
      <section className="bg-white py-24 px-4 md:px-12">
        <div className="max-w-7xl mx-auto text-left">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-2 mb-6"
          >
            <Sparkles className="text-toronto-blue w-6 h-6" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">Curated Toronto Real Estate</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-display text-4xl md:text-6xl text-deep-charcoal mb-8 leading-tight uppercase"
          >
            Elite Properties <br /> In The 6
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-gray-600 max-w-3xl leading-relaxed mb-12"
          >
            Experience the pinnacle of Toronto living. Shameer Arain provides exclusive access to the city's most sought-after residences, from high-altitude luxury in the Financial District to the historic elegance of the Annex. Our curated portfolio reflects the unique character and sophisticated energy of the GTA.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {[
                { icon: Home, title: "Luxury Residences", desc: "Hand-picked penthouses and custom-built estates that define modern elegance." },
                { icon: MapPin, title: "Premier Locations", desc: "Expert guidance in Toronto's most prestigious and emerging neighborhoods." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 bg-cool-gray rounded-lg flex items-center justify-center">
                    <item.icon className="text-toronto-blue w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-headline text-lg mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl relative group">
              <img 
                src="/src/assets/images/modern_condo_interior_1781642407255.jpg" 
                alt="Toronto Luxury Interior"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-charcoal/60 to-transparent flex items-end p-8">
                <span className="text-white font-headline text-lg italic">"Market knowledge that moves you."</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section / External Link */}
      <section className="bg-cool-gray py-24 px-4 md:px-12 border-y border-gray-200">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="space-y-4">
            <h2 className="font-display text-3xl md:text-5xl text-deep-charcoal uppercase">Explore Full Inventory</h2>
            <p className="text-lg text-gray-600 mx-auto max-w-2xl">
              Our complete database of active and pocket listings is available on our main portal. Connect with the full spectrum of Toronto real estate.
            </p>
          </div>

          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block"
          >
            <a 
              href="https://the6realtor.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-toronto-blue text-white px-12 py-6 rounded-xl font-headline text-xl shadow-xl flex items-center gap-4 hover:bg-deep-charcoal transition-all group"
            >
              VISIT THE6REALTOR.COM
              <ExternalLink className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </motion.div>

          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            * Complete property data updated in real-time via MLS® integration
          </p>
        </div>
      </section>
    </div>
  );
}
