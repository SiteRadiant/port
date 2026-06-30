import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SEO from '../components/SEO';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#070707] text-white">
      <SEO
        title="Terms and Conditions"
        description="Review the basic terms for using SiteRadiant's website and service enquiry forms."
        path="/terms-and-conditions"
      />
      <Navbar />
      <main className="max-w-4xl mx-auto px-6 py-24">
        <h1 className="text-4xl font-extrabold mb-8">Terms and Conditions</h1>
        <div className="space-y-8 text-zinc-400 leading-7">
          <p className="text-lg text-zinc-300">Welcome to SiteRadiant (a digital division of <strong>Global One Logistics and Distribution</strong>). By engaging our services, you agree to the following terms which govern our working relationship.</p>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Scope of Work & Deliverables</h2>
            <p>We provide design and development services tailored to your specific requirements, which generally include website setup, mobile optimization, SEO implementation, and (where applicable) payment gateway integration. Any features, assets, or work not explicitly listed in your finalized proposal are considered out of scope and will be subject to a separate fee estimate.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Compensation & Payment Terms</h2>
            <p>Payments are processed under our corporate entity <span className="font-bold text-white">Global One Logistics and Distribution</span> via Razorpay, Bank Transfer, or UPI. Our standard payment schedule is:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-zinc-200">Milestone 1:</strong> 25% <strong>non-refundable</strong> deposit prior to commencing work.</li>
              <li><strong className="text-zinc-200">Milestone 2:</strong> 25% upon your approval of the initial visual layout or design prototype.</li>
              <li><strong className="text-zinc-200">Milestone 3:</strong> 50% final payment due upon project completion and testing, strictly prior to live server deployment.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Revisions & Add-Ons</h2>
            <p>You are entitled to two rounds of consolidated revisions during the design phase. Major layout modifications requested after design approval, or beyond the allotted revision rounds, will be billed separately on a flat <strong className="text-white">"Per-Change" basis (see Annexure A)</strong>. No additional out-of-scope work will be performed or billed without your explicit written approval.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Client Responsibilities</h2>
            <p>To ensure a smooth project flow, we require you to provide all necessary text copy, high-resolution images, brand assets, and administrative credentials within 14 business days of signing an agreement. We are not responsible for project delays caused by a delay in receiving these assets or your feedback.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Intellectual Property & Ownership</h2>
            <p>All source code, graphics, and design assets developed by us remain the sole property of SiteRadiant until the final milestone payment is received in full. Upon full payment, complete legal ownership and rights automatically transfer to you. We retain the right to showcase the completed project in our portfolio.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Termination & Cancellation</h2>
            <p>Either party may terminate the agreement with 7 days written notice. If you choose to terminate the project before completion, the initial 25% deposit remains non-refundable. Additionally, you will be billed a prorated fee for all hours and work completed up to the termination date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Limitation of Liability</h2>
            <p>SiteRadiant shall not be liable for any lost profits, lost revenue, data loss, server downtime, or indirect consequential damages arising from the use of your website. Our total liability shall never exceed the total amount actually paid by you for the project.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Governing Law</h2>
            <p>This agreement shall be governed by and construed in accordance with the laws of India. Any legal disputes or claims arising out of this contract shall be settled exclusively in the courts located in India.</p>
          </section>
          
          <h2 className="text-2xl font-bold text-white mt-16 mb-4 pt-12 border-t border-zinc-800">
            ANNEXURE A: ADDITIONAL SITE CHANGES & ADD-ON MENU
          </h2>
          <p className="mb-6">
            (All prices are fixed and billed per item upon written approval)
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse border border-zinc-800">
              <thead>
                <tr className="bg-zinc-900/50">
                  <th className="p-4 border border-zinc-800 font-semibold text-white">Request/Change Type</th>
                  <th className="p-4 border border-zinc-800 font-semibold text-white">Description</th>
                  <th className="p-4 border border-zinc-800 font-semibold text-white">Rate (USD)</th>
                  <th className="p-4 border border-zinc-800 font-semibold text-white">Rate (INR)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="bg-zinc-900/20">
                  <td className="p-4 border border-zinc-800">Additional Standard Page</td>
                  <td className="p-4 border border-zinc-800">New page matching current design (like FAQ)</td>
                  <td className="p-4 border border-zinc-800"><strong>$50</strong></td>
                  <td className="p-4 border border-zinc-800"><strong>₹5,000</strong></td>
                </tr>
                <tr>
                  <td className="p-4 border border-zinc-800">Custom Feature Integration</td>
                  <td className="p-4 border border-zinc-800">Setup of Booking Calendar, Advanced Forms, etc.</td>
                  <td className="p-4 border border-zinc-800"><strong>$25</strong></td>
                  <td className="p-4 border border-zinc-800"><strong>₹1,500</strong></td>
                </tr>
                <tr className="bg-zinc-900/20">
                  <td className="p-4 border border-zinc-800">Payment Gateway Setup (if not e-commerce)</td>
                  <td className="p-4 border border-zinc-800">Integration of new payment processor</td>
                  <td className="p-4 border border-zinc-800"><strong>$35</strong></td>
                  <td className="p-4 border border-zinc-800"><strong>₹3,000</strong></td>
                </tr>
                <tr>
                  <td className="p-4 border border-zinc-800">Major Layout Redesign (Per Page)</td>
                  <td className="p-4 border border-zinc-800">Complete restructuring of an approved layout</td>
                  <td className="p-4 border border-zinc-800"><strong>$55</strong></td>
                  <td className="p-4 border border-zinc-800"><strong>₹5,000</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}