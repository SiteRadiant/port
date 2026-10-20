import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function CustomVsShopifyArticle() {
  const schema = {
    "headline": "Custom E-Commerce Website vs. Shopify: A Complete 2026 Cost & Control Comparison",
    "description": "An objective engineering analysis comparing custom web stores against Shopify on total cost of ownership, margins, speed, and customization.",
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
        title="Custom E-Commerce vs Shopify: 2026 Cost & Control Guide" 
        description="Compare custom e-commerce web development against Shopify on real transaction costs, loading speed, and long-term ownership." 
        path="/custom-website-vs-shopify" 
      />
      <StructuredData type="Article" data={schema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-4xl mx-auto px-4 sm:px-6">
        <header className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> Retail Architecture & Profit Margin Analysis
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight mb-6">
            Custom E-Commerce vs. Shopify <span className="gradient-text">(2026 Guide)</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 leading-relaxed">
            Should your business build a custom digital storefront or stick with a hosted SaaS platform like Shopify? We examine the true costs, engineering trade-offs, and margin impacts.
          </p>
        </header>

        {/* Quick Answer for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-12">
          <p className="eyebrow mb-2">⚡ The Quick Answer (Summary)</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            Shopify is ideal for testing new direct-to-consumer concepts with standard catalogue requirements. However, once a store generates over ₹5–10 Lakhs/month ($10k+/mo), Shopify's 0.5%–2.0% transaction penalty and $200–$500/month app subscriptions make a custom React/Next.js store significantly more profitable and faster to load.
          </p>
        </div>

        {/* Deep Dive Comparison */}
        <article className="space-y-10 text-zinc-300 leading-relaxed">
          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Total Cost of Ownership Over 2 Years</h2>
            <p className="mb-4">
              Most brands look only at the $39/month starter price of Shopify. In reality, a functioning store requires paid apps for product reviews ($29/mo), upsells ($49/mo), currency conversion ($19/mo), and page builders ($39/mo). That's an extra $1,600+ every year.
            </p>
            <p className="mb-4">
              Add third-party payment gateway fees (where Shopify charges an extra 1%–2% if you use Razorpay, Stripe, or Cashfree instead of Shopify Payments), and businesses quickly forfeit tens of thousands in profit margin.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">2. Performance and Conversion Impact</h2>
            <p className="mb-4">
              Every Shopify app injects its own remote JavaScript bundle into your theme head. Over 6 to 12 months, this "app bloat" degrades mobile page speeds, with mobile Lighthouse scores frequently dropping below 40.
            </p>
            <p className="mb-4">
              A bespoke custom store built with modern React or Next.js eliminates all external plugin overhead, delivering instant page transitions and sub-second catalog filtering.
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. Data Ownership & Vendor Independence</h2>
            <p className="mb-4">
              On Shopify, your digital storefront is hosted on proprietary closed infrastructure. If policies shift, prices increase, or accounts encounter automated flag algorithms, your sales can be frozen overnight.
            </p>
            <p className="mb-4">
              With custom engineering, you own the complete repository code, customer records, and product databases—with zero risk of arbitrary platform deplatforming.
            </p>
          </section>
        </article>

        {/* CTA Banner */}
        <section className="mt-14 p-6 sm:p-8 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div>
            <span className="eyebrow block mb-1">Tailored Solutions</span>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">Ready to explore a custom e-commerce store?</h3>
            <p className="text-zinc-400 text-sm max-w-xl leading-relaxed">
              SiteRadiant designs and builds custom retail platforms starting at ₹19,999 (~$240 USD) with zero transaction fees and full code ownership.
            </p>
          </div>
          <Link to="/ecommerce-development" className="btn-primary whitespace-nowrap !py-2.5 !px-5 text-sm">
            View E-Commerce Packages <ArrowRight size={15} />
          </Link>
        </section>

        {/* Related Links */}
        <section className="mt-12 border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Insights</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/shopify-alternatives" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Shopify Alternatives Overview →
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
