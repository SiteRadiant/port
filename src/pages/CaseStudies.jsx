import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CaseStudies() {
  const cases = [
    {
      title: 'Fly With Ranjita',
      category: 'Travel & Hospitality',
      desc: 'Immersive travel agency website built to showcase beautiful destinations, simplify tour package discovery, and capture high-intent leads seamlessly.',
      link: '/case-studies/fly-with-ranjita'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Case Studies — Web Success Stories | SiteRadiant" 
        description="Read detailed case studies from SiteRadiant. See how we help clients redesign, develop, and optimize websites to scale leads and improve conversions." 
        path="/case-studies" 
      />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-5xl mx-auto px-6">
        <header className="mb-16">
          <span className="eyebrow mb-3 block">Success Stories</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Case Studies</h1>
          <p className="text-xl text-zinc-400 max-w-2xl leading-relaxed">
            Real solutions to real business problems. We take pride in building fast, scalable architectures that support our clients' growth.
          </p>
        </header>

        <section className="space-y-8 mb-20">
          {cases.map((c) => (
            <div key={c.title} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-red-500/40 transition-colors flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
              <div className="max-w-2xl">
                <span className="text-red-400 text-xs font-semibold uppercase tracking-wider block mb-2">{c.category}</span>
                <h3 className="text-2xl font-bold mb-3">{c.title}</h3>
                <p className="text-zinc-400 leading-relaxed">{c.desc}</p>
              </div>
              <Link to={c.link} className="btn-ghost whitespace-nowrap inline-flex items-center gap-2">
                Read Details <ArrowRight size={18} />
              </Link>
            </div>
          ))}
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
