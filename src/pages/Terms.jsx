import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <SEO
        title="Terms of Service"
        description="Review the basic terms for using SiteRadiant's website and service enquiry forms."
        path="/terms"
      />
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold mb-6">Terms of Service</h1>
        <div className="space-y-6 text-zinc-400 leading-7">
          <p>By using this website, you agree to use it for lawful purposes and not attempt to interfere with its operation.</p>
          <p>Quotes, timelines, and deliverables shared during discovery are estimates until both sides agree in writing.</p>
          <p>We may update these terms as the business evolves. Continued use of the site means you accept the current version.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}