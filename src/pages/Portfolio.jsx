import React from 'react';
import SEO from '../components/SEO';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Portfolio() {
  const projects = [
    {
      title: 'Fly With Ranjita',
      category: 'Web Design & Development',
      desc: 'Immersive travel agency discovery portal with automated lead routing.',
      image: '/images/flywithranjita.png',
      link: '/case-studies/fly-with-ranjita',
      liveLink: 'https://flywithranjita.com'
    }
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white">
      <SEO 
        title="Our Portfolio — Custom Web Projects | SiteRadiant" 
        description="Explore the portfolio of SiteRadiant. We build SEO-ready websites, custom e-commerce stores, and AI automation tools for growing businesses." 
        path="/portfolio" 
      />
      <Navbar />
      
      <main className="pt-32 pb-16 max-w-6xl mx-auto px-6">
        <header className="mb-16 text-center">
          <span className="eyebrow mb-3 block">Selected Work</span>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight gradient-text">Our Portfolio</h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            A showcase of custom designs, clean architectures, and high-converting platforms built to deliver real business outcomes.
          </p>
        </header>

        <section className="grid md:grid-cols-2 gap-8 mb-20">
          {projects.map((project) => (
            <div key={project.title} className="group relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 transition-all hover:border-red-500/40 flex flex-col">
              <div className="h-[250px] relative overflow-hidden bg-zinc-900">
                <img 
                  src={project.image} 
                  onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" }}
                  alt={project.title} 
                  className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-red-400 text-xs font-semibold tracking-wider uppercase mb-2 block">{project.category}</span>
                  <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
                  <p className="text-zinc-400 mb-6">{project.desc}</p>
                </div>
                <div className="flex gap-4 items-center">
                  <Link to={project.link} className="text-white hover:text-red-400 font-semibold inline-flex items-center gap-2 transition-colors">
                    Read Case Study <ArrowRight size={16} />
                  </Link>
                  <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-zinc-500 hover:text-white transition-colors text-sm">
                    Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
      
      <CTA />
      <Footer />
    </div>
  );
}
