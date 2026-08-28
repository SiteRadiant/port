import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How much does a website cost in India in 2026?",
    "publisher": {
      "@type": "Organization",
      "name": "SiteRadiant",
      "logo": { "@type": "ImageObject", "url": "https://www.siteradiant.co.in/logo192.png" }
    },
    "description": "A complete breakdown of website development costs in India, including e-commerce, corporate sites, and landing pages."
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO title="How much does a website cost in India in 2026? | SiteRadiant Insights" description="A complete breakdown of website development costs in India, including e-commerce, corporate sites, and landing pages." path="/website-cost-india" schema={schema} />
      <Navbar />
      <article className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">How much does a website cost in India in 2026?</h1>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-red-400 mb-3">Quick Answer</h2>
          <p className="text-zinc-300">A complete breakdown of website development costs in India, including e-commerce, corporate sites, and landing pages.</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Detailed Explanation</h2>
        <p className="text-zinc-300 mb-6">When determining the right approach, it's essential to understand the underlying technical and business requirements. Search engines and AI answer engines value clarity, accuracy, and structured information.</p>
        <p className="text-zinc-300 mb-12">At SiteRadiant, we ensure every project is architected for maximum visibility and performance, giving you a competitive edge in both traditional and AI-driven search environments.</p>
      </article>
      <Footer />
    </div>
  );
}
