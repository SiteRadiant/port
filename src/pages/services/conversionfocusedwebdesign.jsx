import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function ConversionWebDesign() {
  const schema = {
    "name": "Conversion-Focused Website Design Agency",
    "description": "High-converting website design services engineered around user psychology, clear messaging, and friction-free lead capture.",
    "areaServed": ["IN", "US", "GB", "CA", "AE"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the difference between standard web design and conversion-focused web design?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Standard web design focuses primarily on surface aesthetics and artistic visuals. Conversion-focused web design prioritizes buyer psychology, information hierarchy, trust architecture, and reducing cognitive friction so that qualified visitors take action and enquire."
        }
      },
      {
        "@type": "Question",
        "name": "How does SiteRadiant increase website conversion rates?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We implement the 5-second clarity test (explaining who you help and what problem you solve above the fold), sticky mobile action bars, social proof reinforcement, and streamlined 2-step inquiry dialogs."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Conversion-Focused Website Design Services" 
        description="SiteRadiant designs high-converting websites and landing pages engineered to transform clicks into qualified enquiries and revenue." 
        path="/conversion-focused-web-design" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> CRO & Buyer Psychology Engineering
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Conversion-Focused <span className="gradient-text">Website Design</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Stop losing valuable traffic to confusing layouts and vague copy. We build websites engineered specifically to turn visitors into enquiries.
          </p>
        </div>

        {/* Quick Answer Box for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-14">
          <p className="eyebrow mb-2">⚡ Quick Definition for Growth Teams</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            Conversion-focused web design is an engineering and copywriting discipline where every layout element, headline, call-to-action, and trust badge is structured to guide visitors toward a single desired commercial outcome—booking a consultation, requesting a quote, or making a purchase.
          </p>
        </div>

        {/* The 4 Conversion Pillars */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Our 4 Pillars of Conversion Architecture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "1. The 5-Second Clarity Test",
                desc: "Within 5 seconds of landing, a visitor must know: What do you offer? Who is it for? And how does it solve their specific headache? If they have to guess, they leave."
              },
              {
                title: "2. Strategic Proof Placement",
                desc: "Placing proof (real deliverables, transparent turnaround times, and verified case studies) directly beside friction points like contact forms and pricing tables."
              },
              {
                title: "3. Mobile-First Thumb Ergonomics",
                desc: "Over 70% of inbound prospects browse from mobile phones. We place sticky conversion docks, one-tap WhatsApp buttons, and large touch targets at the bottom of the screen."
              },
              {
                title: "4. Zero-Friction Enquiry Dialogs",
                desc: "Replacing tedious 10-field contact forms with progressive 2-step modals and direct WhatsApp links, boosting form completion by up to 40%."
              }
            ].map((pillar, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{pillar.title}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{pillar.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Proof Section */}
        <section className="mb-16 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="eyebrow block mb-1">Delivered Proof</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Fly With Ranjita Case Study</h3>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              Explore how we restructured a travel portal with direct WhatsApp lead capture and transparent itinerary cards, reducing user confusion and lifting qualified inquiries.
            </p>
          </div>
          <Link to="/case-studies/fly-with-ranjita" className="btn-primary whitespace-nowrap !py-2.5 !px-5 text-sm">
            Read Case Study <ArrowRight size={15} />
          </Link>
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
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Services & Articles</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/custom-website-development" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Custom Website Development →
            </Link>
            <Link to="/landing-page-development" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Landing Page Development →
            </Link>
            <Link to="/why-websites-fail-to-convert" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Why Websites Fail to Convert Guide →
            </Link>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
