import { useEffect } from 'react';
// App.css import removed; styles are inlined in public/index.html for development.
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
import SEO from './components/SEO';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import Toaster from "./components/ui/toaster";
import { UIProvider } from './context/UIContext';

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      <SEO
        title="IT Consulting, Software Development & AI Automation"
        description="Site Radiant builds SEO-ready websites, mobile apps, AI systems, and automation workflows for growing businesses."
        path="/"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'Site Radiant',
            url: window.location.origin,
            logo: `${window.location.origin}/logo192.png`,
            sameAs: [],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'Site Radiant',
            url: window.location.origin,
            potentialAction: {
              '@type': 'SearchAction',
              target: `${window.location.origin}/services`,
              'query-input': 'required name=search_term_string',
            },
          },
        ]}
      />
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
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </UIProvider>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
