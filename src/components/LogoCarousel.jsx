import React from 'react';
import { partnerLogos } from '../mock/mock';

const LogoBadge = ({ name, color }) => {
  const initial = name.charAt(0).toUpperCase();
  const isLight = color === '#ffffff' || color === '#FFFC00' || color === '#9FE870';
  return (
    <div className="logo-chip">
      <span className="logo-dot" style={{ background: color, color: isLight ? '#0a0a0b' : '#fff', border: color === '#000000' ? '1px solid rgba(255,255,255,0.15)' : 'none' }}>
        {initial}
      </span>
      <span>{name}</span>
    </div>
  );
};

const LogoCarousel = () => {
  const doubled = [...partnerLogos, ...partnerLogos];
  return (
    <section className="py-16 border-t border-white/5">
      <p className="text-center text-[11px] tracking-[0.2em] uppercase text-zinc-500 mb-10">
        Trusted by the world’s best product teams
      </p>
      <div className="fade-edges">
        <div className="marquee">
          <div className="marquee-track">
            {doubled.map((l, i) => (
              <LogoBadge key={i} name={l.name} color={l.color} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoCarousel;

