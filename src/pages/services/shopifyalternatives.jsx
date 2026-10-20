import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

export default function ShopifyAlternatives() {
  const schema = {
    "name": "Custom E-Commerce vs Shopify Solutions",
    "description": "High-performance headless e-commerce platforms and custom alternatives to Shopify with zero monthly app fees and full code ownership.",
    "areaServed": ["IN", "US", "GB", "CA", "AE"]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are brands switching from Shopify to custom e-commerce?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Brands switch when recurring app subscription costs (reviews, upsells, filters, speed boosters) climb past $300-$800/month, when Shopify's 2% transaction fee eats gross margin, or when checkout customization is restricted by Shopify Plus ($2,000+/month)."
        }
      },
      {
        "@type": "Question",
        "name": "Can a custom e-commerce store handle inventory and orders easily?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We build lightweight admin dashboards or connect headless backends (Medusa, Strapi, or PostgreSQL) that allow you to manage products, inventory, orders, and customer queries with zero technical hassle."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Shopify Alternatives for Scaling E-Commerce Brands" 
        description="Escape 2% transaction fees and expensive app subscriptions. Discover custom headless e-commerce alternatives engineered by SiteRadiant." 
        path="/shopify-alternatives" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />

      <main className="pt-32 pb-20 max-w-5xl mx-auto px-4 sm:px-6">
        <div className="mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-xs font-semibold mb-4">
            <Sparkles size={12} /> Margin Protection · Zero Recurring App Penalties
          </div>
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            Shopify Alternatives & <span className="gradient-text">Custom E-Commerce</span>
          </h1>
          <p className="text-lg sm:text-xl text-zinc-400 max-w-3xl leading-relaxed">
            Have monthly app fees and transaction percentages started eating your profits? We engineer custom, headless online stores built for speed, margin control, and total data ownership.
          </p>
        </div>

        {/* Quick Answer for AEO */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white/[0.03] border border-red-500/30 mb-14">
          <p className="eyebrow mb-2">⚡ Quick Summary for E-Commerce Founders</p>
          <p className="text-zinc-200 text-base sm:text-lg leading-relaxed">
            While Shopify is effective for testing initial ideas, scaling brands often suffer from "app bloat" where 10+ paid plugins slow down page speed and add $2,000–$6,000 in yearly recurring costs. A custom headless e-commerce website built on React/Next.js gives you full code ownership, sub-second load times, and zero third-party platform cuts.
          </p>
        </div>

        {/* Head-to-Head Comparison */}
        <section className="mb-16">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6">Shopify vs. Custom Store Architecture</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-white/10 rounded-2xl overflow-hidden">
              <thead>
                <tr className="bg-white/5 border-b border-white/10 text-xs uppercase tracking-wider text-zinc-400">
                  <th className="p-4 sm:p-5">Feature</th>
                  <th className="p-4 sm:p-5 text-red-300">SiteRadiant Custom Store</th>
                  <th className="p-4 sm:p-5">Standard Shopify Store</th>
                </tr>
              </thead>
              <tbody className="text-sm text-zinc-300 divide-y divide-white/5">
                <tr>
                  <td className="p-4 font-semibold text-white">Platform Commission</td>
                  <td className="p-4 text-emerald-400 font-semibold">0% (You keep 100% margin)</td>
                  <td className="p-4 text-zinc-400">0.5% – 2.0% per transaction</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Monthly App Subscriptions</td>
                  <td className="p-4 text-emerald-400 font-semibold">₹0 (Features built natively)</td>
                  <td className="p-4 text-zinc-400">$100 – $500+ / month</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Page Load Speed</td>
                  <td className="p-4 text-emerald-400 font-semibold">&lt; 1.0 second (Sub-second React)</td>
                  <td className="p-4 text-zinc-400">2.5 – 5.0+ seconds (Theme + Apps)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Checkout Customization</td>
                  <td className="p-4 text-emerald-400 font-semibold">100% custom flows & WhatsApp ordering</td>
                  <td className="p-4 text-zinc-400">Locked unless on Shopify Plus ($2,000/mo)</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Code & Data Ownership</td>
                  <td className="p-4 text-emerald-400 font-semibold">You own 100% of the repository</td>
                  <td className="p-4 text-zinc-400">Rented proprietary platform</td>
                </tr>
              </tbody>
            </table>
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

        {/* Related Links */}
        <section className="border-t border-white/10 pt-10">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-zinc-500 mb-4">Related Insights</h3>
          <div className="flex flex-wrap gap-3">
            <Link to="/ecommerce-development" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Custom E-Commerce Development →
            </Link>
            <Link to="/custom-website-vs-shopify" className="text-xs px-3.5 py-2 rounded-full bg-white/5 border border-white/10 text-zinc-300 hover:text-white hover:border-red-500/30 transition">
              Deep-Dive: Custom E-Commerce vs Shopify Article →
            </Link>
          </div>
        </section>
      </main>

      <CTA />
      <Footer />
    </div>
  );
}
