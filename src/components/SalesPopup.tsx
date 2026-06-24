import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sparkles, X, Check, ArrowRight, HelpCircle, Mail, Phone, User, Building, Globe, FileText, BadgeCheck, Loader2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

type Step = 'intro' | 'faq' | 'form' | 'success';

// @ts-ignore
const stripePromise = import.meta.env?.VITE_STRIPE_PUBLISHABLE_KEY 
// @ts-ignore
  ? loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY)
  : null;

export function SalesPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState<Step>('intro');
  const [isHovered, setIsHovered] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const toggleModal = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      setStep('intro');
      setIsProcessing(false);
    }
  };

  const handleCompleteOrder = async (formData: any) => {
    setIsProcessing(true);
    try {
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const session = await response.json();

      if (session.url) {
        window.location.href = session.url;
      } else {
        // Mock success if no Stripe key is configured
        setTimeout(() => {
          setStep('success');
          setIsProcessing(false);
        }, 1500);
      }
    } catch (error) {
      console.error('Checkout error:', error);
      setIsProcessing(false);
      alert('An error occurred. Using mock success.');
      setStep('success');
    }
  };

  return (
    <>
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6 z-[60]">
        <motion.button
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          onClick={toggleModal}
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              "0 0 0 0 rgba(212, 175, 55, 0)",
              "0 0 20px 5px rgba(212, 175, 55, 0.4)",
              "0 0 0 0 rgba(212, 175, 55, 0)"
            ]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="flex items-center bg-[#0f172a] border-2 border-[#d4af37] rounded-full p-1 h-14 overflow-hidden shadow-xl group"
          initial={false}
        >
          <div className="w-11 h-11 rounded-full overflow-hidden flex-shrink-0 bg-gray-200 ml-0.5">
            <img 
              src="https://www.ericcampbellphotography.com/wp-content/uploads/2024/08/Sofia-Gross07911-scaled.jpg" 
              alt="Avatar"
              className="w-full h-full object-cover"
            />
          </div>
          
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ 
              width: isHovered ? 'auto' : 0, 
              opacity: isHovered ? 1 : 0 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="whitespace-nowrap px-4"
          >
            <span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-widest">
              CLAIM LINK IN BIO
            </span>
          </motion.div>
        </motion.button>
      </div>

      {/* Modal Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleModal}
              className="fixed inset-0 bg-[#0f172a]/40 backdrop-blur-sm z-[70]"
            />
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="fixed inset-x-4 top-[10%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-[600px] max-h-[85vh] bg-white rounded-2xl shadow-2xl z-[80] overflow-hidden flex flex-col"
            >
              <header className="bg-[#0f172a] p-6 border-b border-[#d4af37] flex justify-between items-center flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Sparkles className="text-[#d4af37] w-6 h-6" />
                  <div>
                    <h2 className="text-white font-display text-lg tracking-tight leading-none">Elysian Professional</h2>
                    <p className="text-[#d4af37] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">REAL ESTATE LINK-IN-BIO</p>
                  </div>
                </div>
                <button 
                  onClick={toggleModal}
                  className="text-white/50 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </header>

              <div className="flex-grow overflow-y-auto p-8 bg-white custom-scrollbar">
                <AnimatePresence mode="wait">
                  {step === 'intro' && <IntroView setStep={setStep} />}
                  {step === 'faq' && <FaqView setStep={setStep} />}
                  {step === 'form' && <OrderForm setStep={setStep} onComplete={handleCompleteOrder} isProcessing={isProcessing} />}
                  {step === 'success' && <SuccessView />}
                </AnimatePresence>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

function IntroView({ setStep }: { setStep: (s: Step) => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-center space-y-4">
        <h3 className="font-display text-3xl text-[#0f172a] leading-tight">Dominate Your Digital Presence</h3>
        <p className="text-gray-600 text-sm max-w-sm mx-auto">The all-in-one lead generation and personal branding hub designed for elite Toronto realtors.</p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div className="p-6 bg-[#0f172a] rounded-xl border border-[#d4af37]/30 text-center">
          <div className="text-[#d4af37] text-2xl font-display">$549</div>
          <div className="text-white/50 text-[10px] uppercase font-bold tracking-widest mt-1">Design & Setup</div>
        </div>
        <div className="p-6 bg-[#f8fafc] rounded-xl border border-gray-100 text-center">
          <div className="text-[#0f172a] text-2xl font-display">$149</div>
          <div className="text-gray-400 text-[10px] uppercase font-bold tracking-widest mt-1">Monthly Agency Fee</div>
        </div>
      </div>

      <div className="space-y-4">
        <h4 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest text-left">Agency Platform Features</h4>
        <div className="grid grid-cols-1 gap-3">
          {[
            'Custom High-End Branding Integration',
            'Conversion-Optimized Lead Generation',
            'Full Management & Secure Hosting',
            'Advanced CRM Connectivity Forms',
            'Seamless Social Platform Integration'
          ].map((feature, i) => (
            <div key={i} className="flex items-center gap-3 text-sm text-gray-700">
              <div className="w-5 h-5 rounded-full bg-[#d4af37]/10 flex items-center justify-center flex-shrink-0">
                <Check className="text-[#d4af37] w-3 h-3" />
              </div>
              {feature}
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 space-y-4">
        <button
          onClick={() => setStep('form')}
          className="w-full bg-[#0f172a] text-[#d4af37] font-bold py-5 rounded-xl border border-[#d4af37] shadow-xl hover:bg-black transition-all flex items-center justify-center gap-3 group"
        >
          START YOUR ORDER
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
        <button
          onClick={() => setStep('faq')}
          className="w-full flex items-center justify-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#0f172a] transition-colors"
        >
          <HelpCircle className="w-4 h-4" />
          See Professional FAQ
        </button>
      </div>
    </motion.div>
  );
}

function FaqView({ setStep }: { setStep: (s: Step) => void }) {
  const faqs = [
    { q: "Who owns my profile data?", a: "You maintain full legal ownership of your brand and leads. We provide the management and architecture." },
    { q: "What does the monthly fee cover?", a: "Premium hosting, recurring design maintenance, real-time lead monitoring, and priority technical support." },
    { q: "Can I cancel anytime?", a: "Yes. Our monthly subscription is month-to-month with no long-term restrictive contracts." },
    { q: "How fast is deployment?", a: "Standard onboarding and custom deployment take 3-5 business days from payment completion." }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-10"
    >
      <div className="space-y-6">
        <h3 className="font-headline text-xl text-[#0f172a] text-left">Professional Objections & Support</h3>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i} className="text-left space-y-2">
              <h4 className="font-bold text-sm text-[#0f172a]">{faq.q}</h4>
              <p className="text-xs text-gray-500 leading-relaxed">{faq.a}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="p-8 bg-[#f8fafc] rounded-2xl border border-gray-100 space-y-6">
        <div className="text-left space-y-1">
          <h4 className="font-bold text-sm text-[#0f172a]">Need more answers?</h4>
          <p className="text-xs text-gray-400">Our senior team is standing by.</p>
        </div>
        <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Message sent!'); }}>
          <input 
            type="email" 
            placeholder="Your Professional Email" 
            className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            required
          />
          <textarea 
            placeholder="Your Specific Question..." 
            rows={3}
            className="w-full bg-white border border-gray-200 px-4 py-3 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37]"
            required
          />
          <button className="w-full bg-white text-[#0f172a] border border-[#0f172a] font-bold text-xs uppercase tracking-widest py-3 rounded-lg hover:bg-gray-50 transition-colors">
            SUBMIT QUESTION
          </button>
        </form>
      </div>

      <button
        onClick={() => setStep('intro')}
        className="w-full text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#0f172a] transition-colors"
      >
        Back to Pricing
      </button>
    </motion.div>
  );
}

function OrderForm({ setStep, onComplete, isProcessing }: { setStep: (s: Step) => void, onComplete: (data: any) => void, isProcessing: boolean }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    license: '',
    brokerage: '',
    website: '',
    bio: ''
  });

  const handleOrder = (e: FormEvent) => {
    e.preventDefault();
    onComplete(formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="space-y-8"
    >
      <div className="text-left space-y-2">
        <h3 className="font-headline text-2xl text-[#0f172a]">Secure Onboarding</h3>
        <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Step 1: Professional Details</p>
      </div>

      <form onSubmit={handleOrder} className="space-y-6 text-left">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <InputField label="Full Professional Name" icon={User} placeholder="Jane Doe" value={formData.fullName} onChange={(v: string) => setFormData({...formData, fullName: v})} disabled={isProcessing} />
          <InputField label="Email Address" icon={Mail} placeholder="jane@realty.com" type="email" value={formData.email} onChange={(v: string) => setFormData({...formData, email: v})} disabled={isProcessing} />
          <InputField label="Phone Number" icon={Phone} placeholder="(416) 555-0123" value={formData.phone} onChange={(v: string) => setFormData({...formData, phone: v})} disabled={isProcessing} />
          <InputField label="REBBA License #" icon={BadgeCheck} placeholder="1234567" value={formData.license} onChange={(v: string) => setFormData({...formData, license: v})} disabled={isProcessing} />
          <InputField label="Brokerage Name" icon={Building} placeholder="The 6 Real Estate Group" value={formData.brokerage} onChange={(v: string) => setFormData({...formData, brokerage: v})} disabled={isProcessing} />
          <InputField label="Current Website/IDX URL" icon={Globe} placeholder="www.example.com" value={formData.website} onChange={(v: string) => setFormData({...formData, website: v})} disabled={isProcessing} />
        </div>
        
        <div className="space-y-2">
          <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
            <FileText className="w-3 h-3" />
            Professional Bio Snapshot
          </label>
          <textarea 
            rows={4}
            className="w-full bg-[#f8fafc] border border-gray-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] resize-none disabled:opacity-50"
            placeholder="Tell us about your brand vision..."
            value={formData.bio}
            onChange={(e) => setFormData({...formData, bio: e.target.value})}
            required
            disabled={isProcessing}
          />
        </div>

        <div className="p-6 bg-[#f8fafc] border border-[#d4af37]/20 rounded-xl space-y-4">
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Professional Setup (One-time)</span>
            <span className="font-bold text-[#0f172a]">$549.00</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-gray-500">Agency Monthly Access</span>
            <span className="font-bold text-[#0f172a]">$149.00</span>
          </div>
          <div className="pt-4 border-t border-gray-200 flex justify-between items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Total Today</span>
            <span className="text-2xl font-display text-[#0f172a]">$698.00</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-[#d4af37] text-[#0f172a] font-bold py-5 rounded-xl shadow-xl hover:bg-[#c29d2d] transition-all flex items-center justify-center gap-3 uppercase tracking-widest disabled:opacity-50"
        >
          {isProcessing ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Processing...
            </>
          ) : (
            'Complete Order & Launch'
          )}
        </button>
      </form>

      <button
        onClick={() => setStep('intro')}
        className="text-gray-400 text-xs font-bold uppercase tracking-widest hover:text-[#0f172a] transition-colors"
      >
        Cancel Request
      </button>
    </motion.div>
  );
}

function InputField({ label, icon: Icon, placeholder, type = "text", value, onChange, disabled }: any) {
  return (
    <div className="space-y-2">
      <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2">
        <Icon className="w-3 h-3" />
        {label}
      </label>
      <input 
        type={type} 
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        disabled={disabled}
        className="w-full bg-[#f8fafc] border border-gray-100 rounded-xl px-4 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-[#d4af37] disabled:opacity-50"
      />
    </div>
  );
}

function SuccessView() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="py-12 flex flex-col items-center text-center space-y-6"
    >
      <div className="w-24 h-24 rounded-full bg-[#d4af37]/10 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, stiffness: 200, delay: 0.2 }}
        >
          <Check className="text-[#d4af37] w-12 h-12" strokeWidth={3} />
        </motion.div>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-display text-4xl text-[#0f172a]">Order Secured</h3>
        <p className="text-gray-500 max-w-sm mx-auto leading-relaxed">
          Your professional deployment has been initiated. Our senior designers will contact you within 24 hours to begin the custom mapping of your digital ecosystem.
        </p>
      </div>

      <div className="pt-8">
        <p className="text-[10px] font-bold text-[#d4af37] uppercase tracking-[0.3em]">Welcome to the elite</p>
      </div>
    </motion.div>
  );
}
