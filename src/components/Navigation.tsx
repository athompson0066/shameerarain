import { Menu, UserCircle } from 'lucide-react';
import type { Page } from '../types';

interface NavbarProps {
  currentPage: Page;
  setPage: (page: Page) => void;
}

export function Navbar({ currentPage, setPage }: NavbarProps) {
  return (
    <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-4 md:px-12 h-16 bg-white border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Menu className="text-toronto-blue w-6 h-6 cursor-pointer" />
        <h1 
          className="font-headline text-xl md:text-2xl font-bold tracking-tight cursor-pointer"
          onClick={() => setPage('HOME')}
        >
          THE 6 REALTOR
        </h1>
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <button 
          onClick={() => setPage('HOME')}
          className={`font-inter text-sm font-semibold px-3 py-2 rounded transition-colors ${
            currentPage === 'HOME' ? 'text-toronto-blue' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          HOME
        </button>
        <button 
          onClick={() => setPage('SUCCESS')}
          className={`font-inter text-sm font-semibold px-3 py-2 rounded transition-colors ${
            currentPage === 'SUCCESS' ? 'text-toronto-blue' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          SUCCESS
        </button>
        <button 
          onClick={() => setPage('EVALUATION')}
          className={`font-inter text-sm font-semibold px-3 py-2 rounded transition-colors ${
            currentPage === 'EVALUATION' ? 'text-toronto-blue' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          EVALUATION
        </button>
        <button 
          onClick={() => setPage('PROFILE')}
          className={`font-inter text-sm font-semibold px-3 py-2 rounded transition-colors ${
            currentPage === 'PROFILE' ? 'text-toronto-blue' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          ABOUT
        </button>
        <button 
          onClick={() => setPage('LISTINGS')}
          className={`font-inter text-sm font-semibold px-3 py-2 rounded transition-colors ${
            currentPage === 'LISTINGS' ? 'text-toronto-blue' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          LISTINGS
        </button>
        <button 
          onClick={() => setPage('CALCULATOR')}
          className={`font-inter text-sm font-semibold px-3 py-2 rounded transition-colors ${
            currentPage === 'CALCULATOR' ? 'text-toronto-blue' : 'text-gray-500 hover:bg-gray-50'
          }`}
        >
          CALCULATOR
        </button>
      </div>

      <div className="flex items-center">
        <UserCircle className="text-toronto-blue w-8 h-8 cursor-pointer" />
      </div>
    </header>
  );
}

export function BottomNav({ currentPage, setPage }: NavbarProps) {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 bg-white border-t border-gray-200 shadow-lg">
      <button 
        onClick={() => setPage('HOME')}
        className={`flex flex-col items-center justify-center transition-colors ${
          currentPage === 'HOME' ? 'text-toronto-blue' : 'text-gray-400'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider">HOME</span>
      </button>
      <button 
        onClick={() => setPage('SUCCESS')}
        className={`flex flex-col items-center justify-center transition-colors ${
          currentPage === 'SUCCESS' ? 'text-toronto-blue' : 'text-gray-400'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider">SUCCESS</span>
      </button>
      <button 
        onClick={() => setPage('EVALUATION')}
        className={`flex flex-col items-center justify-center transition-colors ${
          currentPage === 'EVALUATION' ? 'text-toronto-blue' : 'text-gray-400'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider">EVALUATION</span>
      </button>
      <button 
        onClick={() => setPage('PROFILE')}
        className={`flex flex-col items-center justify-center transition-colors ${
          currentPage === 'PROFILE' ? 'text-toronto-blue' : 'text-gray-400'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider">MEET</span>
      </button>
      <button 
        onClick={() => setPage('LISTINGS')}
        className={`flex flex-col items-center justify-center transition-colors ${
          currentPage === 'LISTINGS' ? 'text-toronto-blue' : 'text-gray-400'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider">LISTINGS</span>
      </button>
      <button 
        onClick={() => setPage('CALCULATOR')}
        className={`flex flex-col items-center justify-center transition-colors ${
          currentPage === 'CALCULATOR' ? 'text-toronto-blue' : 'text-gray-400'
        }`}
      >
        <span className="text-xs font-bold uppercase tracking-wider">CALC</span>
      </button>
    </nav>
  );
}

export function Footer() {
  return (
    <footer className="bg-deep-charcoal text-white pt-16 pb-24 md:pb-16 px-4 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h4 className="font-headline text-xl mb-4">THE 6 REALTOR</h4>
            <p className="text-sm text-gray-400 leading-relaxed">
              Shameer Arain is a premier Toronto real estate professional specializing in the urban core and surrounding luxury neighborhoods.
            </p>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-sm text-gray-300 hover:text-toronto-blue transition-colors">Property Search</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-toronto-blue transition-colors">Market Analysis</a></li>
              <li><a href="#" className="text-sm text-gray-300 hover:text-toronto-blue transition-colors">Contact Shameer</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-gray-400">Profiles</h4>
            <div className="flex gap-6">
              <a href="#" className="text-sm uppercase font-semibold text-gray-300 hover:text-toronto-blue">Zillow</a>
              <a href="#" className="text-sm uppercase font-semibold text-gray-300 hover:text-toronto-blue">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-50">
          <span className="text-xs">© 2026 THE 6 REALTOR. All rights reserved.</span>
          <div className="h-6 w-24 bg-gray-500 opacity-20 rounded" />
        </div>
      </div>
    </footer>
  );
}
