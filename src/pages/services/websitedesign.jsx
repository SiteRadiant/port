import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function WebsiteDesign() {
  const schema = {
    "name": "Website Design",
    "description": "High-fidelity, responsive UI/UX website designs focused on conversion, speed, and clean typography.",
    "areaServed": "IN"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What design tools do you use?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily design using Figma, building high-fidelity interactive wireframes and design systems before writing any production code."
        }
      },
      {
        "@type": "Question",
        "name": "How does your design process support conversions?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Every layout is optimized for visual hierarchy. We place CTAs strategically, ensure clear typographic contrast, and design for lightning-fast readability."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Custom UI/UX Website Design Services | SiteRadiant" 
        description="Premium UI/UX and website design services in India. We design custom, high-converting Figma prototypes, custom typography, and responsive grid layouts." 
        path="/website-design" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Website Design Services</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Beautiful, functional interfaces designed to turn visitors into loyal clients. We combine user research with aesthetic excellence to deliver bespoke, modern UI/UX design.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Our Design Philosophy</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-zinc-300 leading-relaxed text-lg">
              Great web design isn't just about how it looks; it's about how it works. Our design team focuses on intuitive navigations, fast comprehension, and seamless visual flow. By structuring layouts with strong typography, ample whitespace, and performant asset structures, we ensure your users have an engaging, friction-free experience on all devices.
            </p>
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">What We Deliver</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Figma Interactive Prototypes</strong> so you can click through and verify the UX flow before any development starts.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Design Systems & Styleguides</strong> containing color palettes, typography specs, button variants, and spacing rules.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Mobile-First Layouts</strong> specifically optimized for quick tapping, clear readability, and lower bounce rates.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Design Features</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Custom iconography and performant vector typography.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Optimized UX structure matching Core Web Vital metrics.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Subtle micro-interactions that elevate brand credibility.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Creative Process</h2>
          <div className="space-y-6">
            {[
              { title: '1. Brand Discovery & Competitor Analysis', desc: 'We dissect your brand voice, competitors, and target demographics.' },
              { title: '2. Wireframing & UX Outlining', desc: 'Drafting visual layouts to define path priority and conversion funnels.' },
              { title: '3. High-Fidelity UI Design', desc: 'Designing state-of-the-art visual grids and custom style components.' },
              { title: '4. Interactive Prototyping & Feedback', desc: 'Testing interface flow with you and iterating on visual details.' }
            ].map(step => (
              <div key={step.title} className="bg-white/5 border border-white/10 rounded-xl p-6">
                <h3 className="text-xl font-bold mb-2 text-white">{step.title}</h3>
                <p className="text-zinc-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-6">
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">What design tools do you use?</h3>
              <p className="text-zinc-400">We design exclusively in Figma. This allows seamless handoffs to developer teams and real-time collaboration with you during reviews.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">How does design impact site speed?</h3>
              <p className="text-zinc-400">We design with performant SVG graphics, modern system-friendly typography, and avoid heavy visual formats that cause layout shifts (CLS), ensuring high search engine scores.</p>
            </div>
          </div>
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
