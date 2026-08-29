import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Blog() {
  const posts = [
    {
      title: 'What Makes a Website SEO-Friendly?',
      desc: 'Learn the technical requirements and architecture that make a website easily crawlable by search engines and AI answers bots.',
      link: '/seo-friendly-website',
      date: 'Aug 28, 2026'
    },
    {
      title: 'Website Cost in India in 2026',
      desc: 'A transparent guide to how much a professional business website costs in India, including hosting, design, and developer support.',
      link: '/website-cost-india',
      date: 'Aug 26, 2026'
    },
    {
      title: 'Website vs Landing Page: Which One Do You Need?',
      desc: 'Understanding the difference between a multi-page business website and a high-converting landing page to optimize marketing spending.',
      link: '/website-vs-landing-page',
      date: 'Aug 24, 2026'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Our Blog — Web Development & SEO Insights | SiteRadiant" 
        description="Read articles and technical guides on website development cost in India, SEO strategy, landing page conversion tricks, and UI/UX best practices." 
        path="/blog" 
      />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-4xl mx-auto px-6">
        <header className="mb-16">
          <span className="eyebrow mb-3 block">Insights</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Our Blog</h1>
          <p className="text-xl text-zinc-400 leading-relaxed">
            Technical guides, marketing insights, and best practices from our design and engineering specialists.
          </p>
        </header>

        <section className="space-y-12 mb-20">
          {posts.map((post) => (
            <article key={post.title} className="border-b border-white/10 pb-8 flex flex-col items-start">
              <span className="text-zinc-500 text-sm mb-2">{post.date}</span>
              <h3 className="text-2xl font-bold mb-3 hover:text-red-400 transition-colors">
                <Link to={post.link}>{post.title}</Link>
              </h3>
              <p className="text-zinc-400 mb-4 leading-relaxed">{post.desc}</p>
              <Link to={post.link} className="text-white hover:text-red-400 font-semibold inline-flex items-center gap-2 transition-colors">
                Read Article <ArrowRight size={16} />
              </Link>
            </article>
          ))}
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
