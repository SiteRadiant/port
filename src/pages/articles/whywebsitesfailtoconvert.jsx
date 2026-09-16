import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Why Websites Dont Convert Visitors Into Customers",
    "publisher": {
      "@type": "Organization",
      "name": "SiteRadiant"
    },
    "description": "Avoid these common website mistakes that cost businesses leads and discover how to optimize for conversions."
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO title="Why Websites Dont Convert Visitors Into Customers | SiteRadiant Insights" description="Avoid these common website mistakes that cost businesses leads and discover how to optimize for conversions." path="/why-websites-fail-to-convert" schema={schema} />
      <Navbar />
      <article className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">Why Websites Dont Convert Visitors Into Customers</h1>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-red-400 mb-3">Quick Answer</h2>
          <p className="text-zinc-300">Avoid these common website mistakes that cost businesses leads and discover how to optimize for conversions.</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Detailed Explanation</h2>
        <p className="text-zinc-300 mb-6">When determining the right approach, it's essential to understand the underlying technical and business requirements. Search engines and AI answer engines value clarity, accuracy, and structured information.</p>
        <p className="text-zinc-300 mb-12">Whether you are considering a full <a href="/custom-website-development" className="text-red-400 hover:underline">custom website development</a> project or a strategic <a href="/website-redesign" className="text-red-400 hover:underline">website redesign</a>, ensuring your platform is built for conversions is key to long-term success.</p>
      </article>
      <Footer />
    </div>
  );
}
