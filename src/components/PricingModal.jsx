import React, { useEffect, useState } from 'react';
import { X, Check, ArrowRight, Sparkles } from 'lucide-react';
import { pricingData } from '../mock/mock';
import { useUI } from '../context/UIContext';
import { useCurrency } from '../hooks/useCurrency';
import CountrySelector from './CountrySelector';

const PricingModal = ({ serviceId, onClose }) => {
  const data = pricingData[serviceId];
  const { openContact } = useUI();
  const [includeAddon, setIncludeAddon] = useState(false);
  const { formatAmount, currentRegion, regionCode, hostingAddon } = useCurrency();

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  if (!data) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6 md:p-8 overflow-y-auto" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#0e0e10] border border-white/10 rounded-2xl max-w-[1100px] w-full max-h-[92vh] overflow-y-auto my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 sm:top-4 sm:right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-zinc-300 transition z-10"
        >
          <X size={16} />
        </button>

        <div className="p-5 sm:p-8 md:p-10 border-b border-white/5">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3 sm:mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-red-500/30 bg-red-500/10 text-red-300 text-[11px] sm:text-[12px] font-medium">
              <Sparkles size={12} /> {data.tagline}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-zinc-400 hidden sm:inline">Region:</span>
              <CountrySelector compact={true} />
            </div>
          </div>
          <h2 className="text-[24px] sm:text-[32px] md:text-[36px] font-extrabold tracking-tight text-white">
            {data.title} <span className="text-zinc-500">plans &amp; pricing</span>
          </h2>
          <p className="mt-2 sm:mt-3 text-zinc-400 text-[14px] sm:text-[16px] max-w-[640px]">{data.subtitle}</p>
          <p className="mt-2 text-[12px] sm:text-[13px] text-zinc-500">
            Transparent, project-based pricing in {currentRegion.currency} ({currentRegion.name}). No hidden fees.
          </p>
        </div>

        <div className="flex justify-center items-center gap-3 sm:gap-4 py-4 sm:py-6 border-b border-white/5 bg-white/[0.02] px-4">
          <span className={`text-[13px] sm:text-[14px] transition-colors ${!includeAddon ? 'text-white font-bold' : 'text-zinc-500'}`}>Standard Setup</span>
          
          <button 
            onClick={() => setIncludeAddon(!includeAddon)}
            className={`relative w-12 sm:w-14 h-6 sm:h-7 rounded-full p-1 transition-colors duration-300 ease-in-out ${includeAddon ? 'bg-red-500' : 'bg-zinc-700'}`}
          >
            <div className={`w-4 sm:w-5 h-4 sm:h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${includeAddon ? 'translate-x-6 sm:translate-x-7' : 'translate-x-0'}`} />
          </button>
          
          <span className={`text-[13px] sm:text-[14px] flex items-center gap-1.5 sm:gap-2 transition-colors ${includeAddon ? 'text-white font-bold' : 'text-zinc-500'}`}>
            + Managed Hosting <span className="badge-soft ml-1 hidden sm:inline-flex">Recommended</span>
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 p-4 sm:p-6 md:p-10">
          {data.plans.map((plan) => {
            const regionalPricing = plan.pricing?.[regionCode];
            const basePrice = regionalPricing?.price !== undefined ? regionalPricing.price : (regionCode === 'IN' ? plan.price : null);
            const originalPrice = regionalPricing?.original !== undefined ? regionalPricing.original : (regionCode === 'IN' ? plan.original : null);

            const hasConfiguredPrice = basePrice !== null && basePrice !== undefined;
            const displayPrice = hasConfiguredPrice
              ? (includeAddon && basePrice > 0 ? basePrice + hostingAddon : basePrice)
              : null;
            
            return (
              <div key={plan.name} className={`plan-card ${plan.popular ? 'popular' : ''}`}>
              <div className="flex items-center justify-between mb-3">
                {plan.badge && <span className="badge-soft">{plan.badge}</span>}
                {plan.popular && <span className="badge-soft">Most Popular</span>}
              </div>
              <h3 className="text-[22px] font-bold text-white">{plan.name}</h3>
              <p className="mt-1.5 text-[13px] text-zinc-400 min-h-[36px]">{plan.desc}</p>
              
              <div className="mt-5 flex items-baseline gap-2">
                {hasConfiguredPrice && originalPrice && (
                  <span className="text-zinc-600 line-through text-[16px]">{formatAmount(originalPrice)}</span>
                )}
                <span className="text-[34px] font-extrabold text-white tracking-tight">
                  {hasConfiguredPrice ? formatAmount(displayPrice) : 'Get a Quote'}
                </span>
              </div>

              <span className="text-[12px] text-zinc-500">
                Payment Milestones · {regionCode === 'IN' ? 'exclusive GST' : 'all taxes applicable locally'}
                {includeAddon && hasConfiguredPrice && basePrice > 0 && (
                  <span className="block mt-1 text-red-400">Includes {formatAmount(hostingAddon)} Hosting Add-on</span>
                )}
              </span>

              <ul className="mt-6 space-y-3 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-[13.5px] text-zinc-300">
                    <Check size={15} className="text-red-400 mt-0.5 flex-shrink-0" />
                    <span className={f.startsWith('Everything in') ? 'font-bold text-white' : ''}>{f}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => openContact({
                  service: data.title,
                  plan: plan.name,
                  price: hasConfiguredPrice ? displayPrice : undefined,
                  region: currentRegion.name,
                  currency: currentRegion.currency
                })}
                className={plan.popular ? 'btn-primary mt-7 justify-center' : 'btn-ghost mt-7 justify-center'}
              >
                {hasConfiguredPrice ? 'Get Started' : 'Get a Quote'} <ArrowRight size={15} />
              </button>
            </div>
            );
          })}
        </div>

        <div className="px-6 sm:px-10 pb-8 text-center">
          <p className="text-[13px] text-zinc-500">
            Final pricing is confirmed after a free 30-minute strategy session.{' '}
            <button onClick={() => openContact({ service: data.title })} className="text-red-300 hover:text-red-200 underline-offset-2 hover:underline">
              Book a session →
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PricingModal;
