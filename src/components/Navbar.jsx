import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { navLinks, BRAND } from '../mock/mock';
import { useUI } from '../context/UIContext';

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 group">
    <div className="relative">
      <div className="absolute -inset-1 rounded-2xl blur-[10px] opacity-20 bg-gradient-to-br from-red-600 to-red-800" />
      <div className="relative w-10 h-10 rounded-2xl bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center border border-white/8 overflow-hidden">
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
                <Link to={link.href} className="nav-link py-2">
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-70" />}
                </Link>
              ) : (
                <button type="button" className="nav-link py-2">
                  {link.label}
                  {link.hasDropdown && <ChevronDown size={14} className="opacity-70" />}
                </button>
              )}
              {link.hasDropdown && hovered === link.label && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 min-w-[240px]">
                  <div className="bg-[#111114] border border-white/10 rounded-xl shadow-2xl overflow-hidden p-2">
                    {link.items.map((item) => (
                      <button
                        key={item.slug}
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
          <button onClick={() => openContact()} className="btn-primary !py-2 !px-5 !text-[14px]">
            Get a Quote
          </button>
        </div>

        <button className="lg:hidden text-white" onClick={() => setOpenMobile(!openMobile)}>
          {openMobile ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {openMobile && (
        <div className="lg:hidden bg-[#0a0a0b] border-t border-white/5 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            link.href && link.href !== '#' ? (
              <Link key={link.label} to={link.href} className="block w-full text-left text-zinc-300 py-2" onClick={() => setOpenMobile(false)}>
                {link.label}
              </Link>
            ) : (
              <button key={link.label} type="button" className="block w-full text-left text-zinc-300 py-2">
                {link.label}
              </button>
            )
          ))}
          <div className="pt-3 border-t border-white/10 flex gap-3">
            <Link to="/services" onClick={() => setOpenMobile(false)} className="flex-1 btn-ghost justify-center !py-2">Pricing</Link>
            <button onClick={() => { openContact(); setOpenMobile(false); }} className="flex-1 btn-primary justify-center !py-2">Get a Quote</button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;


