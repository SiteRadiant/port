import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CMO, TechFlow",
    text: "SiteRadiant completely transformed our digital presence. Our conversion rate increased by 140% within the first month of launching the new site.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "David Chen",
    role: "Founder, GrowthStack",
    text: "The automation workflows they built saved our team over 20 hours a week. Truly exceptional service and a deep understanding of our business needs.",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80"
  },
  {
    name: "Emily Rodriguez",
    role: "Director of E-commerce, Lumiere",
    text: "We needed a custom Shopify build that could handle high volume during flash sales. SiteRadiant delivered a flawless, lightning-fast store.",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="relative py-24 bg-[#0a0a0b] overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-red-900/5 blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="eyebrow mb-4 block">Client Success</span>
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Trusted by innovators
          </h2>
          <p className="text-zinc-400 text-lg">
            Don't just take our word for it. Here is what our partners have to say about working with SiteRadiant.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="test-card group relative hover:border-red-500/30 transition-colors duration-500 flex flex-col"
            >
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} className="text-red-400 fill-red-400" />
                ))}
              </div>
              <p className="text-zinc-300 text-[15px] leading-relaxed mb-8 italic flex-1">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-white/5">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                <div>
                  <div className="text-white font-bold text-[14px]">{t.name}</div>
                  <div className="text-zinc-500 text-[12px]">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
