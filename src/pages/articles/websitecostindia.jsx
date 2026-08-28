import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function WebsiteCostIndia() {
  const schema = {
    "headline": "How Much Does a Website Cost in India in 2026?",
    "description": "A complete breakdown of website development costs in India, including landing pages, business websites, and e-commerce platforms.",
    "datePublished": "2026-08-28",
    "author": {
      "@type": "Organization",
      "name": "SiteRadiant"
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Website Development Cost in India (2026) | SiteRadiant" 
        description="Discover the true cost of building a website in India. We break down the pricing for landing pages, corporate websites, and e-commerce platforms." 
        path="/website-cost-india" 
      />
      <StructuredData type="Article" data={schema} />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">How Much Does a Website Cost in India in 2026?</h1>
            <p className="text-xl text-zinc-400">A transparent breakdown of website development costs for businesses, startups, and enterprises.</p>
          </header>

          <section className="mb-12 p-6 bg-white/5 rounded-2xl border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-red-500">⚡</span> Quick Answer</h2>
            <p className="text-lg text-zinc-300">
              In 2026, the cost of a website in India ranges significantly based on complexity. A high-converting landing page costs between ₹4,999 and ₹8,999. A professional business website costs between ₹19,999 and ₹34,999, while custom e-commerce or web applications start from ₹29,999 and can go upwards of ₹89,999 for enterprise features.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Cost Breakdown by Website Type</h2>
            
            <div className="space-y-8">
              <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-bold mb-2">1. Landing Pages (₹4,999 - ₹8,999)</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">Best for marketing campaigns, lead generation, and single-product promotions.</p>
                <ul className="list-disc pl-5 text-zinc-300">
                  <li>Single-page scrolling design</li>
                  <li>Lead capture forms</li>
                  <li>High conversion focus</li>
                </ul>
              </div>

              <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-bold mb-2">2. Corporate & Business Websites (₹19,999 - ₹34,999)</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">Best for service-based businesses, agencies, and startups needing a strong digital presence.</p>
                <ul className="list-disc pl-5 text-zinc-300">
                  <li>Multi-page structure (Home, About, Services, Contact)</li>
                  <li>SEO optimization & fast loading speeds</li>
                  <li>Content Management System (CMS)</li>
                </ul>
              </div>

              <div className="border border-white/10 rounded-xl p-6 bg-white/[0.02]">
                <h3 className="text-xl font-bold mb-2">3. E-Commerce Platforms (₹29,999 - ₹89,999+)</h3>
                <p className="text-zinc-400 leading-relaxed mb-4">Best for retail businesses selling products online with payment gateways.</p>
                <ul className="list-disc pl-5 text-zinc-300">
                  <li>Product catalogs & inventory management</li>
                  <li>Secure payment gateways (Razorpay, Stripe)</li>
                  <li>User accounts and order tracking</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">What factors influence the cost?</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              When requesting quotes, understand that you are paying for expertise, not just code. The primary factors include:
            </p>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Technology Stack:</strong> Modern stacks like React/Next.js cost more initially but save money long-term due to performance and scalability.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Custom Design vs. Templates:</strong> Custom designs convert better but require UI/UX expertise.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>SEO Readiness:</strong> A website built with semantic HTML and technical SEO will rank better, providing a higher ROI.</span>
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
