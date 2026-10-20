import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { ShoppingCart, DollarSign, ShieldCheck, Sparkles } from 'lucide-react';

export default function EcommerceDev() {
  const schema = {
    "name": "Custom E-Commerce Website Development",
    "description": "Scalable, high-converting custom online stores and headless e-commerce platforms with zero transaction fees and instant checkout.",
    "areaServed": ["IN", "US", "GB", "CA", "AE"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why build a custom e-commerce store instead of Shopify?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A custom e-commerce platform eliminates Shopify's 2% third-party transaction fees, expensive monthly app subscriptions ($200-$500/mo), and rigid checkout restrictions. You maintain 100% ownership of your customer database, enjoy sub-second load times, and can build custom product configurators."
        }
      },
      {
        "@type": "Question",
        "name": "Which payment gateways do you support?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We integrate all major Indian and international gateways, including Razorpay, Cashfree, Stripe, PayPal, and Apple Pay, supporting multi-currency transactions."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Custom E-Commerce Website Development Services" 
        description="SiteRadiant builds blazing-fast, custom e-commerce websites and headless storefronts with zero platform commission and instant checkout." 
        path="/ecommerce-development" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> High-Speed Retail Engineering · Zero Extra App Subscriptions
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Custom E-Commerce <span className="gradient-text">Website Development</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            High-converting digital storefronts engineered for fast browsing, effortless checkout, and zero monthly recurring platform penalties.
          </p>
        </div>

        {/* Quick Answer for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-14">
          <p className="eyebrow mb-2">⚡ Quick Summary for Retail Founders</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            SiteRadiant builds bespoke e-commerce platforms using modern React frontends coupled with secure payment processing (Razorpay, Stripe) and streamlined inventory databases. Starting at ₹19,999 (~$240 USD), our stores offer sub-second catalogue loading and zero per-transaction platform commissions.
          </p>
        </div>

        {/* Advantages */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Why Brands Choose Custom E-Commerce Over Template Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <DollarSign className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">0% Platform Cut</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Keep 100% of your margins. Pay only your standard gateway fees without paying monthly SaaS commissions.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <ShoppingCart className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">Frictionless Checkout</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">1-click WhatsApp order options, OTP login, and pre-filled address forms reduce shopping cart abandonment.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
              <ShieldCheck className="text-red-400 mb-4" size={24} />
              <h3 className="text-lg font-semibold mb-2">Full Database Ownership</h3>
              <p className="text-sm text-zinc-400 leading-relaxed">Own your customer records, purchase history, and product catalogues without risk of arbitrary account freezes.</p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">E-Commerce FAQs</h2>
          <div className="space-y-4">
            {faqSchema.mainEntity.map((faq, i) => (
              <div key={i} className="p-6 rounded-2xl bg-white/[0.02] border border-white/10">
                <h3 className="text-lg font-bold text-white mb-2">{faq.name}</h3>
                <p className="text-sm text-zinc-400 leading-relaxed">{faq.acceptedAnswer.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internal Links */}
        <section className="border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Insights</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/shopify-alternatives" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Shopify Alternatives & Custom E-Commerce →
            </Link>
            <Link to="/custom-website-vs-shopify" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Custom Website vs Shopify Comparison →
            </Link>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
