import React from 'react';
import { ArrowRight, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate, Link } from 'react-router-dom';

export default function FeaturedWork() {
  const navigate = useNavigate();

  return (
    <section id="featured-work" className="py-24 relative overflow-hidden bg-[#0a0a0b] border-t border-white/5">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/20 bg-red-500/10 text-xs font-semibold text-red-400 mb-4">
              <Sparkles size={13} />
              Real Client Spotlight
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
              Flagship Project Showcase
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We design and engineer bespoke web platforms tailored to real business goals. Explore our live client launch:
            </p>
          </div>
          <button onClick={() => navigate('/portfolio')} className="btn-ghost hidden md:inline-flex whitespace-nowrap">
            View All Work <ArrowRight size={18} />
          </button>
        </div>

        <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-red-500/40">
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="w-full lg:w-3/5 relative overflow-hidden h-[320px] lg:h-[520px]">
              <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img 
                src="/images/flywithranjita.png" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" }}
                alt="Fly With Ranjita Featured Project" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-semibold rounded-full border border-red-500/20">Custom Frontend</span>
                <span className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-semibold rounded-full border border-white/10">Travel & Hospitality</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-3 group-hover:text-red-400 transition-colors">
                Fly With Ranjita
              </h3>
              
              <p className="text-zinc-400 mb-6 leading-relaxed text-[15px]">
                A bespoke, immersive travel portal engineered to showcase curated itineraries, simplify tour discovery, and convert high-intent visitors into direct bookings.
              </p>

              <div className="space-y-2.5 mb-8">
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Sub-second page loading speed on all devices</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>100% Mobile-first responsive UI & fluid navigation</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-zinc-300">
                  <CheckCircle2 size={15} className="text-emerald-400 shrink-0" />
                  <span>Direct WhatsApp & streamlined inquiry lead capture</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-3 mt-auto">
                <a 
                  href="https://flywithranjita.com" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-primary !py-2.5 !px-5 !text-sm inline-flex items-center gap-2"
                >
                  Visit Live Site <ExternalLink size={15} />
                </a>
                <Link 
                  to="/case-studies/fly-with-ranjita" 
                  className="btn-ghost !py-2.5 !px-5 !text-sm inline-flex items-center gap-2"
                >
                  Read Case Study <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button onClick={() => navigate('/portfolio')} className="btn-ghost w-full justify-center">
            View All Work <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
