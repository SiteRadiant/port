import React from 'react';
import { processSteps } from '../mock/mock';
import { Clock, Zap, Rocket } from 'lucide-react';

const iconMap = { clock: Clock, zap: Zap, rocket: Rocket };

const Process = () => {
  return (
    <section className="py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-4">The Process</p>
          <h2 className="text-[40px] sm:text-[52px] font-extrabold leading-[1.08] tracking-tight">
            Idea to launch in three steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.num} className="step-card group hover:border-red-500/35 transition-colors">
                <div className="flex items-center justify-between mb-12">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                    <Icon size={18} className="text-red-300" />
                  </div>
                  <span className="text-[13px] text-zinc-600 font-mono">{s.num}</span>
                </div>
                <h3 className="text-[20px] font-semibold text-white mb-3">{s.title}</h3>
                <p className="text-[14px] text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
