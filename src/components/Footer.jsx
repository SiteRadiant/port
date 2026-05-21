import React from 'react';

const Footer = () => (
  <footer className="bg-transparent border-t border-white/5 py-8 mt-12">
    <div className="max-w-6xl mx-auto px-6 text-zinc-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© {new Date().getFullYear()} SiteRadiant. All rights reserved.</div>
      <div className="flex gap-4">
        <a href="/privacy" className="hover:underline">Privacy</a>
        <a href="/terms" className="hover:underline">Terms</a>
      </div>
    </div>
  </footer>
);

export default Footer;
