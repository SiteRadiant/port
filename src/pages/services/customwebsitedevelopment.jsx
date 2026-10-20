import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, ShieldCheck, Zap, Layers, Sparkles } from 'lucide-react';

export default function CustomWebsiteDev() {
  const schema = {
    "name": "Custom Website Development Agency",
    "description": "Bespoke website design and development services built without bloated templates. Fast, scalable, and optimized for conversions.",
    "areaServed": ["IN", "US", "GB", "CA", "AE"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes custom website development better than WordPress or template builders?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Custom website development uses clean, bespoke code (such as React and Next.js) tailored to your brand without the 50+ plugins, bloated databases, and security vulnerabilities common in generic templates. This results in sub-second page loads, higher Google rankings, and an interface specifically designed around your conversion funnel."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a custom business website take to build?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "At SiteRadiant, our agile engineering sprints allow us to deliver a functional MVP in 1 to 2 weeks. Comprehensive multi-page corporate sites with custom CMS integrations typically complete within 3 to 4 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Will our custom website be mobile-responsive and SEO-ready?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, every custom website we build is 100% mobile-first, passes Google Core Web Vitals, and features complete semantic HTML and JSON-LD schema markup for both search engines and AI answer engines."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Custom Website Development Agency" 
        description="SiteRadiant builds bespoke, high-performance custom websites engineered for speed, search visibility, and measurable lead generation." 
        path="/custom-website-development" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        {/* Header Breadcrumb & Title */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> Bespoke Engineering · Zero Template Bloat
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Custom Website <span className="gradient-text">Development Agency</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            We architect and build tailored, high-converting digital platforms for startups, growing brands, and service businesses that have outgrown rigid off-the-shelf templates.
          </p>
        </div>

        {/* Quick Answer Block for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-14">
          <p className="eyebrow mb-2">⚡ Quick Summary for Decision Makers</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            Custom website development is the process of engineering a business website from clean source code rather than adapting generic themes. SiteRadiant specializes in building lightning-fast React platforms with sub-second page loads, conversion-optimized user journeys, and robust technical SEO architecture starting from ₹7,999 (~$100 USD) with delivery in 14 days.
          </p>
        </div>

        {/* Why Custom Web Development */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Businesses Choose Custom Engineering Over Templates</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 transition-colors">
              <Zap className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">Sub-Second Speed</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                No slow plugin stacks or unneeded third-party scripts. Clean code delivers near-perfect Lighthouse scores and superior Core Web Vitals.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 transition-colors">
              <Layers className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">Bespoke Brand Identity</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Your company doesn't look like thousands of competitor websites using the exact same WordPress or Squarespace layout.
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-red-500/30 transition-colors">
              <ShieldCheck className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">Enterprise Security</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">
                Static frontend architectures and decoupled backends dramatically reduce vulnerability surfaces compared to plugin-reliant CMSs.
              </p>
            </div>
          </div>
        </section>

        {/* Real Proof Showcase */}
        <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
            <div>
              <span className="eyebrow block mb-1">Delivered Case Study</span>
              <h3 className="text-xl sm:text-2xl font-bold">Fly With Ranjita Travel Portal</h3>
            </div>
            <Link to="/case-studies/fly-with-ranjita" className="btn-ghost !py-2 !px-4 !text-xs inline-flex items-center gap-1.5">
              Read Full Case Study <ArrowRight size={14} />
            </Link>
          </div>
          <p className="text-zinc-400 text-sm sm:text-base leading-relaxed mb-6">
            We designed and deployed a bespoke tour discovery portal featuring sub-second package navigation, zero layout shift, and automated inquiry capture, transforming manual phone handling into an automated lead stream.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="p-3 bg-white/5 rounded-xl text-center">
              <div className="text-red-400 font-extrabold text-lg sm:text-xl">&lt; 1.0s</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">Load Time</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl text-center">
              <div className="text-red-400 font-extrabold text-lg sm:text-xl">100%</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">Mobile First</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl text-center">
              <div className="text-red-400 font-extrabold text-lg sm:text-xl">14 Days</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">Launch Speed</div>
            </div>
            <div className="p-3 bg-white/5 rounded-xl text-center">
              <div className="text-red-400 font-extrabold text-lg sm:text-xl">Zero</div>
              <div className="text-[11px] text-zinc-400 uppercase tracking-wider mt-0.5">Plugin Bloat</div>
            </div>
          </div>
        </section>

        {/* Deliverables Checklist */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">What We Deliver With Every Build</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Custom React & Next.js frontend architecture",
              "100% responsive testing across mobile, tablet, and desktop",
              "Semantic HTML5 & full JSON-LD schema markup",
              "Lead capture forms integrated with WhatsApp & Zoho CRM",
              "Technical SEO structure (XML sitemap, robots.txt, OpenGraph)",
              "SSL encryption, DDoS security, and global CDN hosting",
              "Complete code ownership with zero recurring vendor lock-in",
              "Post-launch support and performance warranty"
            ].map((item, idx) => (
              <div key={idx} className="flex items-start gap-3 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <CheckCircle2 size={16} className="text-red-400 shrink-0 mt-0.5" />
                <span className="text-sm text-zinc-300 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{faq.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Hub Links */}
        <section className="border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Services & Resources</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/website-redesign" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Website Redesign Services →
            </Link>
            <Link to="/conversion-focused-web-design" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Conversion-Focused Web Design →
            </Link>
            <Link to="/ecommerce-development" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              E-Commerce Development →
            </Link>
            <Link to="/website-cost-india" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Website Development Cost in India →
            </Link>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
