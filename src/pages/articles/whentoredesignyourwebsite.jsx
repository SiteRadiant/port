import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function WhenToRedesignYourWebsite() {
  const schema = {
    "headline": "When Should a Business Redesign Its Website? (7 Critical Signs)",
    "description": "7 clear technical and commercial signals indicating your business website is ready for a strategic redesign.",
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
        title="When to Redesign Your Website (7 Warning Signs)" 
        description="Learn the 7 clear signals that prove your business website is costing you enquiries and when a strategic redesign will deliver positive ROI." 
        path="/when-to-redesign-your-website" 
      />
      <StructuredData type="Article" data={schema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> Strategic Web Architecture Guide
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            When Should a Business <span className="gradient-text">Redesign Its Website?</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Redesigning a website takes time and budget. Here is how to know with certainty whether a redesign will drive measurable business growth or if minor copy tweaks are all you need.
          </p>
        </header>

        {/* Quick Answer for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-12">
          <p className="eyebrow mb-2">⚡ The Quick Decision Rule</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            A business should redesign its website when: <strong>(1)</strong> mobile bounce rates exceed 60%, <strong>(2)</strong> page speed fails Google Core Web Vitals on mobile devices, <strong>(3)</strong> company positioning or pricing has outgrown the old layout, or <strong>(4)</strong> the underlying CMS is bogged down by plugin vulnerabilities. If your site generates traffic but zero enquiries, an architectural redesign delivers immediate ROI.
          </p>
        </div>

        {/* 7 Signals */}
        <article className="space-y-10 text-zinc-300 leading-relaxed">
          {[
            {
              num: "1",
              title: "Your Mobile Experience is Clunky or Broken",
              desc: "Over 65% of all web traffic is now mobile. If visitors on smartphones have to pinch-and-zoom, encounter overlapping text, or struggle with non-responsive menus, they will leave for a competitor immediately."
            },
            {
              num: "2",
              title: "Page Speed Takes Longer Than 2.5 Seconds",
              desc: "Search engines and users penalize slow websites. If your website takes 4 to 8 seconds to become interactive, search algorithms downgrade your rankings and visitors bounce before reading your value proposition."
            },
            {
              num: "3",
              title: "Your Business Model or Offer Has Shifted",
              desc: "You started as a general service provider and now specialize in high-ticket enterprise solutions. An outdated website built 3 years ago fails to communicate your premium tier and repels larger contracts."
            },
            {
              num: "4",
              title: "Traffic is Growing, But Leads are Declining",
              desc: "A disconnect between search impressions and conversions signals that your messaging or conversion architecture is broken. A modern redesign restructures user journeys to capture existing intent."
            },
            {
              num: "5",
              title: "Security and Maintenance Have Become a Nightmare",
              desc: "Monolithic CMS platforms require weekly plugin updates, constant database repairs, and present ongoing vulnerability vectors. Modern headless or React sites run with zero database overhead."
            },
            {
              num: "6",
              title: "Search Engines Struggle to Index Your Semantic Hierarchy",
              desc: "AI answer engines (Perplexity, ChatGPT) and Google look for clear H1-H3 structures, schema.org markup, and structured data to summarize your capabilities. Older websites lack this structured accessibility."
            },
            {
              num: "7",
              title: "Your Website Looks Significantly Worse Than Competitors",
              desc: "Visual trust matters. If competitors in your niche look modern, clean, and credible while your website resembles a 2018 template, prospective buyers judge your operational quality accordingly."
            }
          ].map((signal) => (
            <div key={signal.num} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <div className="flex items-center gap-2 mb-2 text-red-400 font-bold text-sm">
                <span>Signal #{signal.num}</span>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{signal.title}</h2>
              <p className="text-sm text-zinc-400 leading-relaxed">{signal.desc}</p>
            </div>
          ))}
        </article>

        {/* CTA Banner */}
        <section className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="eyebrow block mb-1">Get an Honest Assessment</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Want to know if your website needs a redesign?</h3>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              We provide a free 30-minute review evaluating your page speed, mobile usability, and conversion bottlenecks—with zero sales pressure.
            </p>
          </div>
          <Link to="/website-redesign" className="btn-primary whitespace-nowrap !py-2.5 !px-5 text-sm">
            Explore Redesign Packages <ArrowRight size={15} />
          </Link>
        </section>

        {/* Related Links */}
        <section className="mt-12 border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Recommended Next Reads</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/why-websites-fail-to-convert" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Why Websites Fail to Convert →
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
