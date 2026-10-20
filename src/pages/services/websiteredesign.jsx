import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertTriangle, Sparkles } from 'lucide-react';

export default function WebsiteRedesign() {
  const schema = {
    "name": "Website Redesign Agency",
    "description": "Strategic, conversion-focused website redesign services. We turn slow, outdated websites into modern high-speed lead generation engines.",
    "areaServed": ["IN", "US", "GB", "CA", "AE"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How do you ensure our existing SEO rankings aren't lost during a website redesign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We preserve existing SEO rankings by performing a pre-launch URL crawl, maintaining existing URL slugs or mapping 301 redirects, preserving meta title tags, and retaining high-ranking content while improving site speed and Core Web Vitals."
        }
      },
      {
        "@type": "Question",
        "name": "When should a business consider a complete website redesign?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A redesign is needed when your current website has high mobile bounce rates, takes over 3 seconds to load, lacks clear conversion funnels, fails to reflect your updated product positioning, or cannot be easily crawled by search engines."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a website redesign take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Most business website redesigns take between 2 to 4 weeks from discovery and wireframing through to staging QA and launch."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Website Redesign Services" 
        description="Transform your outdated, slow, or low-converting website into a modern, high-speed lead generation machine with SiteRadiant." 
        path="/website-redesign" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> Performance & Conversion Modernization
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Website Redesign <span className="gradient-text">Agency</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Revamp your outdated, slow, or underperforming digital presence into an agile, conversion-focused asset engineered to turn visitors into qualified enquiries.
          </p>
        </div>

        {/* Quick Answer Box for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-14">
          <p className="eyebrow mb-2">⚡ Quick Summary for Business Owners</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            A website redesign is not merely a visual refresh—it is a strategic overhaul of your site's information architecture, loading speed, mobile usability, and conversion pathways. SiteRadiant rebuilds legacy websites on modern React stacks with zero SEO equity loss, guaranteed sub-second speeds, and conversion-focused copywriting starting at ₹7,999 (~$100 USD).
          </p>
        </div>

        {/* Signs you need a redesign */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">5 Clear Signs Your Business Needs a Website Redesign</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                title: "Traffic Arrives, But No Enquiries Occur",
                desc: "Visitors leave within seconds because your offer isn't clear above the fold or contact friction is too high."
              },
              {
                title: "Slow Page Speed & Failed Core Web Vitals",
                desc: "Legacy WordPress installations burdened by heavy plugins take 4+ seconds to load on mobile networks, killing search visibility."
              },
              {
                title: "Cluttered, Non-Responsive Mobile UX",
                desc: "Over 65% of business visitors browse from smartphones. Tiny touch targets and broken grids cause high bounce rates."
              },
              {
                title: "Outdated Brand Image Damaging Credibility",
                desc: "A dated design signals negligence. First impressions are formed within 50 milliseconds; visitors judge business reliability instantly."
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <div className="flex items-center gap-2 mb-2 text-amber-400 font-semibold text-sm">
                  <AlertTriangle size={15} /> Warning Signal #{idx + 1}
                </div>
                <h3 className="text-base sm:text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Redesign Methodology */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our 4-Stage Redesign Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { step: "01", title: "Audit & Analysis", desc: "We evaluate current traffic, conversion friction, and map existing high-ranking SEO URLs." },
              { step: "02", title: "Wireframing & Copy", desc: "We clarify your value proposition, eliminate fluff, and construct clear visual hierarchies." },
              { step: "03", title: "Modern Build", desc: "We build on lightweight React architecture with zero bloated third-party dependencies." },
              { step: "04", title: "SEO Migration & QA", desc: "301 redirects, schema validation, and speed benchmarks tested prior to seamless cutover." }
            ].map((p, i) => (
              <div key={i} className="p-5 rounded-2xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-mono text-red-400 font-bold mb-2">{p.step}</div>
                <h3 className="text-base font-bold text-white mb-2">{p.title}</h3>
                <p className="text-xs text-zinc-400 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Case Study Reference */}
        <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="eyebrow block mb-1">Proven Delivery</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Fly With Ranjita Travel Redesign</h3>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              Replaced a clunky manual inquiry workflow with an interactive, mobile-optimized package discovery experience, cutting bounce rates and automating lead capture.
            </p>
          </div>
          <Link to="/case-studies/fly-with-ranjita" className="btn-primary whitespace-nowrap !py-2.5 !px-5 text-sm">
            View Live Results <ArrowRight size={15} />
          </Link>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Website Redesign FAQs</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{faq.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Navigation Links */}
        <section className="border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Insights & Services</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/custom-website-development" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Custom Website Development →
            </Link>
            <Link to="/why-websites-fail-to-convert" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Why Websites Fail to Convert →
            </Link>
            <Link to="/when-to-redesign-your-website" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              When to Redesign Your Website Guide →
            </Link>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
