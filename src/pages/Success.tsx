import { motion } from 'motion/react';
import { Star, Quote, ArrowRight, User } from 'lucide-react';

export function Success() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Stats */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="text-center mb-16 space-y-4">
            <span className="text-sm font-bold text-toronto-blue uppercase tracking-[0.2em]">Toronto Real Estate Excellence</span>
            <h1 className="font-display text-4xl md:text-5xl text-deep-charcoal max-w-3xl mx-auto">Proven Results. Trusted in The 6.</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {[
              { val: '20+', label: 'Years Experience' },
              { val: '98%', label: 'Client Satisfaction' },
              { val: '80%', label: 'Referral Based' }
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 bg-cool-gray rounded-xl"
              >
                <div className="font-display text-5xl text-toronto-blue mb-2">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-widest text-gray-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SOLD Highlights */}
      <section className="py-24 bg-cool-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="mb-12 flex justify-between items-end">
            <div className="text-left">
              <h2 className="font-display text-3xl md:text-4xl text-deep-charcoal">SOLD Highlights</h2>
              <p className="text-gray-600 mt-2">A track record of excellence across the GTA.</p>
            </div>
            <button className="hidden md:flex items-center gap-2 text-toronto-blue font-bold text-sm tracking-widest uppercase">
              View Portfolio <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div 
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="aspect-[1.5] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/src/assets/images/luxury_toronto_mansion_1781642396695.jpg"
                  alt="Waterfront"
                />
              </div>
              <div className="p-8 text-left">
                <span className="inline-block px-3 py-1 bg-deep-charcoal text-white text-[10px] font-bold mb-4 uppercase">Sold Over Asking</span>
                <h3 className="font-headline text-2xl mb-2">The Waterfront Collection</h3>
                <p className="text-gray-600">Strategic marketing resulted in multiple offers within 48 hours of listing.</p>
              </div>
            </motion.div>

            <motion.div 
              whileHover={{ y: -8 }}
              className="group bg-white rounded-xl border border-gray-200 overflow-hidden shadow-sm"
            >
              <div className="aspect-[1.5] overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src="/src/assets/images/modern_condo_interior_1781642407255.jpg"
                  alt="Milton Estate"
                />
              </div>
              <div className="p-8 text-left">
                <span className="inline-block px-3 py-1 bg-toronto-blue text-white text-[10px] font-bold mb-4 uppercase">Success Story</span>
                <h3 className="font-headline text-2xl mb-2">Milton Luxury Estate</h3>
                <p className="text-gray-600">Guided a first-time luxury buyer through a competitive bidding process in the GTA.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <h2 className="font-display text-3xl md:text-4xl text-center mb-16 uppercase">Voices of Success</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 p-10 bg-cool-gray border border-gray-200 rounded-2xl text-left flex flex-col justify-between">
              <div>
                <Quote className="text-toronto-blue w-12 h-12 mb-6 opacity-20" />
                <p className="text-2xl italic font-headline leading-relaxed text-deep-charcoal">
                  "Shameer did an outstanding job guiding us through the complexities of the Toronto market. His negotiation skills are second to none, ensuring we got the best value possible."
                </p>
              </div>
              <div className="mt-8 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-toronto-blue/10 flex items-center justify-center">
                  <User className="text-toronto-blue w-6 h-6" />
                </div>
                <div>
                  <div className="font-bold text-sm">James & Elena R.</div>
                  <div className="text-[10px] text-gray-500 uppercase font-bold">Yorkville Homeowners</div>
                </div>
              </div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm text-left">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-toronto-blue text-toronto-blue" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Transparent, professional, and incredibly knowledgeable. The 6 Realtor team made selling our condo effortless."
              </p>
              <div className="font-bold text-sm">Sarah L.</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase">Liberty Village</div>
            </div>

            <div className="p-8 bg-white border border-gray-200 rounded-2xl shadow-sm text-left">
              <div className="flex gap-1 mb-4">
                {[1,2,3,4,5].map(s => <Star key={s} className="w-4 h-4 fill-toronto-blue text-toronto-blue" />)}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The best real estate experience we've ever had. Truly experts in GTA luxury properties."
              </p>
              <div className="font-bold text-sm">Marcus Thompson</div>
              <div className="text-[10px] text-gray-400 font-bold uppercase">Oakville Resident</div>
            </div>

            <div className="md:col-span-2 p-10 bg-deep-charcoal rounded-2xl text-white text-center md:text-left">
              <p className="text-2xl italic font-headline mb-6">
                "They don't just sell houses, they understand the Toronto lifestyle. Absolute masters of their craft."
              </p>
              <div className="font-bold text-toronto-blue uppercase tracking-widest text-xs">David Zhang — Investor</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-cool-gray border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="font-display text-3xl md:text-4xl text-deep-charcoal">Ready to reach your real estate goals?</h2>
            <p className="text-lg text-gray-600">Join the hundreds of families who have found their perfect home in The 6 with our proven strategy.</p>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-toronto-blue text-white px-10 py-5 rounded-lg font-headline text-lg hover:bg-deep-charcoal transition-all shadow-lg"
            >
              START YOUR SUCCESS STORY
            </motion.button>
          </div>
        </div>
      </section>
    </div>
  );
}
