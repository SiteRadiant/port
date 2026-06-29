import React from 'react';
import {Calendar, Code2, Heart, Lightbulb, Mail, Rocket, ShieldCheck, Users } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

const topStats = [
  { icon: Users, value: '60+', label: 'Specialists' },
  { icon: Calendar, value: '2026', label: 'Founded' },
  { icon: Rocket, value: '150+', label: 'Projects Delivered' },
];

const values = [
  {
    icon: Lightbulb,
    color: 'from-red-500/30 to-red-400/5',
    title: 'Clarity First',
    text: 'We explain tradeoffs clearly and align decisions with business outcomes.',
  },
  {
    icon: ShieldCheck,
    color: 'from-red-500/30 to-red-400/5',
    title: 'Trust by Default',
    text: 'Transparent delivery, proactive updates, and no surprises in execution.',
  },
  {
    icon: Rocket,
    color: 'from-red-500/25 to-red-400/5',
    title: 'Speed with Quality',
    text: 'Fast iteration with robust engineering standards and strong QA discipline.',
  },
  {
    icon: Lightbulb,
    color: 'from-red-500/30 to-red-400/5',
    title: 'Global-Ready Thinking',
    text: 'Products are designed for diverse users, regions, and compliance contexts.',
  },
  {
    icon: Heart,
    color: 'from-red-500/25 to-red-400/5',
    title: 'Long-Term Partnership',
    text: 'We optimize for durable product growth, not one-off delivery milestones.',
  },
  {
    icon: Code2,
    color: 'from-red-500/25 to-red-400/5',
    title: 'Engineering Excellence',
    text: 'Clean architecture, observability, and maintainable code from day one.',
  },
];

