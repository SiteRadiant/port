import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function WebsiteDevMumbai() {
  const schema = {
    "name": "Website Development Company in Mumbai",
    "description": "Premium website development services in Mumbai, Maharashtra. Fast, responsive, and SEO-optimized business websites.",
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": "Mumbai"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Website Development Company in Mumbai | SiteRadiant" 
        description="SiteRadiant is a leading website development company in Mumbai, India. We build high-performance business websites, e-commerce stores, and custom software." 
        path="/website-development-mumbai" 
      />
      <StructuredData type="Service" data={schema} />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <span className="eyebrow mb-3 block">Local Expertise — Mumbai</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Website Development Company in Mumbai</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            SiteRadiant partners with ambitious brands across Mumbai to craft high-converting, lightning-fast digital solutions. From local startups to established industrial houses, we deliver custom web engineering.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Serving the Financial Capital of India</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-zinc-300 leading-relaxed text-lg">
              Mumbai’s competitive business ecosystem demands a fast, robust, and highly-visible digital presence. As a specialist web development agency, we make sure Mumbai businesses do not lose valuable leads to slow page load speeds or poor mobile layout rendering. We design and build with semantic structures that maximize search engine rankings and position you as the premium service provider in your industry.
            </p>
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Why Choose SiteRadiant in Mumbai?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Fast Turnaround</strong> — We launch custom websites and landing pages in 2 to 4 weeks.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>No Template Bloat</strong> — Built from scratch with React and modern layouts for optimal UX.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Local Market Optimization</strong> — Custom localized technical SEO architecture that targets Maharashtra and PAN-India audiences.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Services Offered</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Custom Corporate Websites & Portals</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>High-Converting Performance Marketing Landing Pages</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Multi-currency E-Commerce Storefronts</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Collaborative Approach</h2>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Discovery & Alignment</h3>
              <p className="text-zinc-400">We align on visual requirements, backend infrastructure needs, and API dependencies to build a concrete roadmap.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-2 text-white">Agile Sprints & Demos</h3>
              <p className="text-zinc-400">We work in scheduled iterations, providing staging links so you can view design progress and provide immediate inputs.</p>
            </div>
          </div>
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
