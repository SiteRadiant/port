import React from 'react';
import { Link } from 'react-router-dom';
import { footerLinks } from '../mock/mock';
import { useUI } from '../context/UIContext';

const Footer = () => {
  const { openContact } = useUI();

  return (
    <footer className="bg-transparent border-t border-white/5 py-12 mt-12">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title} className="col-span-1">
              <h3 className="text-[13px] font-bold text-white tracking-[0.1em] uppercase mb-5">{title}</h3>
              <ul className="space-y-3.5">
                {links.map((link) => {
                  let href = '#';
                  if (link === 'Websites') href = '/website-development';
                  if (link === 'Web Design') href = '/website-design';
                  if (link === 'Web Apps') href = '/web-application-development';
                  if (link === 'Landing Pages') href = '/landing-page-development';
                  if (link === 'E-Commerce') href = '/ecommerce-development';
                  if (link === 'AI Automation') href = '/ai-automation';
                  if (link === 'Blog') href = '/blog';
                  if (link === 'Website Cost India') href = '/website-cost-india';
                  if (link === 'Website vs Landing Page') href = '/website-vs-landing-page';
                  if (link === 'SEO Guidelines') href = '/seo-friendly-website';
                  if (link === 'Mumbai Web Dev') href = '/website-development-mumbai';
                  if (link === 'About') href = '/about';
                  if (link === 'FAQ') href = '/faq';
                  if (link === 'Privacy Policy') href = '/privacy';
                  if (link === 'Terms') href = '/terms-and-conditions';
                  
                  return (
                    <li key={link}>
                      {link === 'Contact' ? (
                        <button onClick={() => openContact()} className="text-[14.5px] text-zinc-400 hover:text-white transition-colors duration-200">{link}</button>
                      ) : (
                        <Link to={href} className="text-[14.5px] text-zinc-400 hover:text-white transition-colors duration-200">{link}</Link>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-white/5 pt-8 text-zinc-300 text-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">&copy; {new Date().getFullYear()} Global One Logistics And Distribution. All rights reserved.</div>
          
          <div className="flex items-center gap-6">
            <a href="https://x.com/siteradiant" target="_blank" rel="noreferrer" aria-label="Twitter / X" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="hidden sm:inline">Twitter / X</span>
            </a>
            <a href="https://instagram.com/siteradiant" target="_blank" rel="noreferrer" aria-label="Instagram" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="hidden sm:inline">Instagram</span>
            </a>
            <a href="https://github.com/SiteRadiant" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-white transition-colors flex items-center gap-2">
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
