import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';
import CTA from '../components/CTA';

const faqs = [
  {
    question: "What services do you offer?",
    answer: "We specialize in Website Development, Landing Pages, E-commerce Solutions, and custom Enterprise platforms. From simple one-page sites to complex AI-integrated automation workflows, we handle the entire design, build, and deployment process."
  },
  {
    question: "How much does a website cost?",
    answer: "Our pricing is transparent and scales with your needs. A high-converting Landing Page starts at ₹4,999, while a complete multi-page Website Development package starts at ₹7,999. E-commerce platforms start at ₹19,999. All exact pricing is locked in after a free discovery call."
  },
  {
    question: "How long does it take to build a website?",
    answer: "A standard Landing Page or Starter Website typically takes 1 to 2 weeks from the moment we receive your assets (text, logo, images). More complex projects, like E-Commerce sites or custom portals, generally take 4 to 8 weeks (as testing also included)."
  },
  {
    question: "Do you offer ongoing support after launch?",
    answer: "Absolutely. All of our packages come with a post-launch support period ranging from 14 days to 6 months depending on the tier you choose. We also offer ongoing retainer packages for continuous updates, security monitoring, and SEO maintenance."
  },
  {
    question: "Do you use templates or custom designs?",
    answer: "While we have foundational frameworks to ensure rapid development and best practices, every site we build is uniquely customized to match your brand's aesthetics, target audience, and specific functional requirements."
  },
  {
    question: "How do we get started?",
    answer: "The best way to start is by clicking 'Get a Quote' or 'Book a Consultation'. We will schedule a brief discovery call to map out your goals, required features, and timeline, and then we'll provide a fixed-price proposal."
  }
];

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-white/10 rounded-xl bg-white/[0.02] overflow-hidden transition-all duration-200">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
      >
        <h3 className="text-lg font-semibold text-white">{question}</h3>
        <span className="text-zinc-400 shrink-0 ml-4">
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-zinc-400 leading-relaxed">
          {answer}
        </div>
      )}
    </div>
  );
};

export default function FAQ() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <SEO
        title="Frequently Asked Questions"
        description="Find answers to common questions about SiteRadiant's pricing, timelines, support, and web development processes."
        path="/faq"
      />
      <Navbar />
      <main id="main-content" className="pt-32 pb-24 max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[13px] text-zinc-300 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
            Support & Information
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h1>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Everything you need to know about our services, pricing, and how we work with you to launch your next project.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
