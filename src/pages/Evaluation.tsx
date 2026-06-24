import { motion } from 'motion/react';
import { ShieldCheck, Lock, Clock, TrendingUp, BarChart3, Calculator, CheckCircle2 } from 'lucide-react';

export function Evaluation() {
  return (
    <div className="flex flex-col pt-16">
      {/* Hero Section with Form */}
      <section className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-deep-charcoal">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            alt="Toronto Skyline" 
            className="w-full h-full object-cover" 
            src="/src/assets/images/toronto_skyline_modern_1781642385032.jpg" 
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-12 w-full grid md:grid-cols-12 gap-12 items-center">
          {/* Content side */}
          <div className="md:col-span-12 lg:col-span-7 text-white text-left">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="inline-flex items-center gap-2 bg-toronto-blue text-white px-4 py-1 mb-6 rounded-full"
            >
              <ShieldCheck className="w-4 h-4" />
              <span className="text-[10px] font-bold tracking-widest uppercase">Guaranteed Sold System</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-4xl md:text-6xl mb-6 leading-none uppercase"
            >
              What Is Your Toronto <br className="hidden lg:block" /> Home Worth?
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-400 max-w-xl mb-12"
            >
              Receive a precision market analysis from Shameer Arain within 24 hours. No obligation. Based on real-time MLS® data and urban market trends.
            </motion.p>

            <div className="flex flex-wrap gap-12 items-center">
              <div className="flex items-center gap-4">
                <Lock className="text-toronto-blue w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm font-bold">Strictly Confidential</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Professional Analysis</div>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="text-toronto-blue w-8 h-8" />
                <div className="text-left">
                  <div className="text-sm font-bold">24-Hour</div>
                  <div className="text-[10px] text-gray-500 uppercase tracking-widest">Analysis Turnaround</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="md:col-span-12 lg:col-span-5"
          >
            <div className="bg-white p-8 md:p-10 shadow-2xl rounded-xl">
              <div className="mb-8 border-l-4 border-toronto-blue pl-4 text-left">
                <h3 className="font-headline text-2xl text-deep-charcoal">Free Valuation</h3>
                <p className="text-[10px] font-bold text-gray-500 uppercase tracking-wider">Step 1 of 1: Property Details</p>
              </div>

              <form className="space-y-6 text-left" onSubmit={(e) => { e.preventDefault(); alert("Analysis request sent!"); }}>
                <div className="space-y-4">
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Full Name</label>
                    <input 
                      type="text" 
                      placeholder="John Doe"
                      className="w-full bg-cool-gray border-b-2 border-transparent focus:border-toronto-blue focus:outline-none px-4 py-3 text-sm transition-all rounded-t-lg"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email Address</label>
                    <input 
                      type="email" 
                      placeholder="john@example.com"
                      className="w-full bg-cool-gray border-b-2 border-transparent focus:border-toronto-blue focus:outline-none px-4 py-3 text-sm transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Property Address</label>
                    <input 
                      type="text" 
                      placeholder="e.g. 123 Toronto St"
                      className="w-full bg-cool-gray border-b-2 border-transparent focus:border-toronto-blue focus:outline-none px-4 py-3 text-sm transition-all"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Property Type</label>
                      <select className="w-full bg-cool-gray border-b-2 border-transparent focus:border-toronto-blue focus:outline-none px-4 py-3 text-xs transition-all appearance-none cursor-pointer">
                        <option>Detached</option>
                        <option>Condo</option>
                        <option>Townhouse</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Timeline</label>
                      <select className="w-full bg-cool-gray border-b-2 border-transparent focus:border-toronto-blue focus:outline-none px-4 py-3 text-xs transition-all appearance-none cursor-pointer">
                        <option>Immediately</option>
                        <option>3-6 Months</option>
                        <option>Just Curious</option>
                      </select>
                    </div>
                  </div>
                </div>

                <motion.button 
                  whileHover={{ backgroundColor: '#060607' }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-toronto-blue text-white font-headline text-lg py-5 transition-all flex items-center justify-center gap-3 rounded-lg shadow-xl"
                  type="submit"
                >
                  REQUEST MY EVALUATION
                  <TrendingUp className="w-5 h-5" />
                </motion.button>
                
                <p className="text-center text-[10px] text-gray-400 font-bold tracking-widest uppercase flex items-center justify-center gap-2">
                  <Lock className="w-3 h-3" />
                  Your Information is 100% Private & Secure
                </p>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="bg-white py-20 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-12 text-center">
          <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-12">Trusted by Toronto Homeowners</h3>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24">
            {[
              { val: '98%', label: 'List-to-Sale Ratio' },
              { val: '14', label: 'Avg Days on Market' },
              { val: '500+', label: 'Homes Sold' }
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center opacity-70">
                <span className="font-display text-4xl text-deep-charcoal">{stat.val}</span>
                <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 bg-cool-gray">
        <div className="max-w-7xl mx-auto px-4 md:px-12">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: BarChart3, title: 'Hyper-Local Insight', desc: "We don't just use city averages. We analyze specific street-level data in your neighborhood to ensure accuracy." },
              { icon: Calculator, title: 'Manual Valuation', desc: "Unlike automated estimators, Shameer manually reviews your property's unique features and upgrades." },
              { icon: CheckCircle2, title: 'Home Selling System', desc: 'Access the "Guaranteed Sold" system that leverages high-impact marketing to maximize your equity.' }
            ].map((feature, i) => (
              <div key={i} className="p-8 bg-white border border-gray-100 rounded-xl hover:border-toronto-blue transition-colors group text-left">
                <feature.icon className="text-toronto-blue w-10 h-10 mb-6 group-hover:scale-110 transition-transform" />
                <h4 className="font-headline text-xl mb-4">{feature.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
