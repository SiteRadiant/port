import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function ServicePage() {
  const schema = {
    "name": "Website Development",
    "description": "Fast, SEO-optimised business websites built on modern frameworks to drive growth and conversion.",
    "areaServed": "IN"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What technologies do you use for website development?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We specialise in modern web frameworks like React, Next.js, and Node.js. This ensures your website is fast, secure, and ready to scale."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a business website?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Typically, a standard business website takes 4-6 weeks from discovery to launch, depending on the complexity and features required."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Professional Website Development Services | SiteRadiant" 
        description="SiteRadiant delivers fast, SEO-optimised business websites built on modern frameworks to drive growth, conversion, and AI search visibility." 
        path="/website-development" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Website Development Services</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We build state-of-the-art business websites tailored to your specific business goals. 
            Focusing on speed, accessibility, and conversion optimization to ensure your digital presence acts as a growth engine.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What is Business Website Development?</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-zinc-300 leading-relaxed text-lg">
              Business website development goes beyond simple templates. It involves creating a custom, scalable digital platform that effectively communicates your brand value, captures leads, and integrates seamlessly with your internal business processes. A proper website serves as the central hub for all your marketing and operational efforts.
            </p>
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Who is this for?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Growing Startups</strong> needing a scalable, professional digital foundation to attract investors and early adopters.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Established Enterprises</strong> looking to modernize their legacy systems with secure, high-performance web applications.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>B2B Service Providers</strong> requiring advanced lead capture, CRM integration, and technical SEO architectures.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Problems We Solve</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Slow page load speeds hurting search rankings.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Poor mobile responsiveness causing high bounce rates.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Lack of proper semantic structure making it hard for AI search engines to crawl.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Development Process</h2>
          <div className="space-y-6">
            {[
              { title: '1. Discovery & Architecture', desc: 'We map out your business goals, target audience, and required technical integrations.' },
              { title: '2. UI/UX Design', desc: 'Creating wireframes and high-fidelity mockups focused on conversion and user journey.' },
              { title: '3. Full-Stack Development', desc: 'Building the frontend and backend using React, Next.js, and Node.js for maximum performance.' },
              { title: '4. SEO & QA Testing', desc: 'Rigorous testing for accessibility, mobile responsiveness, Core Web Vitals, and technical SEO.' },
              { title: '5. Launch & Support', desc: 'Seamless deployment to production with ongoing support and maintenance.' }
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
              <h3 className="text-xl font-bold mb-3">What technologies do you use for website development?</h3>
              <p className="text-zinc-400">We specialise in modern web frameworks like React, Next.js, and Node.js. We avoid bloated builders to ensure your website is fast, secure, and ready to scale.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">How long does it take to build a business website?</h3>
              <p className="text-zinc-400">Typically, a standard business website takes 4-6 weeks from discovery to launch, depending on the complexity, custom animations, and integrations required.</p>
            </div>
          </div>
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
