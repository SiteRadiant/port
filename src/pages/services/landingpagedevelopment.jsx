import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { LayoutTemplate, Zap, Target, Sparkles } from 'lucide-react';

export default function LandingPageDev() {
  const schema = {
    "name": "High-Converting Landing Page Design & Development",
    "description": "Custom performance marketing landing pages engineered for Google Ads, Meta Ads, and direct lead generation.",
    "areaServed": ["IN", "US", "GB", "CA", "AE"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How fast can you launch a custom performance landing page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our landing page development sprint delivers complete design, conversion copywriting, CRM/WhatsApp integration, and live deployment in 7 business days."
        }
      },
      {
        "@type": "Question",
        "name": "What is the difference between a homepage and a landing page?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A homepage serves multiple types of visitors with wide navigation links. A landing page is built for a specific marketing campaign with a single focused goal and zero navigational leaks, maximizing return on ad spend (ROAS)."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="High-Converting Landing Page Design Services" 
        description="SiteRadiant designs and codes custom, lightning-fast landing pages engineered to maximize Google & Meta ad conversions." 
        path="/landing-page-development" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> 7-Day Turnaround · Ad Campaign Optimization
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Landing Page <span className="gradient-text">Development</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Stop burning ad budget sending clicks to slow, generic pages. We build single-purpose landing pages engineered to convert paid traffic into phone calls, WhatsApp messages, and booked consultations.
          </p>
        </div>

        {/* Quick Answer for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-14">
          <p className="eyebrow mb-2">⚡ Quick Summary for Performance Marketers</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            A high-converting landing page is stripped of global navigation distractions and focused exclusively on a single conversion action. Built on lightweight React architecture with sub-second mobile loading speeds, our landing page package starts at ₹4,999 (~$60 USD) and deploys within 7 days.
          </p>
        </div>

        {/* Landing Page Features */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What Makes Our Landing Pages Convert</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <Zap className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">Sub-Second Mobile Load</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Ad clicks are impatient. A 1-second delay reduces conversions by 20%. Our pages load in under 800ms.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <Target className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">Zero Exit Leaks</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">No unneeded navbar links or distracting external badges. Every scroll direction guides the prospect toward the enquiry CTA.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <LayoutTemplate className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">1-Click WhatsApp & CRM Hook</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Instant lead notification to your sales team via WhatsApp and webhook to your CRM (Zoho, HubSpot, Google Sheets).</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Landing Page FAQs</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{faq.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Insights</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/website-vs-landing-page" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Website vs Landing Page: When to Use Which →
            </Link>
            <Link to="/conversion-focused-web-design" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Conversion-Focused Web Design →
            </Link>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
