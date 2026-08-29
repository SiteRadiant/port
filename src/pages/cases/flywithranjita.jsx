import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';

export default function FlyWithRanjita() {
  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Case Study: Fly With Ranjita | SiteRadiant" 
        description="Learn how SiteRadiant designed and developed a high-converting, immersive travel agency website for Fly With Ranjita to maximize lead generation." 
        path="/case-studies/fly-with-ranjita" 
      />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <header className="mb-12">
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-semibold rounded-full border border-red-500/20">Web Development</span>
            <span className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-semibold rounded-full border border-white/10">Travel Agency</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Case Study: Fly With Ranjita</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Re-architecting a travel agency digital portal to streamline package discovery and capture organic search traffic.
          </p>
        </header>

        <section className="mb-12 relative rounded-3xl overflow-hidden h-[300px] md:h-[450px] border border-white/10 bg-white/5">
          <img 
            src="/images/flywithranjita.png" 
            onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" }}
            alt="Fly With Ranjita Project Showcase" 
            className="w-full h-full object-cover"
          />
        </section>

        <section className="mb-16 grid md:grid-cols-3 gap-8 p-6 bg-white/5 border border-white/10 rounded-2xl">
          <div>
            <h3 className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Client</h3>
            <p className="text-white font-semibold">Fly With Ranjita</p>
          </div>
          <div>
            <h3 className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Services</h3>
            <p className="text-white font-semibold">UI/UX Design, Web Development</p>
          </div>
          <div>
            <h3 className="text-zinc-500 text-xs uppercase tracking-wider mb-1">Tech Stack</h3>
            <p className="text-white font-semibold">React, Tailwind CSS, Vite</p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">The Business Problem</h2>
          <div className="prose prose-invert text-zinc-300 max-w-none space-y-4">
            <p>
              Fly With Ranjita needed an immersive, fast-loading, and visually attractive digital platform to showcase their curated tour packages, luxury travel arrangements, and destination guides.
            </p>
            <p>
              The original inquiry process was highly fragmented, depending on direct manual phone calls which lead to lower conversions. The goal was to build a structured visual showcase with strategic call-to-actions (CTAs) that captures client interest seamlessly.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Solution & Approach</h2>
          <div className="prose prose-invert text-zinc-300 max-w-none space-y-4">
            <p>
              We designed an interface layout emphasizing stunning location photography without compromising layout shift (CLS) or page speed metrics.
            </p>
            <p>
              Using semantic structure, clean responsive layouts, and lightning-fast grid listings, users can search, filter, and view tour details in real-time. Lead capturing was centralized through quick-access contact dialogs, directing requests to their CRM.
            </p>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Key Platform Features</h2>
          <ul className="space-y-4 text-zinc-300">
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✓</span>
              <span><strong>Destinations Explorer:</strong> Interactive card layout displaying categories, regions, and package highlights.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✓</span>
              <span><strong>Optimized Forms:</strong> Inline lightweight inquiry form that increases completion rate.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-red-400 font-bold">✓</span>
              <span><strong>Speed and Performance:</strong> WebP asset compression, lazy loading images, and static pre-rendering, achieving optimal Core Web Vitals.</span>
            </li>
          </ul>
        </section>

        <div className="border-t border-white/10 pt-8 flex justify-between items-center">
          <a href="https://flywithranjita.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
            View Live Site
          </a>
        </div>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
