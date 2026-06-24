import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, User, Mail, MessageSquare, CheckCircle2, Loader2 } from 'lucide-react';

export function ContactMe() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-12 bg-deep-charcoal text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/3 w-[600px] h-[600px] bg-toronto-blue/5 rounded-full blur-[120px]" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-8 text-left">
            <div className="space-y-4">
              <span className="text-[10px] font-bold uppercase tracking-[0.4em] text-toronto-blue">Inquiries & Consultations</span>
              <h2 className="font-display text-4xl md:text-6xl text-white uppercase leading-tight">
                Let's Discuss <br /> Your Next Move
              </h2>
              <div className="h-1.5 w-24 bg-toronto-blue" />
            </div>
            
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              Whether you're looking for a luxury lease, your first home, or a strategic investment, I'm here to provide professional guidance.
            </p>

            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-toronto-blue transition-colors">
                  <Mail className="w-5 h-5 text-toronto-blue" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Email Me</p>
                  <p className="text-white font-headline">shameer@torontorealestate.com</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-toronto-blue transition-colors">
                  <MessageSquare className="w-5 h-5 text-toronto-blue" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Office</p>
                  <p className="text-white font-headline">Toronto, Ontario</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <AnimatePresence mode="wait">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white p-12 rounded-2xl shadow-2xl text-center space-y-6"
                >
                  <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10 text-green-500" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-display text-deep-charcoal">Message Sent</h3>
                    <p className="text-gray-500">Thank you for reaching out. I will get back to you within 24 hours.</p>
                  </div>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="text-toronto-blue font-bold text-sm uppercase tracking-widest hover:underline"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-2xl shadow-2xl"
                >
                  <form onSubmit={handleSubmit} className="space-y-6 text-left">
                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                        <User className="w-3 h-3" />
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-toronto-blue transition-colors text-white placeholder:text-gray-600"
                        placeholder="Jane Doe"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                        <Mail className="w-3 h-3" />
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-toronto-blue transition-colors text-white placeholder:text-gray-600"
                        placeholder="jane@example.com"
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-[10px] font-bold uppercase tracking-widest text-gray-500 flex items-center gap-2">
                        <MessageSquare className="w-3 h-3" />
                        How can I help?
                      </label>
                      <textarea 
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        className="w-full bg-white/5 border border-white/10 rounded-xl py-4 px-5 focus:outline-none focus:border-toronto-blue transition-colors text-white placeholder:text-gray-600 resize-none"
                        placeholder="I'm interested in viewing a property..."
                        required
                        disabled={isSubmitting}
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-toronto-blue text-white font-bold py-5 rounded-xl shadow-xl hover:bg-blue-600 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
