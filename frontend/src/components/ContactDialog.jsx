import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, User, MessageSquare, Building } from 'lucide-react';
import { fmt } from '../mock/mock';

const services = ['Mobile App Development', 'Website Development', 'AI Services', 'Automation Solutions', 'E-Commerce Solutions', 'Social Media Platforms', 'Dating Platforms', 'Gaming Solutions', 'Other'];
const budgets = ['Under ₹50,000', '₹50,000 - ₹1,50,000', '₹1,50,000 - ₹5,00,000', '₹5,00,000 - ₹15,00,000', 'Above ₹15,00,000'];

const ContactDialog = ({ onClose, prefill }) => {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: prefill?.service || '', plan: prefill?.plan || '',
    budget: prefill?.price ? (prefill.price < 50000 ? budgets[0] : prefill.price < 150000 ? budgets[1] : prefill.price < 500000 ? budgets[2] : prefill.price < 1500000 ? budgets[3] : budgets[4]) : '',
    message: prefill?.plan ? `Interested in the ${prefill.plan} plan (${fmt(prefill.price)}) for ${prefill.service}.` : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const handleChange = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const submit = (e) => {
    e.preventDefault();
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) errs.phone = 'Valid phone required';
    if (!form.service) errs.service = 'Required';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    // Save lead to localStorage (mock)
    const leads = JSON.parse(localStorage.getItem('sr_leads') || '[]');
    leads.push({ ...form, submittedAt: new Date().toISOString() });
    localStorage.setItem('sr_leads', JSON.stringify(leads));
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center p-4 sm:p-8 overflow-y-auto" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#0e0e10] border border-white/10 rounded-2xl max-w-[640px] w-full my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-zinc-300 transition">
          <X size={16} />
        </button>

        {!submitted ? (
          <div className="p-7 sm:p-9">
            <h2 className="text-[26px] font-extrabold text-white tracking-tight">Tell us about your project</h2>
            <p className="mt-2 text-[14px] text-zinc-400">We will get back within 24 hours with a clear scope and quote.</p>

            <form onSubmit={submit} className="mt-7 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-[12px] text-zinc-400 flex items-center gap-1.5 mb-1.5"><User size={12}/> Full Name</label>
                  <input className="input-field" placeholder="Jane Doe" value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
                  {errors.name && <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-[12px] text-zinc-400 flex items-center gap-1.5 mb-1.5"><Mail size={12}/> Email</label>
                  <input className="input-field" placeholder="you@company.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
                  {errors.email && <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-[12px] text-zinc-400 flex items-center gap-1.5 mb-1.5"><Phone size={12}/> Phone</label>
                  <input className="input-field" placeholder="+91 98765 43210" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                  {errors.phone && <p className="text-red-400 text-[12px] mt-1">{errors.phone}</p>}
                </div>
                <div>
                  <label className="text-[12px] text-zinc-400 flex items-center gap-1.5 mb-1.5"><Building size={12}/> Company</label>
                  <input className="input-field" placeholder="Acme Inc." value={form.company} onChange={(e) => handleChange('company', e.target.value)} />
                </div>
              </div>

              <div>
                <label className="text-[12px] text-zinc-400 mb-1.5 block">Service Interested In</label>
                <select className="input-field" value={form.service} onChange={(e) => handleChange('service', e.target.value)}>
                  <option value="" className="bg-[#0e0e10]">Select a service</option>
                  {services.map((s) => <option key={s} value={s} className="bg-[#0e0e10]">{s}</option>)}
                </select>
                {errors.service && <p className="text-red-400 text-[12px] mt-1">{errors.service}</p>}
              </div>

              <div>
                <label className="text-[12px] text-zinc-400 mb-1.5 block">Estimated Budget</label>
                <select className="input-field" value={form.budget} onChange={(e) => handleChange('budget', e.target.value)}>
                  <option value="" className="bg-[#0e0e10]">Choose a range</option>
                  {budgets.map((b) => <option key={b} value={b} className="bg-[#0e0e10]">{b}</option>)}
                </select>
              </div>

              <div>
                <label className="text-[12px] text-zinc-400 flex items-center gap-1.5 mb-1.5"><MessageSquare size={12}/> Project Details</label>
                <textarea rows={4} className="input-field resize-none" placeholder="Tell us about your goals, timeline, and what you want to build..." value={form.message} onChange={(e) => handleChange('message', e.target.value)} />
              </div>

              <button type="submit" className="btn-primary w-full justify-center mt-2">
                Send Enquiry <Send size={15} />
              </button>
              <p className="text-[11px] text-zinc-500 text-center">By submitting, you agree to our Privacy Policy. Your data is stored safely.</p>
            </form>
          </div>
        ) : (
          <div className="p-12 text-center">
            <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 mx-auto flex items-center justify-center">
              <CheckCircle2 size={32} className="text-red-400" />
            </div>
            <h2 className="mt-6 text-[24px] font-extrabold text-white">Thank you, {form.name.split(' ')[0]}!</h2>
            <p className="mt-3 text-zinc-400 text-[15px] max-w-[420px] mx-auto">
              We have received your enquiry about <span className="text-red-300">{form.service}</span>. Our team will reach out at <span className="text-white">{form.email}</span> within 24 hours.
            </p>
            <button onClick={onClose} className="btn-white mt-8">Close</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactDialog;
