import { useEffect } from 'react';
// App.css import removed; styles are inlined in public/index.html for development.
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from "@vercel/speed-insights/react";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LogoCarousel from './components/LogoCarousel';
import Services from './components/Services';
import Stats from './components/Stats';
import Industries from './components/Industries';
import Process from './components/Process';
import FeaturedWork from './components/FeaturedWork';
import CTA from './components/CTA';
import Footer from './components/Footer';
import SEO from './components/SEO';
import FAB from './components/FAB';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import FAQ from './pages/FAQ';
import NotFound from './pages/NotFound';
import Toaster from "./components/ui/toaster";
import { UIProvider } from './context/UIContext';
import WebsiteDev from './pages/services/websitedevelopment';
import LandingPageDev from './pages/services/landingpagedevelopment';
import EcommerceDev from './pages/services/ecommercedevelopment';
import LmsDev from './pages/services/lmsdevelopment';
import WebAppDev from './pages/services/webappdevelopment';
import WebCostArticle from './pages/articles/websitecostindia';
import WebVsLandingArticle from './pages/articles/websitevslandingpage';
import SeoFriendlyWebsite from './pages/articles/seofriendlywebsite';

const Home = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      <SEO
        title="Website Development & E-commerce Solutions"
        description="SiteRadiant is a premier agency building SEO-ready websites, robust e-commerce platforms, and custom software for scaling businesses."
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
          }
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
        <FeaturedWork />
        <CTA />
      </main>
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
            <Route path="/contact" element={<Home />} />
            <Route path="/website-development" element={<WebsiteDev />} />
            <Route path="/landing-page-development" element={<LandingPageDev />} />
            <Route path="/ecommerce-development" element={<EcommerceDev />} />
            <Route path="/web-application-development" element={<WebAppDev />} />
            <Route path="/lms-development" element={<LmsDev />} />
            <Route path="/website-cost-india" element={<WebCostArticle />} />
            <Route path="/website-vs-landing-page" element={<WebVsLandingArticle />} />
            <Route path="/seo-friendly-website" element={<SeoFriendlyWebsite />} />

            <Route path="/services" element={<ServicesPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <FAB />
        </UIProvider>
      </BrowserRouter>
      <Analytics />
      <SpeedInsights />
      <Toaster />
    </div>
  );
}

export default App;
