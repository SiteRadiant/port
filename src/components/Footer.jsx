import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-transparent border-t border-white/5 py-8 mt-12">
    <div className="max-w-6xl mx-auto px-6 text-zinc-400 text-sm flex flex-col sm:flex-row items-center justify-between gap-4">
      <div>© {new Date().getFullYear()} Site Radiant. All rights reserved.</div>
      <div className="flex gap-4">
        <Link to="/privacy" className="hover:underline">Privacy</Link>
        <Link to="/terms" className="hover:underline">Terms</Link>
      </div>
    </div>
  </footer>
);

export default Footer;
