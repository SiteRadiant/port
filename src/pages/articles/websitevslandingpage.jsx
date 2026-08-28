import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Website vs Landing Page: What is the difference?",
    "publisher": {
      "@type": "Organization",
      "name": "SiteRadiant",
      "logo": { "@type": "ImageObject", "url": "https://www.siteradiant.co.in/logo192.png" }
    },
    "description": "Understand the key differences between a full website and a landing page, and which one your business needs."
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO title="Website vs Landing Page: What is the difference? | SiteRadiant Insights" description="Understand the key differences between a full website and a landing page, and which one your business needs." path="/website-vs-landing-page" schema={schema} />
      <Navbar />
      <article className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Website vs Landing Page: What is the difference?</h1>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-red-400 mb-3">Quick Answer</h2>
          <p className="text-zinc-300">Understand the key differences between a full website and a landing page, and which one your business needs.</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Detailed Explanation</h2>
        <p className="text-zinc-300 mb-6">When determining the right approach, it's essential to understand the underlying technical and business requirements. Search engines and AI answer engines value clarity, accuracy, and structured information.</p>
        <p className="text-zinc-300 mb-12">At SiteRadiant, we ensure every project is architected for maximum visibility and performance, giving you a competitive edge in both traditional and AI-driven search environments.</p>
      </article>
      <Footer />
    </div>
  );
}
