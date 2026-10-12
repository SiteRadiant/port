import React from 'react';
import { processSteps } from '../mock/mock';
import { Clock, Zap, Rocket } from 'lucide-react';

const iconMap = { clock: Clock, zap: Zap, rocket: Rocket };

const Process = () => {
  return (
    <section className="py-14 sm:py-20 lg:py-24 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-14">
          <p className="eyebrow mb-3 sm:mb-4">The Process</p>
          <h2 className="text-[28px] sm:text-[40px] lg:text-[52px] font-extrabold leading-[1.08] tracking-tight">
            Idea to launch in three steps
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {processSteps.map((s) => {
            const Icon = iconMap[s.icon];
            return (
              <div key={s.num} className="step-card group hover:border-red-500/35 transition-colors">
                <div className="flex items-center justify-between mb-6 sm:mb-10">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-red-500/10 border border-red-500/25 flex items-center justify-center">
                    <Icon size={18} className="text-red-300" />
                  </div>
                  <span className="text-[13px] text-zinc-600 font-mono">{s.num}</span>
                </div>
                <h3 className="text-[18px] sm:text-[20px] font-semibold text-white mb-2 sm:mb-3">{s.title}</h3>
                <p className="text-[13.5px] sm:text-[14px] text-zinc-400 leading-relaxed">{s.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Process;
