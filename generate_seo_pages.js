const fs = require('fs');
const path = require('path');

const services = [
  { id: 'custom-website-development', title: 'Custom Website Development Agency', kw: 'Custom Website Development', desc: 'Expert custom website development services for startups and enterprises. We build scalable, high-converting digital platforms.', schema: 'WebSite' },
  { id: 'website-redesign', title: 'Website Redesign Agency', kw: 'Outdated Website Redesign', desc: 'Transform your outdated website into a high-performing lead generation engine with our data-driven redesign services.', schema: 'WebPage' },
  { id: 'conversion-focused-web-design', title: 'Conversion-Focused Website Design', kw: 'Website Conversion Optimization', desc: 'Data-driven, conversion-focused website design services built to maximize leads and drive more sales.', schema: 'WebSite' },
  { id: 'shopify-alternatives', title: 'Shopify Alternatives & Custom E-commerce', kw: 'Custom website instead of Shopify', desc: 'Outgrown Shopify? We build scalable, bespoke e-commerce platforms with zero transaction fees and infinite flexibility.', schema: 'WebSite' }
];

const articles = [
  { id: 'how-much-does-a-custom-website-cost', title: 'How Much Does a Custom Website Cost?', desc: 'A complete breakdown of custom website development costs, including design, frontend, and backend architecture pricing.' },
  { id: 'custom-website-vs-shopify', title: 'Custom E-commerce Website vs Shopify', desc: 'Is it time to move away from Shopify? Discover the pros, cons, and costs of building a custom e-commerce website.' },
  { id: 'when-to-redesign-your-website', title: 'When Should a Business Redesign Its Website?', desc: '7 clear signs your outdated website is costing you leads, and when its time for a complete website redesign.' },
  { id: 'why-websites-fail-to-convert', title: 'Why Websites Dont Convert Visitors Into Customers', desc: 'Avoid these common website mistakes that cost businesses leads and discover how to optimize for conversions.' }
];

services.forEach(s => {
  const code = `import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';

export default function ServicePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "${s.title}",
    "provider": {
      "@type": "Organization",
      "name": "SiteRadiant",
      "url": "https://www.siteradiant.co.in"
    },
    "description": "${s.desc}"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO title="${s.title} | SiteRadiant" description="${s.desc}" path="/${s.id}" schema={schema} />
      <Navbar />
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6">${s.title}</h1>
        <p className="text-xl text-zinc-400 mb-12">${s.desc}</p>
        
        <h2 className="text-2xl font-bold mb-4">What is ${s.title}?</h2>
        <p className="text-zinc-300 mb-8">We deliver premium ${s.kw.toLowerCase()} solutions tailored to your unique business logic. Generic templates often restrict your growth—we focus on scalability, performance, and conversion optimization to ensure your digital presence generates real ROI.</p>
        
        <h2 className="text-2xl font-bold mb-4">Core Benefits</h2>
        <ul className="list-disc pl-6 text-zinc-300 mb-8 space-y-2">
          <li>Bespoke design aligned with your exact brand identity.</li>
          <li>Optimized for speed and Core Web Vitals to improve organic SEO.</li>
          <li>Secure, scalable architecture built for future growth.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Why choose SiteRadiant?</h2>
        <p className="text-zinc-300 mb-12">We combine deep technical expertise with a strong understanding of user psychology and AEO (Answer Engine Optimization). Our systems are built to be easily crawled by search engines and AI bots alike, driving both visibility and conversions.</p>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'services', `${s.id.replace(/-/g, '')}.jsx`), code);
});

articles.forEach(a => {
  const code = `import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArticlePage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "${a.title}",
    "publisher": {
      "@type": "Organization",
      "name": "SiteRadiant"
    },
    "description": "${a.desc}"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO title="${a.title} | SiteRadiant Insights" description="${a.desc}" path="/${a.id}" schema={schema} />
      <Navbar />
      <article className="pt-32 pb-16 max-w-3xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-8">${a.title}</h1>
        
        <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-12">
          <h2 className="text-xl font-bold text-red-400 mb-3">Quick Answer</h2>
          <p className="text-zinc-300">${a.desc}</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Detailed Explanation</h2>
        <p className="text-zinc-300 mb-6">When determining the right approach, it's essential to understand the underlying technical and business requirements. Search engines and AI answer engines value clarity, accuracy, and structured information.</p>
        <p className="text-zinc-300 mb-12">Whether you are considering a full <a href="/custom-website-development" className="text-red-400 hover:underline">custom website development</a> project or a strategic <a href="/website-redesign" className="text-red-400 hover:underline">website redesign</a>, ensuring your platform is built for conversions is key to long-term success.</p>
      </article>
      <Footer />
    </div>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'articles', `${a.id.replace(/-/g, '')}.jsx`), code);
});

console.log("Files generated successfully!");
