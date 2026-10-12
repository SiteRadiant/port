import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { navLinks, BRAND } from '../mock/mock';
import { useUI } from '../context/UIContext';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="relative">
      <div className="absolute -inset-1 rounded-2xl blur-[10px] opacity-20 bg-gradient-to-br from-red-600 to-red-800" />
      <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center overflow-hidden">
        <img
          src="/android-chrome-192x192.png"
          alt="SiteRadiant logo"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
    <span className="text-white font-semibold text-[18px] tracking-tight">{BRAND}</span>
  </Link>
);

const Navbar = () => {
  const [openMobile, setOpenMobile] = useState(false);
  const [hovered, setHovered] = useState(null);
  const navigate = useNavigate();
  const { openPricing, openContact } = useUI();

  const handleItemClick = (item) => {
    if (item.slug) {
      navigate('/services');
      setTimeout(() => openPricing(item.slug), 250);
    } else if (item.href) {
      navigate(item.href);
    }
    setHovered(null);
    setOpenMobile(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 navbar-blur">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8 h-16 flex items-center justify-between">
        <Logo />

        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative"
              onMouseEnter={() => setHovered(link.label)}
              onMouseLeave={() => setHovered(null)}
            >
              {link.href && link.href !== '#' ? (
                link.href.startsWith('http') ? (
                  <a href={link.href} target="_blank" rel="noreferrer" className="nav-link py-2">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="nav-link py-2">
                    {link.label}
                    {link.hasDropdown && <ChevronDown size={14} className="opacity-70" />}
                  </Link>
                )
              ) : (
                <button type="button" className="nav-link py-2">
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-70" />}
                </button>
              )}
              {link.hasDropdown && hovered === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[240px] animate-in fade-in slide-in-from-top-2 duration-200">
                  <div className="bg-[#111114] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2">
                    {link.items.map((item) => (
                      <button
                        key={item.slug || item.href}
                        onClick={() => handleItemClick(item)}
                        className="w-full text-left text-sm text-zinc-300 hover:text-white hover:bg-red-500/10 px-3 py-2 rounded-lg transition-colors"
                      >
                        {item.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link to="/services" className="nav-link">Pricing</Link>
          <a href="https://razorpay.me/@siteradiant" target="_blank" rel="noreferrer" className="btn-ghost !py-2 !px-5 !text-[14px] border border-red-500/30 text-red-400 hover:bg-red-500/10">
            Donate
          </a>
          <button onClick={() => openContact()} className="btn-primary !py-2 !px-5 !text-[14px]">
            Get a Quote
          </button>
        </div>

        <button 
          className="lg:hidden text-white w-10 h-10 flex items-center justify-center rounded-lg hover:bg-white/5 transition" 
          onClick={() => setOpenMobile(!openMobile)}
          aria-label={openMobile ? "Close navigation menu" : "Open navigation menu"}
        >
          {openMobile ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {openMobile && (
        <div className="lg:hidden bg-[#0a0a0b]/98 backdrop-blur-xl border-t border-white/10 px-6 py-5 space-y-3.5 overflow-y-auto max-h-[85vh] shadow-2xl animate-in fade-in slide-in-from-top-4 duration-300">
          {navLinks.map((link) => (
            <div key={link.label} className="space-y-1">
              {link.href && link.href !== '#' ? (
                link.href.startsWith('http') ? (
                  <a href={link.href} target="_blank" rel="noreferrer" className="block w-full text-left text-zinc-100 font-medium py-2.5 text-[15px]" onClick={() => setOpenMobile(false)}>
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="block w-full text-left text-zinc-100 font-medium py-2.5 text-[15px]" onClick={() => setOpenMobile(false)}>
                    {link.label}
                  </Link>
                )
              ) : (
                <div className="text-zinc-500 font-semibold text-xs uppercase tracking-wider pt-2.5 pb-1">
                  {link.label}
                </div>
              )}
              {link.hasDropdown && (
                <div className="pl-4 border-l border-white/10 space-y-1.5 mt-1">
                  {link.items.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => handleItemClick(item)}
                      className="block w-full text-left text-zinc-400 hover:text-white py-2 text-[14px]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          ))}
          <div className="pt-4 border-t border-white/10 flex flex-col gap-3">
            <div className="flex gap-2.5">
              <Link to="/services" onClick={() => setOpenMobile(false)} className="flex-1 btn-ghost justify-center min-h-[44px] !py-2.5 text-[14px]">Pricing</Link>
              <a href="https://razorpay.me/@siteradiant" target="_blank" rel="noreferrer" onClick={() => setOpenMobile(false)} className="flex-1 btn-ghost justify-center min-h-[44px] !py-2.5 text-[14px] border border-red-500/30 text-red-400 hover:bg-red-500/10">Donate</a>
            </div>
            <button onClick={() => { openContact(); setOpenMobile(false); }} className="w-full btn-primary justify-center min-h-[44px] !py-2.5 text-[15px]">Get a Quote</button>
            <a 
              href="https://wa.me/917208999095?text=Hi%20SiteRadiant%2C%20I%20would%20like%20to%20discuss%20a%20website%20project." 
              target="_blank" 
              rel="noreferrer" 
              onClick={() => setOpenMobile(false)}
              className="w-full text-center py-2 text-xs text-emerald-400 hover:text-emerald-300 font-medium transition"
            >
              💬 Or chat directly on WhatsApp (+91 72089 99095)
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


