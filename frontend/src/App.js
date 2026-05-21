import { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import Services from './components/Services';
import Stats from './components/Stats';
import Industries from './components/Industries';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ServicesPage from './pages/ServicesPage';
import { Toaster } from './components/ui/toaster';
import { UIProvider } from './context/UIContext';

const Home = () => {
  useEffect(() => { document.title = 'Site Radiant — IT Consulting & Software Development'; }, []);
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <LogoCarousel />
      <Services />
      <Stats />
      <Industries />
      <Process />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <UIProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </UIProvider>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
