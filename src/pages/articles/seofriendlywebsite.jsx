import React from 'react';
import { Helmet } from 'react-helmet-async';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function SeoFriendlyWebsite() {
  const schema = {
    "headline": "What is an SEO-Friendly Website?",
    "description": "Learn what makes a website SEO-friendly and why technical SEO is critical for modern web development.",
    "datePublished": "2026-08-28",
    "author": {
      "@type": "Organization",
      "name": "SiteRadiant"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.siteradiant.co.in"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "What is an SEO-Friendly Website?",
      "item": "https://www.siteradiant.co.in/seo-friendly-website"
    }]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="What is an SEO-Friendly Website? | Complete Guide" 
        description="Learn the technical requirements and architecture that make a website SEO-friendly and easily crawlable by search engines and AI." 
        path="/seo-friendly-website" 
      />
      <StructuredData type="Article" data={schema} />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(breadcrumbSchema)}</script>
      </Helmet>
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <article>
          <header className="mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">What is an SEO-Friendly Website?</h1>
            <p className="text-xl text-zinc-400">The technical foundation for ranking on search engines and AI answer engines.</p>
          </header>

          <section className="mb-12 p-6 bg-white/5 rounded-2xl border border-red-500/20">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2"><span className="text-red-500">⚡</span> Quick Answer</h2>
            <p className="text-lg text-zinc-300">
              An SEO-friendly website is designed and built so search engines can easily crawl, understand, and index its content. It requires semantic HTML, fast loading speeds (Core Web Vitals), mobile-responsiveness, proper canonical tags, and structured data (JSON-LD) to clearly communicate context.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">Key Factors of SEO-Friendly Architecture</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold mb-2">1. Crawlability & Indexability</h3>
                <p className="text-zinc-400 leading-relaxed">Search engines use bots to crawl the web. If your site blocks these bots via a misconfigured <code>robots.txt</code>, relies heavily on client-side JavaScript without pre-rendering, or has broken links, your pages won't be indexed.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">2. Semantic HTML</h3>
                <p className="text-zinc-400 leading-relaxed">Using correct HTML5 tags (<code>&lt;header&gt;</code>, <code>&lt;nav&gt;</code>, <code>&lt;main&gt;</code>, <code>&lt;article&gt;</code>) instead of endless <code>&lt;div&gt;</code> tags helps AI and search engines understand the structure and priority of your content.</p>
              </div>

              <div>
                <h3 className="text-xl font-bold mb-2">3. Core Web Vitals (Speed)</h3>
                <p className="text-zinc-400 leading-relaxed">Google explicitly uses loading speed (LCP), interactivity (INP), and visual stability (CLS) as ranking factors. A slow website is fundamentally not SEO-friendly.</p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6">AEO: Answer Engine Optimization</h2>
            <p className="text-zinc-400 leading-relaxed mb-4">
              With the rise of AI tools like ChatGPT Search, Perplexity, and Google AI Overviews, traditional SEO is evolving into AEO.
            </p>
            <p className="text-zinc-400 leading-relaxed">
              To optimize for AEO, your website must provide direct, factual answers to specific user questions. This is why structured FAQ schemas and concise "Quick Answer" paragraphs are becoming critical components of modern web architecture.
            </p>
          </section>

        </article>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
