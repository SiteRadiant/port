import { useEffect } from 'react';
// App.css import removed; styles are inlined in public/index.html for development.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
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
        title="Website Development & AI Automation"
        description="SiteRadiant is a premier agency building SEO-ready websites, robust e-commerce platforms, intelligent AI systems, and custom automation workflows for scaling businesses."
        path="/"
        schema={[
          {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'SiteRadiant',
            url: window.location.origin,
            logo: `${window.location.origin}/logo192.png`,
            sameAs: [],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: 'SiteRadiant',
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
      <main id="main-content">
        <Hero />
        <LogoCarousel />
        <Services />
        <Stats />
        <Industries />
        <Process />
        <Testimonials />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:p-4 focus:bg-red-600 focus:text-white focus:z-[9999]">
        Skip to main content
      </a>
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
      <Analytics />
      <Toaster />
    </div>
  );
}

export default App;