export default function About() {
  return (
    <div className="min-h-screen bg-[#06070b] text-white overflow-hidden">
      <SEO
        title="About — SiteRadiant"
        description="SiteRadiant builds technology that helps ambitious teams launch, scale, and grow faster."
        path="/about"
      />
      <Navbar />

      <section className="relative pt-28 pb-20">
        <div className="absolute inset-0 grid-bg opacity-25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(185,28,28,0.18),transparent_50%)]" />
        <div className="absolute left-1/2 top-20 -translate-x-1/2 w-[760px] h-[760px] rounded-full bg-red-500/15 blur-[140px] float-glow" />

        <div className="relative max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[12px] text-zinc-300 mb-8 reveal-up">
            <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
          SITERADIANT TECHNOLOGY 
          </div>

          <h1 className="text-[44px] sm:text-[64px] lg:text-[78px] font-extrabold leading-[1.03] tracking-tight reveal-up delay-1">
            We build technology that
            <br />
            <span className="bg-gradient-to-r from-red-400 to-red-300 bg-clip-text text-transparent">moves businesses forward.</span>
          </h1>

          <p className="mt-7 text-zinc-400 text-[18px] max-w-3xl mx-auto leading-relaxed reveal-up delay-2">
            From strategy to shipping, SiteRadiant helps teams launch modern websites, software products, and automation systems with precision, speed, and measurable impact.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 justify-center reveal-up delay-3">
            {topStats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="min-w-[170px] px-5 py-3 rounded-full border border-white/10 bg-white/[0.03] flex items-center justify-center gap-2 stat-chip">
                  <Icon size={14} className="text-red-300" />
                  <span className="font-semibold text-white">{item.value}</span>
                  <span className="text-zinc-400 text-sm">{item.label}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-red-400 text-sm tracking-[0.16em] uppercase mb-5">How We Work</p>
          <h2 className="text-[38px] sm:text-[52px] font-extrabold leading-[1.05] mb-10 max-w-2xl">
            The values that shape every project
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
            {values.map((v, idx) => {
              const Icon = v.icon;
              return (
                <article key={v.title} className="rounded-2xl border border-white/8 bg-[#12131a] p-6 value-card" style={{ animationDelay: `${idx * 90}ms` }}>
                  <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${v.color} border border-white/10 flex items-center justify-center mb-5`}>
                    <Icon size={18} className="text-zinc-200" />
                  </div>
                  <h3 className="text-xl font-semibold">{v.title}</h3>
                  <p className="mt-3 text-zinc-400 leading-relaxed">{v.text}</p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#12131a] border-y border-white/5">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-red-400 text-sm tracking-[0.16em] uppercase mb-4">Where We Are</p>
          <h2 className="text-[40px] font-extrabold"> Team</h2>
          <p className="mt-4 text-zinc-400 max-w-3xl">Our delivery model combines on-ground collaboration with distributed expertise to support teams across regions and time zones.</p>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-2xl border border-red-500/25 bg-[radial-gradient(circle_at_70%_30%,rgba(239,68,68,0.16),transparent_50%)] p-6 office-card">
              <div className="text-xs tracking-[0.12em] uppercase text-red-300 mb-2">Headquarters</div>
              <h3 className="text-2xl font-semibold">Navi Mumbai, Maharashtra</h3>
              <p className="mt-3 text-zinc-400 leading-relaxed">Remote</p>
            </div>
          </div>

          <div className="mt-4 rounded-xl border border-white/10 bg-[#090b12] px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-red-500/20 flex items-center justify-center">
                <Mail size={15} className="text-red-300" />
              </div>
              <div>
                <div className="text-xs text-zinc-500">General Support</div>
                <a className="font-semibold text-red-300 hover:text-red-200" href="mailto:support@siteradiant.co.in">support@siteradiant.co.in</a>
              </div>
              <div></div>
              <div>
                <div className="text-xs text-zinc-500">Contact Support</div>
                <a className="font-semibold text-red-300 hover:text-red-200" href="tel:+919372746969">+91 9372746969</a>
              </div>
            </div>
            <div className="text-sm text-zinc-500">Mon-Sat, 3 PM - 9 PM IST</div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="rounded-2xl border border-white/10 bg-[#14151d] p-7">
            <p className="text-xs tracking-[0.14em] uppercase text-zinc-500 mb-5">Registered Company Details</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-zinc-500 mb-1">Legal Name</div>
                <div className="font-semibold">Global One Logistics And Distribution</div>
              </div>
              <div></div>
              <div>
                <div className="text-zinc-500 mb-1">Support Email</div>
                <a className="font-semibold text-red-300 hover:text-red-200" href="mailto:support@siteradiant.co.in">support@siteradiant.co.in</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style>{`
        .reveal-up {
          opacity: 0;
          transform: translateY(14px);
          animation: revealUp 700ms ease forwards;
        }
        .delay-1 { animation-delay: 100ms; }
        .delay-2 { animation-delay: 220ms; }
        .delay-3 { animation-delay: 340ms; }
        .float-glow {
          animation: floatGlow 8s ease-in-out infinite;
        }
        .value-card {
          opacity: 0;
          transform: translateY(12px);
          animation: revealUp 650ms ease forwards;
          transition: transform 220ms ease, border-color 220ms ease, box-shadow 220ms ease;
        }
        .value-card:hover {
          transform: translateY(-4px);
          border-color: rgba(255,255,255,0.18);
          box-shadow: 0 18px 40px rgba(0,0,0,0.35);
        }
        .stat-chip {
          transition: transform 220ms ease, border-color 220ms ease;
        }
        .stat-chip:hover {
          transform: translateY(-2px);
          border-color: rgba(248,113,113,0.5);
        }
        .office-card {
          transition: transform 220ms ease, box-shadow 220ms ease;
        }
        .office-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 35px rgba(0,0,0,0.28);
        }
        @keyframes revealUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes floatGlow {
          0%, 100% {
            transform: translate(-50%, 0px);
          }
          50% {
            transform: translate(-50%, 16px);
          }
        }
      `}</style>
    </div>
  );
}
