import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';

export default function ServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Website Development",
    "provider": {
      "@type": "Organization",
      "name": "SiteRadiant",
      "url": "https://www.siteradiant.co.in"
    },
    "areaServed": "IN",
    "description": "Fast, SEO-optimised business websites built on modern frameworks to drive growth and conversion."
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO title="Website Development | SiteRadiant" description="Fast, SEO-optimised business websites built on modern frameworks to drive growth and conversion." path="/website-development" schema={schema} />
      <Navbar />
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">Website Development</h1>
        <p className="text-xl text-zinc-400 mb-12">Fast, SEO-optimised business websites built on modern frameworks to drive growth and conversion.</p>
        
        <h2 className="text-2xl font-bold mb-4">What is Website Development?</h2>
        <p className="text-zinc-300 mb-8">At SiteRadiant, we deliver state-of-the-art business website development in india tailored to your specific business goals. We focus on speed, accessibility, and conversion optimization to ensure your digital presence acts as a growth engine.</p>
        
        <h2 className="text-2xl font-bold mb-4">Who is this for?</h2>
        <ul className="list-disc pl-6 text-zinc-300 mb-8 space-y-2">
          <li>Startups needing a scalable digital foundation.</li>
          <li>Enterprises looking for secure, high-performance systems.</li>
          <li>Businesses looking to transition to a modern tech stack.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Why choose SiteRadiant?</h2>
        <p className="text-zinc-300 mb-12">We combine deep technical expertise in React, Next.js, and Node with a strong understanding of technical SEO and AEO. Our systems are built to be easily crawled by search engines and AI bots alike.</p>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
