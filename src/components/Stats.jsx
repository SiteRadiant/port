import React, { useEffect, useRef, useState } from 'react';

// Helper: format number with commas
const fmt = (n) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');

const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

const Counter = ({ to, suffix = '', duration = 1200, play = true }) => {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!play) return;
    let start = null;
    const from = 0;
    const tick = (ts) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const raw = Math.min(elapsed / duration, 1);
      const progress = easeOutCubic(raw);
      const current = Math.round(from + (to - from) * progress);
      setValue(current);
      if (raw < 1) rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    startRef.current = start;
    return () => cancelAnimationFrame(rafRef.current);
  }, [to, duration, play]);

  return (
    <div className="text-center">
      <div className="text-[72px] sm:text-[96px] font-extrabold leading-none text-white">{fmt(value)}{suffix}</div>
    </div>
  );
};

export default function Stats({ imageSrc = '/images/stats-placeholder.svg' }) {
  const nodeRef = useRef(null);
  const [play, setPlay] = useState(false);

  // data for stats
  const stats = [
    { label: 'Projects Delivered', value: 150, suffix: '+' },
    { label: 'Client Satisfaction', value: 98, suffix: '%' },
    { label: 'Industries Served', value: 25, suffix: '+' },
    { label: 'Countries Served', value: 18, suffix: '+' },
  ];

  useEffect(() => {
    if (!nodeRef.current) return;
    const el = nodeRef.current;
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setPlay(true);
          obs.disconnect();
        }
      });
    }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="py-20" ref={nodeRef}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl">
          {/* Decorative background image (replace file in public/images to customize) */}
          <img src={imageSrc} alt="stats background" className="absolute inset-0 w-full h-full object-cover opacity-20 -z-10" />

          <div className="bg-[#070707]/80 backdrop-blur-sm border border-white/5 py-20 px-6 sm:px-12 rounded-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center text-center">
              {stats.map((s) => (
                <div key={s.label}>
                  <Counter to={s.value} suffix={s.suffix} duration={1400} play={play} />
                  <div className="mt-3 text-zinc-400 text-[15px]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
