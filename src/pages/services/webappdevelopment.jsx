import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function WebAppDev() {
  const schema = {
    "name": "Web Application Development",
    "description": "Custom web application development services. We build scalable, secure, and high-performance software for businesses.",
    "areaServed": "IN"
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Custom Web Application Development | SiteRadiant" 
        description="SiteRadiant builds powerful, custom web applications tailored to your business processes. Scalable, secure, and modern software solutions." 
        path="/web-application-development" 
      />
      <StructuredData type="Service" data={schema} />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Web Application Development</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            We engineer robust, custom web applications that streamline operations, empower users, and scale seamlessly as your business grows.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">What is Custom Web App Development?</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-zinc-300 leading-relaxed text-lg">
              Unlike standard websites that primarily deliver content, web applications are interactive software platforms accessed via the browser. This includes custom CRM systems, ERPs, SaaS platforms, and internal business tools designed to automate complex workflows and manage large sets of data securely.
            </p>
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Who is this for?</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>SaaS Startups</strong> needing a scalable MVP to launch to market quickly.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Enterprises</strong> replacing legacy on-premise software with modern cloud applications.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Technologies We Use</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>React.js & Next.js for lightning-fast frontend interfaces.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Node.js, Express, & Python for scalable backend architecture.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>PostgreSQL, MongoDB, and Redis for robust data management.</span>
              </li>
            </ul>
          </div>
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
