import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Check, Globe } from 'lucide-react';
import { useRegion } from '../context/RegionContext';

export default function CountrySelector({ compact = false }) {
  const { currentRegion, selectRegion, regions } = useRegion();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleOutsideClick);
      document.addEventListener('touchstart', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('touchstart', handleOutsideClick);
    };
  }, [isOpen]);

  const regionList = Object.values(regions);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={`Select region: current is ${currentRegion.name}`}
        className={`flex items-center gap-1.5 transition-all rounded-lg border border-white/10 bg-white/[0.04] hover:bg-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white ${
          compact ? 'px-2 py-1 text-xs' : 'px-2.5 py-1.5 text-xs sm:text-sm font-medium'
        }`}
      >
        <span className="text-base leading-none select-none" role="img" aria-label={currentRegion.name}>
          {currentRegion.flag}
        </span>
        <span className="font-semibold text-zinc-200">{currentRegion.currency}</span>
        <ChevronDown
          size={13}
          className={`opacity-60 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          role="listbox"
          className="absolute right-0 mt-2 w-52 rounded-xl bg-[#121215] border border-white/10 shadow-2xl p-1.5 z-50 backdrop-blur-xl animate-in fade-in slide-in-from-top-2 duration-150"
        >
          <div className="px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-zinc-500 border-b border-white/5 mb-1 flex items-center justify-between">
            <span>Select Region</span>
            <Globe size={11} className="text-zinc-500" />
          </div>
          <div className="space-y-0.5">
            {regionList.map((region) => {
              const isSelected = region.code === currentRegion.code;
              return (
                <button
                  key={region.code}
                  role="option"
                  aria-selected={isSelected}
                  onClick={() => {
                    selectRegion(region.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs rounded-lg transition-colors text-left ${
                    isSelected
                      ? 'bg-red-500/15 text-red-300 font-semibold'
                      : 'text-zinc-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5 truncate">
                    <span className="text-base select-none">{region.flag}</span>
                    <span className="truncate">{region.name}</span>
                  </span>
                  <span className="flex items-center gap-1.5 ml-2">
                    <span className="text-[11px] text-zinc-400 font-mono font-medium">
                      {region.currency}
                    </span>
                    {isSelected && <Check size={13} className="text-red-400 flex-shrink-0" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
