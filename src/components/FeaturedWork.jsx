import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturedWork() {
  return (
    <section className="py-24 relative overflow-hidden bg-[#0a0a0b]">
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl mx-auto px-6 relative z-10"
      >
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4 block">Featured Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-6">
              Our Latest Success Story
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              We recently partnered with an amazing brand to deliver a highly optimized, fully custom digital experience. Here's a look at what we built.
            </p>
          </div>
          <button className="btn-ghost hidden md:inline-flex whitespace-nowrap">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>

        <div className="group relative rounded-2xl md:rounded-[32px] overflow-hidden border border-white/10 bg-white/5 transition-all duration-500 hover:border-red-500/40">
          <div className="flex flex-col lg:flex-row">
            {/* Image Side */}
            <div className="w-full lg:w-3/5 relative overflow-hidden h-[300px] lg:h-[500px]">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10"></div>
              <img 
                src="/images/flywithranjita.png" 
                onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426" }}
                alt="Fly With Ranjita Featured Project" 
                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Content Side */}
            <div className="w-full lg:w-2/5 p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-red-500/10 text-red-400 text-xs font-semibold rounded-full border border-red-500/20">Web Development</span>
                <span className="px-3 py-1 bg-white/5 text-zinc-300 text-xs font-semibold rounded-full border border-white/10">Travel Agency</span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold mb-4 group-hover:text-red-400 transition-colors">
                Fly With Ranjita
              </h3>
              
              <p className="text-zinc-400 mb-8 leading-relaxed">
                A stunning, immersive travel agency website built to showcase beautiful destinations, simplify tour package discovery, and capture high-intent leads seamlessly.
              </p>

              <div className="flex items-center gap-4 mt-auto">
                <a href="https://flywithranjita.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-white font-semibold hover:text-red-400 transition-colors">
                  View Live Site <ExternalLink size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button className="btn-ghost w-full justify-center">
            View All Projects <ArrowRight size={18} />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
