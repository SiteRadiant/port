import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#070707] text-white flex items-center">
      <SEO
        title="Page Not Found"
        description="The requested page does not exist. Return to SiteRadiant's homepage or explore services."
        path="/404"
        noIndex
      />
      <main className="max-w-2xl mx-auto px-6 py-24 text-center">
        <p className="eyebrow mb-4">404</p>
        <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight">Page not found</h1>
        <p className="mt-6 text-zinc-400 text-lg">The page you were looking for does not exist. Use the links below to continue.</p>
        <div className="mt-10 flex flex-col sm:flex-row gap-3 justify-center">
          <Link to="/" className="btn-primary justify-center">Back to Home</Link>
          <Link to="/services" className="btn-ghost justify-center">View Services</Link>
        </div>
      </main>
    </div>
  );
}