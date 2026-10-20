import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WhyWebsitesFailToConvert() {
  const schema = {
    "headline": "Why Business Websites Fail to Convert Visitors Into Paying Customers (And How to Fix It)",
    "description": "An actionable technical and CRO guide examining the 6 critical friction points causing low website inquiry rates.",
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
        title="Why Business Websites Fail to Convert (6 Critical Fixes)" 
        description="Discover why your business website generates traffic but zero enquiries. Practical UX, speed, and conversion fixes from SiteRadiant." 
        path="/why-websites-fail-to-convert" 
      />
      <StructuredData type="Article" data={schema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> Conversion Rate Optimization & UX Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Why Business Websites Fail to Convert <span className="gradient-text">(And How to Fix It)</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            You run campaigns, publish content, and get visitors—yet the contact inbox remains quiet. Here is an evidence-based breakdown of why conversion friction happens and the exact changes that fix it.
          </p>
        </header>

        {/* Quick Answer Block for Answer Engines */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-12">
          <p className="eyebrow mb-2">⚡ The Quick Answer (Executive Summary)</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            Most business websites fail to convert due to three primary barriers: <strong>vague positioning above the fold</strong> (visitors don't understand the outcome within 5 seconds), <strong>excessive mobile interaction friction</strong> (clunky forms and slow loading speeds exceeding 3 seconds), and a <strong>lack of immediate proof</strong> beside calls to action. Fixing these barriers typically doubles enquiry conversion rates without increasing advertising spend.
          </p>
        </div>

        {/* Article Body */}
        <article className="space-y-12 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. The 5-Second Clarity Failure</h2>
            <p className="mb-4">
              When a prospective client lands on your homepage, their brain subconsciously asks three questions within 50 milliseconds: <em>"What do you do?", "Is this relevant to me?", and "What do I do next?"</em>
            </p>
            <p className="mb-4">
              Many agency and corporate websites bury their offering under poetic buzzwords like <em>"We empower next-generation digital synergy."</em> Visitors leave because deciphering your service requires cognitive effort.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-sm">
              <strong className="text-emerald-400">The Fix:</strong> Use a concrete headline structure: <br />
              <code className="text-zinc-200">[What you build/do] for [Specific Target Customer] so they can [Specific Desired Business Outcome].</code>
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. The 3-Second Mobile Speed Tax</h2>
            <p className="mb-4">
              According to Google Web Vitals telemetry, 53% of mobile visits are abandoned if a page takes more than 3 seconds to load. Generic WordPress installations weighted down by 30+ plugins, uncompressed PNG banners, and third-party trackers routinely take 5–8 seconds on 4G connections.
            </p>
            <p className="mb-4">
              If your site is slow, you are paying for ad clicks that bounce before the browser finishes rendering your header.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-sm">
              <strong className="text-emerald-400">The Fix:</strong> Migrate from bloated monolithic CMSs to lightweight React or Next.js architectures. Compress all visual assets into modern WebP formats and achieve sub-second LCP (Largest Contentful Paint).
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. High-Friction Contact Forms</h2>
            <p className="mb-4">
              Requiring a prospect to fill out an 8-field form asking for company size, postal address, and project budget before they have even spoken to a human causes over 60% drop-off.
            </p>
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/10 text-sm">
              <strong className="text-emerald-400">The Fix:</strong> Break the enquiry flow into progressive 2-step modals (Service Selection &rarr; Contact Details) or offer instant 1-tap WhatsApp consultation buttons.
            </div>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">4. Missing Real Deliverables & Pricing Anchors</h2>
            <p className="mb-4">
              Buyers dread the opaque <em>"Contact us for a quote"</em> runaround. When websites hide all pricing context, prospects assume the service is either exorbitantly expensive or artificially marked up.
            </p>
            <p className="mb-4">
              Providing starting ranges (e.g., Starter Website from ₹7,999) filters out non-budgeted leads while giving qualified buyers confidence to schedule a discovery call.
            </p>
          </section>
        </article>

        {/* Real Proof Case Reference */}
        <section className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="eyebrow block mb-1">Practical Application</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">How We Solved This for Fly With Ranjita</h3>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              By replacing fragmented manual phone requests with clear package itineraries and direct WhatsApp inquiry buttons, lead conversion jumped significantly within weeks of launch.
            </p>
          </div>
          <Link to="/case-studies/fly-with-ranjita" className="btn-primary whitespace-nowrap !py-2.5 !px-5 text-sm">
            Read Case Study <ArrowRight size={15} />
          </Link>
        </section>

        {/* Next Steps Links */}
        <section className="mt-12 border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Recommended Next Reads</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/website-redesign" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Website Redesign Services →
            </Link>
            <Link to="/when-to-redesign-your-website" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              7 Signs When to Redesign Your Website →
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
