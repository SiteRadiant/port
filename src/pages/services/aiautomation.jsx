import React from 'react';
import SEO from '../../components/SEO';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CTA from '../../components/CTA';
import { StructuredData } from '../../components/StructuredData';

export default function AIAutomation() {
  const schema = {
    "name": "AI Automation",
    "description": "Integration of custom LLM APIs, automated lead processing workflows, and internal business database syncing.",
    "areaServed": "IN"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What type of AI models do you integrate?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We build custom solutions using OpenAI GPT-4, Anthropic Claude, and open-source models (like Llama) hosted securely on cloud platforms like AWS or Google Cloud."
        }
      },
      {
        "@type": "Question",
        "name": "How does AI automation benefit small businesses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It automates repetitive work such as client email drafting, database synchronization, lead tagging, and user support, saving hundreds of business hours."
        }
      }
    ]
  };

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Custom AI Automation & Integration Services | SiteRadiant" 
        description="Integrate AI agents, LLM APIs, automated database workflows, and custom SaaS platforms. We build enterprise-grade automation solutions in India." 
        path="/ai-automation" 
      />
      <StructuredData type="Service" data={schema} />
      <StructuredData type="FAQ" data={faqSchema} />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">AI Automation Services</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Supercharge your business efficiency. We design and build custom AI pipelines, auto-updating CRM workflows, and intelligent software agents.
          </p>
        </div>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-6">Why Integrate AI Automation?</h2>
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            <p className="text-zinc-300 leading-relaxed text-lg">
              Repetitive manual tasks are a bottleneck to business growth. Our AI automation service integrates smart agents directly into your existing infrastructure. Whether it is automatically categorizing inbound support tickets, querying internal docs with semantic search, or automatically updating project tracking dashboards, we construct the pipeline with robust API endpoints and custom dashboards.
            </p>
          </div>
        </section>

        <section className="mb-16 grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-6">Our Capabilities</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Custom LLM Workflows</strong> connected to your company database for immediate factual answers and reports.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>CRM & Lead Routing Automation</strong> that immediately scores and directs inbound requests to the right team members.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span><strong>Data Syncing Pipelines</strong> using secure serverless functions (Node.js, Python) to keep databases synchronized.</span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-6">Core Benefits</h2>
            <ul className="space-y-4">
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Reduce response times from hours to seconds.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Zero manual copy-paste errors across platform dashboards.</span>
              </li>
              <li className="flex gap-3 text-zinc-300">
                <div className="mt-1 w-1.5 h-1.5 rounded-full bg-red-500 flex-shrink-0" />
                <span>Gain actionable visual analytics on operational bottlenecks.</span>
              </li>
            </ul>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8">Our Automation Journey</h2>
          <div className="space-y-6">
            {[
              { title: '1. Audit & Feasibility Study', desc: 'We review your daily operations to identify high-value manual bottlenecks.' },
              { title: '2. Pipeline & Schema Architecture', desc: 'Designing secure API triggers, data transformation mappings, and prompts.' },
              { title: '3. Sandbox Development & Testing', desc: 'Running integrations in sandboxed environments to verify accuracy and handling.' },
              { title: '4. Deploy & Real-time Monitoring', desc: 'Launching automated actions with detailed error-logging and simple oversight dashboards.' }
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
              <h3 className="text-xl font-bold mb-3">Is our business data secure?</h3>
              <p className="text-zinc-400">Yes, completely. We build integrations following industry standard security policies, ensuring LLM calls do not train on your private customer parameters and utilize HTTPS encrypted endpoints.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-3">Do we need complex IT systems to use this?</h3>
              <p className="text-zinc-400">Not at all. We integrate with your existing cloud tools (such as Slack, Google Workspace, HubSpot, Razorpay, or custom APIs) smoothly.</p>
            </div>
          </div>
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
