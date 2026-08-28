const fs = require('fs');
const path = require('path');

const services = [
  { id: 'website-development', title: 'Website Development', kw: 'Business Website Development in India', desc: 'Fast, SEO-optimised business websites built on modern frameworks to drive growth and conversion.', schema: 'WebSite' },
  { id: 'landing-page-development', title: 'Landing Page Development', kw: 'High-Converting Landing Pages', desc: 'Custom, high-performing landing pages designed to capture leads and maximize ROI.', schema: 'WebPage' },
  { id: 'ecommerce-development', title: 'E-Commerce Website Development', kw: 'E-commerce Website Development in India', desc: 'Scalable, secure, and blazing-fast online stores built for modern retail and high-volume sales.', schema: 'WebSite' },
  { id: 'lms-development', title: 'Learning Management System (LMS)', kw: 'LMS Development Company', desc: 'Custom e-learning platforms and LMS development to host, manage, and monetize your courses.', schema: 'WebSite' }
];

const articles = [
  { id: 'website-cost-india', title: 'How much does a website cost in India in 2026?', desc: 'A complete breakdown of website development costs in India, including e-commerce, corporate sites, and landing pages.' },
  { id: 'website-vs-landing-page', title: 'Website vs Landing Page: What is the difference?', desc: 'Understand the key differences between a full website and a landing page, and which one your business needs.' }
];

const cases = [
  { id: 'cred-reward-engine', brand: 'CRED', title: 'Reward Engine That Made Paying Bills Addictive' },
  { id: 'canva-mobile-onboarding', brand: 'Canva', title: 'Rebuilt Mobile Onboarding in 6 Weeks' },
  { id: 'razorpay-checkout', brand: 'Razorpay', title: 'Cut Checkout Drop-off by 38% in One Quarter' },
  { id: 'zepto-ai-recommendations', brand: 'Zepto', title: 'AI Recommendations That Lifted AOV by 24%' }
];

// 1. Generate Service Pages
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
    "areaServed": "IN",
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
        <p className="text-zinc-300 mb-8">At SiteRadiant, we deliver state-of-the-art ${s.kw.toLowerCase()} tailored to your specific business goals. We focus on speed, accessibility, and conversion optimization to ensure your digital presence acts as a growth engine.</p>
        
        <h2 className="text-2xl font-bold mb-4">Who is this for?</h2>
        <ul className="list-disc pl-6 text-zinc-300 mb-8 space-y-2">
          <li>Startups needing a scalable digital foundation.</li>
          <li>Enterprises looking for secure, high-performance systems.</li>
          <li>Businesses looking to transition to a modern tech stack.</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Why choose SiteRadiant?</h2>
        <p className="text-zinc-300 mb-12">We combine deep technical expertise in React, Next.js, and Node with a strong understanding of technical SEO and AEO. Our systems are built to be easily crawled by search engines and AI bots alike.</p>
      </main>
      <CTA />
      <Footer />
    </div>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'services', `${s.id.replace(/-/g, '')}.jsx`), code);
});

// 2. Generate AEO Articles
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
      "name": "SiteRadiant",
      "logo": { "@type": "ImageObject", "url": "https://www.siteradiant.co.in/logo192.png" }
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
        <p className="text-zinc-300 mb-12">At SiteRadiant, we ensure every project is architected for maximum visibility and performance, giving you a competitive edge in both traditional and AI-driven search environments.</p>
      </article>
      <Footer />
    </div>
  );
}
`;
  fs.writeFileSync(path.join(__dirname, 'src', 'pages', 'articles', `${a.id.replace(/-/g, '')}.jsx`), code);
});

console.log("Files generated successfully!");
