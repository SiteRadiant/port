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
            <h2 className="text-xl font-bold text-white mb-3">1. SCOPE OF WORK & DELIVERABLES</h2>
            <p>The Service Provider, operating through its digital division SiteRadiant, agrees to perform design and development services as specified below:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li>Setup and design of a [Number]-page website (Pages: Home, About, Services, etc.).</li>
              <li>Mobile responsive layout and cross-device optimization.</li>
              <li>Integration of standard contact forms and corporate social media links.</li>
              <li>[Basic / Standard / Advanced] search engine optimization (SEO) implementation.</li>
              <li>Payment gateway integration (applicable only if an e-commerce plan is selected).</li>
            </ul>
            <p className="mt-3">Any work, assets, custom functionalities, or feature requests not explicitly listed in this section or in an attached annexure shall be considered out-of-scope and subject to a separate fee estimate.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. COMPENSATION & PAYMENT TERMS</h2>
            <p>The total fee for the project is fixed at [₹₹₹ / $$$]. Payments shall be processed under the corporate entity "Global One Logistics and Distribution" via [Razorpay MoneySaver / Bank Transfer / UPI] according to the following strict milestones:</p>
            <ul className="list-disc pl-5 mt-2 space-y-1">
              <li><strong className="text-zinc-200">Milestone 1:</strong> 25% non-refundable deposit due immediately upon signing, before any design or development work commences.</li>
              <li><strong className="text-zinc-200">Milestone 2:</strong> 25% progress payment due upon the Client's structural approval of the visual website layout, wireframe, or design prototype.</li>
              <li><strong className="text-zinc-200">Milestone 3:</strong> 50% final balance payment due immediately upon completion of functional development and staging testing. This final payment must be settled in full prior to live server deployment or the handover of administrative credentials.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. REVISIONS, CHANGE ORDERS, AND ADD-ONS</h2>
            <p>The Client is entitled to a maximum of [Number, e.g., 2] rounds of consolidated revisions during the design prototype stage.</p>
            <p className="mt-2">Any major structural modifications requested after design approval, or any requests beyond the allotted rounds, will be billed on a flat "Per-Change" basis in accordance with the Service Provider's standard Add-On Rate Menu (Annexure A). No additional work will be performed or billed without the Client’s explicit, written approval of a specific fixed-price quote before the work begins.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. CLIENT RESPONSIBILITIES & PROJECT ABANDONMENT</h2>
            <p><strong className="text-zinc-200">Asset Delivery:</strong> The Client agrees to provide all text copy, high-resolution images, corporate logos, and required administrative login credentials within [Number, e.g., 14] business days of signing this contract. The Service Provider is not responsible for project delays caused by the Client’s failure to provide assets or feedback in a timely manner.</p>
            <p className="mt-2"><strong className="text-zinc-200">Project Abandonment (Ghosting Clause):</strong> If the Client fails to provide necessary assets, feedback, or communication for a period exceeding 30 consecutive calendar days, the project will be deemed "Abandoned." In such an event, all work will be paused, all fees paid up to that date will be forfeited to the service provider, and a flat reactivation fee of [₹₹₹ / $$$] will apply to resume the project at a later date.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. INTELLECTUAL PROPERTY & OWNERSHIP TRANSFER</h2>
            <p>All intellectual property rights, source code, graphics, and design assets developed under this Agreement remain the sole property of the Service Provider until the final Milestone 3 payment is received and cleared in full.</p>
            <p className="mt-2">Upon receipt of the final milestone payment, full legal ownership, rights, and titles shall automatically transfer to the Client. The Service Provider retains the permanent right to display screenshots and links of the completed website in their professional portfolio under the brand name SiteRadiant.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. TERMINATION & CANCELLATION</h2>
            <p>Either party may terminate this Agreement at any time with [Number, e.g., 7] days written notice.</p>
            <p className="mt-2">If the Client terminates the project before final deployment, the initial 25% deposit (Milestone 1) remains entirely non-refundable. Additionally, the Client shall pay a prorated fee corresponding to the percentage of work completed up to the date of termination (e.g., if a milestone is in-progress but not yet fully approved, the Service Provider will assess a fair percentage of completion), as documented by the Service Provider.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. POST-LAUNCH WARRANTY & SUPPORT</h2>
            <p>Upon successful live deployment, the Service Provider provides a [Number, e.g., 14 or 30]-day complimentary warranty period. This warranty strictly covers the fixing of unexpected bugs, broken links, or structural alignment issues that deviate from the approved staging version. It does not cover new feature additions, layout redesigns, or content changes, which will be billed separately under Annexure A.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. LIMITATION OF LIABILITY</h2>
            <p>The Service Provider shall not be liable for any lost profits, lost revenue, data loss, server downtime, security breaches, or indirect consequential damages arising from the use or inability to use the website. In no event shall the Service Provider’s total liability exceed the total exact amount actually paid by the Client under this Agreement.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. GOVERNING LAW AND JURISDICTION</h2>
            <p className="text-sm italic mb-2">[CHOOSE OPTION A OR OPTION B AND DELETE THE OTHER]</p>
            <p><strong>[OPTION A: FOR INTERNATIONAL CLIENTS]</strong> This Agreement shall be governed by, and construed in accordance with, the laws of India. Any legal dispute, controversy, or claim arising out of this contract shall be settled exclusively in the courts located in [Your City/State, India], and the Client hereby consents to the personal jurisdiction of such courts.</p>
            <p className="mt-2"><strong>[OPTION B: FOR DOMESTIC/NATIONAL CLIENTS]</strong> This Agreement shall be governed by the laws of India. Any disputes arising out of this contract shall be subject to the exclusive jurisdiction of the courts located in [Your City/State, India].</p>
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
                  <td className="p-4 border border-zinc-800">New Page matching current design like FAQs</td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">$50</strong></td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">₹1500</strong></td>
                </tr>
                <tr>
                  <td className="p-4 border border-zinc-800">Custom Feature Integration</td>
                  <td className="p-4 border border-zinc-800">Setup of Booking Calendar, Advanced Forms etc</td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">$25</strong></td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">₹5000</strong></td>
                </tr>
                <tr className="bg-zinc-900/20">
                  <td className="p-4 border border-zinc-800">Payment Gateway Setup (if not e-commerce)</td>
                  <td className="p-4 border border-zinc-800">Integration of new payment processor</td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">$35</strong></td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">₹3000</strong></td>
                </tr>
                <tr>
                  <td className="p-4 border border-zinc-800">Major Layout Redesign (Per Page)</td>
                  <td className="p-4 border border-zinc-800">Complete restructuring of an approved layout</td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">$55</strong></td>
                  <td className="p-4 border border-zinc-800"><strong className="text-white">₹5000</strong></td>
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