import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function WebsiteVsLandingPage() {
  const schema = {
    "headline": "Website vs Landing Page: What is the Difference?",
    "description": "Understand the core differences between a full website and a landing page, and know which one your business needs.",
    "datePublished": "2026-08-28",
    "author": {
      "@type": "Organization",
      "name": "SiteRadiant"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Website vs Landing Page: Which Do You Need? | SiteRadiant" 
        description="Learn the difference between a website and a landing page, their unique purposes, and how to choose the right one for your marketing goals." 
        path="/website-vs-landing-page" 
      />
      <StructuredData type="Article" data={schema} />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Website vs Landing Page: What is the Difference?</h1>
            <p className="text-xl text-zinc-400">Choosing the right digital asset for your business goals.</p>
          </header>

          <section className="mb-12 p-6 bg-white/5 rounded-2xl border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-red-500">⚡</span> Quick Answer</h2>
            <p className="text-lg text-zinc-300">
              A <strong>website</strong> is a comprehensive digital hub with multiple pages designed for exploration, branding, and providing detailed information about a company. A <strong>landing page</strong> is a single, focused web page created specifically for a marketing or advertising campaign, designed with a single call to action (CTA) to maximize conversions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Differences</h2>
            
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 px-4 font-bold text-lg">Feature</th>
                    <th className="py-4 px-4 font-bold text-lg text-red-400">Website</th>
                    <th className="py-4 px-4 font-bold text-lg text-blue-400">Landing Page</th>
                  </tr>
                </thead>
                <tbody className="text-zinc-300">
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-semibold">Primary Goal</td>
                    <td className="py-4 px-4">Provide information, build brand authority, and SEO.</td>
                    <td className="py-4 px-4">Generate leads or sales immediately (Conversion).</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-semibold">Navigation</td>
                    <td className="py-4 px-4">Extensive menus linking to multiple pages.</td>
                    <td className="py-4 px-4">Minimal or none (keeps user focused on the CTA).</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="py-4 px-4 font-semibold">Audience Intent</td>
                    <td className="py-4 px-4">Browsing, researching, learning.</td>
                    <td className="py-4 px-4">Ready to act (usually arriving from an ad).</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">When should you use a Landing Page?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>When running paid advertising campaigns (Google Ads, Facebook Ads).</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>When promoting a single, specific product or e-book.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>When you need to capture emails for a waitlist or newsletter.</span>
              </li>
            </ul>
          </section>
        </article>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
