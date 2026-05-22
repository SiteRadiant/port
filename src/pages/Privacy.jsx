import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <SEO
        title="Privacy Policy"
        description="Read how SiteRadiant handles contact form submissions, analytics, and customer data."
        path="/privacy"
      />
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold mb-6">Privacy Policy</h1>
        <div className="space-y-6 text-zinc-400 leading-7">
          <p>We only collect the information needed to respond to enquiries, deliver services, and improve the site experience.</p>
          <p>Contact form submissions may be sent to our internal workflow tools so we can follow up with you and provide a quote.</p>
          <p>We do not sell your data. If you have a privacy request, reach out through the contact form on the website.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}