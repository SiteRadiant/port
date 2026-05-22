import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import LogoCarousel from '../components/LogoCarousel';
import Services from '../components/Services';
import Stats from '../components/Stats';
import Industries from '../components/Industries';
import Process from '../components/Process';
import Testimonials from '../components/Testimonials';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      <SEO
        title="Services — SiteRadiant"
        description="SiteRadiant builds SEO-ready websites, mobile apps, AI systems, and automation workflows for growing businesses."
        path="/services"
      />
      <Navbar />

      <header className="relative pt-28 pb-10">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <p className="text-sm tracking-widest uppercase text-zinc-500 mb-4">Services · Pricing · Strategy</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold">Services tailored for growth</h1>
          <p className="mt-4 text-zinc-400 text-lg max-w-2xl mx-auto">We design, build and scale products — web, mobile, AI and automation — with clear deliverables and pricing. Explore each service to see example plans.</p>
          <div className="mt-8 flex justify-center gap-3">
            <button onClick={() => window.scrollTo({ top: 800, behavior: 'smooth' })} className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded">View Services</button>
            <button onClick={() => window.location.href = '/contact'} className="px-4 py-2 border border-white/6 rounded text-zinc-200">Book Consultation</button>
          </div>
        </div>
      </header>

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
}
