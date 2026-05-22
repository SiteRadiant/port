import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Smartphone, Globe, Sparkles, Zap, ShoppingCart, Users, Heart, Gamepad2, Rocket, Building2, Store, Tv, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { serviceCategories } from '../mock/mock';
import { useUI } from '../context/UIContext';

const iconMap = {
  smartphone: Smartphone, globe: Globe, sparkles: Sparkles, zap: Zap,
  'shopping-cart': ShoppingCart, users: Users, heart: Heart, 'gamepad-2': Gamepad2,
  rocket: Rocket, 'building-2': Building2, store: Store, tv: Tv,
};

const ServicesPage = () => {
  const { openPricing, openContact } = useUI();
  const navigate = useNavigate();

  React.useEffect(() => { document.title = 'Services & Pricing — SiteRadiant'; window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0b] text-white overflow-x-hidden">
      <Navbar />

      <section className="relative pt-32 pb-12 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] rounded-full bg-red-700/10 blur-[120px] pointer-events-none" />
        <div className="relative max-w-[1200px] mx-auto px-6 lg:px-8">
          <p className="text-[12px] tracking-[0.2em] uppercase text-zinc-500 mb-4">12 Services · 3 Categories</p>
          <h1 className="text-[44px] sm:text-[64px] font-extrabold leading-[1.05] tracking-tight">
            Everything <span className="gradient-text">we build</span>
          </h1>
          <p className="mt-5 text-zinc-400 text-[17px] max-w-[640px]">
            From mobile apps to AI-powered platforms — explore our full capabilities and click any service to see plans and pricing in INR.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {['Mobile', 'Web', 'AI', 'Automation', 'E-commerce', 'Gaming'].map((t) => (
              <span key={t} className="pill text-[12.5px]">{t}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-8 space-y-20">
          {serviceCategories.map((cat) => (
            <div key={cat.num}>
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 pb-6 border-b border-white/5">
                <div className="flex items-baseline gap-5">
                  <span className="cat-num">{cat.num}</span>
                  <div>
                    <h2 className="text-[30px] sm:text-[40px] font-extrabold tracking-tight">{cat.title}</h2>
                    <p className="text-zinc-500 text-[14.5px] mt-1">{cat.sub}</p>
                  </div>
                </div>
                <span className="text-zinc-500 text-[13px]">{cat.count}</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {cat.items.map((item) => {
                  const Icon = iconMap[item.icon] || Sparkles;
                  return (
                    <div key={item.id} className="svc-card rounded-2xl p-7 group flex flex-col">
                      <div className="flex items-start justify-between mb-6">
                        <div className="w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center">
                          <Icon size={22} className="text-red-400" />
                        </div>
                        <span className="text-[11px] uppercase tracking-wider text-zinc-500 font-medium">{item.tagline}</span>
                      </div>
                      <h3 className="text-[20px] font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-[14px] text-zinc-400 leading-relaxed flex-1">{item.desc}</p>
                      <div className="mt-6 flex items-center gap-3">
                        <button onClick={() => openPricing(item.id)} className="text-red-300 hover:text-red-200 text-[14px] font-medium inline-flex items-center gap-1.5 group-hover:gap-2 transition-all">
                          View pricing <ArrowRight size={14} />
                        </button>
                        <span className="text-zinc-700">•</span>
                        <button onClick={() => openContact({ service: item.title })} className="text-zinc-400 hover:text-white text-[14px] transition-colors">
                          Enquire
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-28 border-t border-white/5">
        <div className="max-w-[820px] mx-auto px-6 text-center">
          <p className="eyebrow mb-4">Ready to build?</p>
          <h2 className="text-[40px] sm:text-[54px] font-extrabold tracking-tight leading-[1.05]">
            Not sure where to <span className="gradient-text">start?</span>
          </h2>
          <p className="mt-5 text-zinc-400 text-[16px]">
            Book a 30-minute strategy session and we will map out the best solution, technology, and quote for your goals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <button onClick={() => openContact({ service: 'Consultation' })} className="btn-primary">
              Book a Consultation <ArrowRight size={16} />
            </button>
            <button onClick={() => navigate('/')} className="btn-ghost">Back to Home</button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
