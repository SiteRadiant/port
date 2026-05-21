import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About(){
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold mb-4">About Site Radiant</h1>
        <p className="text-zinc-400 mb-6">We are a product engineering studio focusing on mobile apps, web platforms and AI-driven products. Our team ships reliable, scalable software and partners long-term with product and growth teams to build delightful experiences.</p>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          <div className="svc-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="text-zinc-400 mt-3">Deliver world-class software, fast. We focus on outcomes: retention, revenue, and growth for our partners.</p>
          </div>

          <div className="svc-card p-8 rounded-2xl">
            <h3 className="text-xl font-bold">Our Values</h3>
            <ul className="text-zinc-400 mt-3 list-disc list-inside">
              <li>High craftsmanship</li>
              <li>Product thinking</li>
              <li>Long-term partnerships</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <h3 className="text-lg font-bold mb-3">Contact</h3>
          <p className="text-zinc-400">For enquiries, use the Get a Quote button in the header or the contact dialog.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}
