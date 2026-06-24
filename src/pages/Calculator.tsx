import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Calculator as CalcIcon, Percent, DollarSign, Calendar, TrendingUp } from 'lucide-react';

export function Calculator() {
  const [activeTab, setActiveTab] = useState<'mortgage' | 'affordability'>('mortgage');

  return (
    <div className="flex flex-col pt-16">
      <section className="bg-white py-16 px-4 md:px-12 border-b border-gray-100">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-2 mb-6"
          >
            <CalcIcon className="text-toronto-blue w-6 h-6" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-gray-500">Financial Planning Suite</span>
          </motion.div>
          
          <h1 className="font-display text-4xl md:text-5xl text-deep-charcoal mb-6 uppercase tracking-tight">Real Estate Tools</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Plan your next move with confidence. Use our professional-grade calculators to estimate monthly payments or determine your buying power in the Toronto market.
          </p>
        </div>
      </section>

      <div className="bg-cool-gray py-12 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Tab Switcher */}
          <div className="flex bg-white p-1 rounded-xl shadow-sm mb-8 border border-gray-200">
            <button 
              onClick={() => setActiveTab('mortgage')}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'mortgage' ? 'bg-toronto-blue text-white' : 'text-gray-500 hover:text-deep-charcoal'}`}
            >
              Mortgage Calculator
            </button>
            <button 
              onClick={() => setActiveTab('affordability')}
              className={`flex-1 py-4 text-sm font-bold uppercase tracking-widest rounded-lg transition-all ${activeTab === 'affordability' ? 'bg-toronto-blue text-white' : 'text-gray-500 hover:text-deep-charcoal'}`}
            >
              Affordability
            </button>
          </div>

          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
          >
            {activeTab === 'mortgage' ? <MortgageForm /> : <AffordabilityForm />}
          </motion.div>
        </div>
      </div>
    </div>
  );
}

function MortgageForm() {
  const [price, setPrice] = useState(850000);
  const [downPayment, setDownPayment] = useState(170000);
  const [rate, setRate] = useState(4.5);
  const [term, setTerm] = useState(25);
  const [monthlyPayment, setMonthlyPayment] = useState(0);

  useEffect(() => {
    const p = price - downPayment;
    const r = (rate / 100) / 12;
    const n = term * 12;
    const payment = (p * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
    setMonthlyPayment(payment || 0);
  }, [price, downPayment, rate, term]);

  return (
    <div className="grid md:grid-cols-2">
      <div className="p-8 md:p-12 space-y-8 border-r border-gray-100">
        <div className="space-y-6">
          <InputGroup label="Home Price" value={price} onChange={setPrice} icon={DollarSign} />
          <InputGroup label="Down Payment" value={downPayment} onChange={setDownPayment} icon={DollarSign} />
          <InputGroup label="Interest Rate (%)" value={rate} onChange={(v) => setRate(v)} icon={Percent} step={0.1} />
          <InputGroup label="Amortization Period (Years)" value={term} onChange={setTerm} icon={Calendar} max={30} />
        </div>
      </div>
      <div className="bg-deep-charcoal p-8 md:p-12 text-white flex flex-col justify-center text-center">
        <span className="text-gray-400 uppercase text-xs font-bold tracking-widest mb-4">Estimated Monthly Payment</span>
        <div className="font-display text-5xl md:text-6xl text-toronto-blue mb-2">
          ${Math.round(monthlyPayment).toLocaleString()}
        </div>
        <p className="text-gray-500 text-xs">Principal and Interest only. Actual rates may vary based on credit and lender.</p>
        <div className="mt-12 pt-8 border-t border-gray-800 space-y-4 text-left">
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total Principal</span>
            <span>${(price - downPayment).toLocaleString()}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span className="text-gray-400">Total Payments</span>
            <span>${Math.round(monthlyPayment * term * 12).toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AffordabilityForm() {
  const [income, setIncome] = useState(120000);
  const [debts, setDebts] = useState(500);
  const [downPayment, setDownPayment] = useState(50000);
  const [maxPrice, setMaxPrice] = useState(0);

  useEffect(() => {
    // Basic Rule: 32% GDS ratio
    const monthlyIncome = income / 12;
    const monthlyAvailable = (monthlyIncome * 0.32) - debts;
    
    // Estimate mortgage amount based on 5% rate 25yr
    const r = 0.05 / 12;
    const n = 25 * 12;
    const mortgageAmount = monthlyAvailable * ((Math.pow(1 + r, n) - 1) / (r * Math.pow(1 + r, n)));
    
    setMaxPrice(Math.round(mortgageAmount + downPayment));
  }, [income, debts, downPayment]);

  return (
    <div className="grid md:grid-cols-2">
      <div className="p-8 md:p-12 space-y-8 border-r border-gray-100">
        <div className="space-y-6">
          <InputGroup label="Annual Gross Income" value={income} onChange={setIncome} icon={DollarSign} />
          <InputGroup label="Monthly Debts" value={debts} onChange={setDebts} icon={DollarSign} />
          <InputGroup label="Available Down Payment" value={downPayment} onChange={setDownPayment} icon={DollarSign} />
        </div>
      </div>
      <div className="bg-toronto-blue p-8 md:p-12 text-white flex flex-col justify-center text-center">
        <span className="text-blue-100 uppercase text-xs font-bold tracking-widest mb-4">Your Maximum Home Price</span>
        <div className="font-display text-5xl md:text-6xl text-white mb-2">
          ${Math.max(0, maxPrice).toLocaleString()}
        </div>
        <p className="text-blue-200 text-xs italic">Based on a 32% GDS ratio and current market estimates.</p>
        <div className="mt-8">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            className="h-1 bg-white/20 rounded-full overflow-hidden"
          >
            <div className="h-full bg-white w-3/4" />
          </motion.div>
          <div className="flex justify-between mt-2 text-[10px] uppercase font-bold tracking-widest">
            <span>Conservative</span>
            <span>Aggressive</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function InputGroup({ label, value, onChange, icon: Icon, step = 1, max = 10000000 }: any) {
  return (
    <div className="space-y-2 text-left">
      <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">{label}</label>
      <div className="relative">
        <Icon className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input 
          type="number" 
          value={value} 
          step={step}
          onChange={(e) => onChange(Number(e.target.value))}
          className="w-full bg-cool-gray pl-12 pr-4 py-4 rounded-xl font-bold text-deep-charcoal focus:ring-2 focus:ring-toronto-blue focus:outline-none focus:bg-white transition-all"
        />
      </div>
      <input 
        type="range" 
        min={0} 
        max={max === 30 ? 30 : (max === 10000000 ? 2000000 : max)} 
        value={value} 
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full h-1 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-toronto-blue mt-2"
      />
    </div>
  );
}
