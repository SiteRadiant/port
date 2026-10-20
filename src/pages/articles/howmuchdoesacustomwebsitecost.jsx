import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export default function HowMuchDoesACustomWebsiteCost() {
  const schema = {
    "headline": "How Much Does a Custom Website Cost? (2026 Price Guide)",
    "description": "An honest, detailed breakdown of custom website development pricing, feature scopes, and milestone costs.",
    "datePublished": "2026-08-28",
    "dateModified": "2026-10-20",
    "author": {
      "@type": "Organization",
      "name": "SiteRadiant"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="How Much Does a Custom Website Cost? (2026 Pricing Guide)" 
        description="A transparent breakdown of custom website costs in 2026. Understand pricing for design, frontend, SEO, and maintenance." 
        path="/how-much-does-a-custom-website-cost" 
      />
      <StructuredData type="Article" data={schema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> Transparent Agency Pricing Guide
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            How Much Does a Custom <span className="gradient-text">Website Cost?</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            From ₹4,999 landing pages to bespoke multi-page platforms, here is an honest, itemized breakdown of what goes into professional web development costs in 2026.
          </p>
        </header>

        {/* Quick Answer for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-12">
          <p className="eyebrow mb-2">⚡ The Quick Answer (Price Ranges)</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            In 2026, custom website development costs vary by scope: A high-converting <strong>Landing Page</strong> costs <strong>₹4,999 – ₹8,999 (~$60–$110 USD)</strong>; a <strong>Bespoke Business Website</strong> costs <strong>₹7,999 – ₹21,999 (~$100–$270 USD)</strong>; and a <strong>Custom E-Commerce Platform</strong> starts at <strong>₹19,999 (~$240 USD)</strong>. Pricing includes mobile optimization, clean React code, and technical SEO schema.
          </p>
        </div>

        {/* Pricing Tiers Table */}
        <article className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Cost Breakdown by Project Tier</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="eyebrow text-xs block mb-1">Starter Tier</span>
                <h3 className="text-xl font-bold text-white mb-2">Landing Pages</h3>
                <div className="text-2xl font-extrabold text-red-400 mb-4">From ₹4,999</div>
                <p className="text-xs text-zinc-400 mb-4">Ideal for ad campaigns, product validation, and single-service lead generation.</p>
                <ul className="text-xs space-y-2 text-zinc-300">
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> 1 Focused Conversion Funnel</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> WhatsApp & CRM Integration</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> 7-Day Turnaround</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-red-500/40 shadow-lg shadow-red-500/10">
                <span className="eyebrow text-xs block mb-1">Growth Tier</span>
                <h3 className="text-xl font-bold text-white mb-2">Business Website</h3>
                <div className="text-2xl font-extrabold text-red-400 mb-4">From ₹7,999</div>
                <p className="text-xs text-zinc-400 mb-4">Complete multi-page presence for service companies and growing startups.</p>
                <ul className="text-xs space-y-2 text-zinc-300">
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> Multi-page Semantic Layout</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> Complete Technical SEO Schema</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> 14-Day MVP Launch</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <span className="eyebrow text-xs block mb-1">Scale Tier</span>
                <h3 className="text-xl font-bold text-white mb-2">Custom E-Commerce</h3>
                <div className="text-2xl font-extrabold text-red-400 mb-4">From ₹19,999</div>
                <p className="text-xs text-zinc-400 mb-4">Bespoke online retail storefront with zero monthly platform app fees.</p>
                <ul className="text-xs space-y-2 text-zinc-300">
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> Razorpay/Stripe Gateway</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> Instant Checkout & Inventory</li>
                  <li className="flex items-center gap-1.5"><CheckCircle2 size={13} className="text-red-400" /> 3 to 4-Week Delivery</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">What Determines Website Development Pricing?</h2>
            <p className="mb-4">
              When evaluating web development proposals, the quote reflects the engineering quality and commercial strategy behind the build:
            </p>
            <ul className="space-y-3 pl-2">
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Framework & Code Cleanliness:</strong> Lightweight React and Next.js applications require engineering expertise but deliver sub-second speeds that generic drag-and-drop builders cannot match.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Conversion Architecture & Copywriting:</strong> Crafting copy that speaks directly to customer objections and drives action.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400 font-bold">•</span>
                <span><strong>Search & AI Readiness:</strong> Proper semantic headings, schema validation, and meta configurations that help search engines index your brand.</span>
              </li>
            </ul>
          </section>
        </article>

        {/* CTA Banner */}
        <section className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="eyebrow block mb-1">Fixed-Price Quotes</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Want a clear, transparent quote for your project?</h3>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              Book a 30-minute discovery call with our engineering team. We'll map your requirements and provide a fixed-price proposal with defined deliverables.
            </p>
          </div>
          <Link to="/services" className="btn-primary whitespace-nowrap !py-2.5 !px-5 text-sm">
            View All Service Packages <ArrowRight size={15} />
          </Link>
        </section>

        {/* Related Links */}
        <section className="mt-12 border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Insights</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/website-cost-india" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Website Cost in India Detailed Guide →
            </Link>
            <Link to="/custom-website-development" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Custom Website Development →
            </Link>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
