import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';

export default function ServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Conversion-Focused Website Design",
    "provider": {
      "@type": "Organization",
      "name": "SiteRadiant",
      "url": "https://www.siteradiant.co.in"
    },
    "description": "Data-driven, conversion-focused website design services built to maximize leads and drive more sales."
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO title="Conversion-Focused Website Design | SiteRadiant" description="Data-driven, conversion-focused website design services built to maximize leads and drive more sales." path="/conversion-focused-web-design" schema={schema} />
      <Navbar />
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Conversion-Focused Website Design</h1>
        <p className="text-xl text-zinc-400 mb-12">Data-driven, conversion-focused website design services built to maximize leads and drive more sales.</p>
        
        <h2 className="text-2xl font-bold mb-4">What is Conversion-Focused Website Design?</h2>
        <p className="text-zinc-300 mb-8">We deliver premium website conversion optimization solutions tailored to your unique business logic. Generic templates often restrict your growth—we focus on scalability, performance, and conversion optimization to ensure your digital presence generates real ROI.</p>
        
        <h2 className="text-2xl font-bold mb-4">Core Benefits</h2>
        <ul className="list-disc pl-6 text-zinc-300 mb-8 space-y-2">
          <li>Bespoke design aligned with your exact brand identity.</li>
          <li>Optimized for speed and Core Web Vitals to improve organic SEO.</li>
          <li>Secure, scalable architecture built for future growth.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Why choose SiteRadiant?</h2>
        <p className="text-zinc-300 mb-12">We combine deep technical expertise with a strong understanding of user psychology and AEO (Answer Engine Optimization). Our systems are built to be easily crawled by search engines and AI bots alike, driving both visibility and conversions.</p>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
