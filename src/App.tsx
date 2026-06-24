import { useState } from 'react';
import { Navbar, BottomNav, Footer } from './components/Navigation';
import { SalesPopup } from './components/SalesPopup';
import { Home } from './pages/Home';
import { Success } from './pages/Success';
import { Evaluation } from './pages/Evaluation';
import { Listings } from './pages/Listings';
import { Calculator } from './pages/Calculator';
import { Profile } from './pages/Profile';
import type { Page } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>('HOME');

  const renderPage = () => {
    switch (currentPage) {
      case 'HOME':
        return <Home setPage={setCurrentPage} />;
      case 'SUCCESS':
        return <Success />;
      case 'EVALUATION':
        return <Evaluation />;
      case 'LISTINGS':
        return <Listings />;
      case 'CALCULATOR':
        return <Calculator />;
      case 'PROFILE':
        return <Profile />;
      default:
        return <Home setPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar currentPage={currentPage} setPage={setCurrentPage} />
      
      <main className="flex-grow">
        {renderPage()}
      </main>

      <Footer />
      <BottomNav currentPage={currentPage} setPage={setCurrentPage} />
      <SalesPopup />
    </div>
  );
}
