import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, User, MessageSquare, Building, Loader2, ArrowRight, ArrowLeft } from 'lucide-react';
import { fmt } from '../mock/mock';
import { sendLeadToZohoFlow } from '../lib/zohoWebhook';

const services = ['Website Development', 'Landing Page', 'E-Commerce Solutions', 'Startups', 'Enterprises', 'Other'];
const budgets = ['Under ₹10,000', '₹10,000 - ₹30,000', '₹30,000 - ₹1,00,000', '₹1,00,000 - ₹5,00,000', 'Above ₹5,00,000'];

const ContactDialog = ({ onClose, prefill }) => {
  const [step, setStep] = useState(1);
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: prefill?.service || '', plan: prefill?.plan || '',
    budget: prefill?.price ? (prefill.price < 10000 ? budgets[0] : prefill.price < 30000 ? budgets[1] : prefill.price < 100000 ? budgets[2] : prefill.price < 500000 ? budgets[3] : budgets[4]) : '',
    message: prefill?.plan ? `Interested in the ${prefill.plan} plan (${fmt(prefill.price)}) for ${prefill.service}.` : '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = ''; };
  }, [onClose]);

  const handleChange = (k, v) => {
    setForm((p) => ({ ...p, [k]: v }));
    if (errors[k]) setErrors(p => ({ ...p, [k]: null })); // clear error on type
  };

  const nextStep = () => {
    const errs = {};
    if (!form.service) errs.service = 'Please select a service to continue';
    setErrors(errs);
    if (Object.keys(errs).length === 0) setStep(2);
  };

  const submit = async (e) => {
    e.preventDefault();
    setSubmitError('');
    const errs = {};
    if (!form.name.trim()) errs.name = 'Required';
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email)) errs.email = 'Valid email required';
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 10) errs.phone = 'Valid phone required';
    if (!form.service) errs.service = 'Required';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    const leadPayload = {
      ...form,
      page: window.location.pathname,
      userAgent: window.navigator.userAgent,
    };

    try {
      setSubmitting(true);
      const result = await sendLeadToZohoFlow(leadPayload);

      // Keep local backup for debugging/demo even when webhook is configured.
      const leads = JSON.parse(localStorage.getItem('sr_leads') || '[]');
      leads.push({ ...leadPayload, submittedAt: new Date().toISOString(), webhookSkipped: Boolean(result?.skipped) });
      localStorage.setItem('sr_leads', JSON.stringify(leads));

      if (result?.skipped) {
        setSubmitError('Webhook URL is not configured. Lead saved locally only.');
        return;
      }
      setSubmitted(true);
    } catch (err) {
      // Fallback to local storage so leads are not lost during webhook/cors failures.
      const leads = JSON.parse(localStorage.getItem('sr_leads') || '[]');
      leads.push({ ...leadPayload, submittedAt: new Date().toISOString(), webhookError: String(err?.message || err) });
      localStorage.setItem('sr_leads', JSON.stringify(leads));
      setSubmitError('Could not send to Zoho Flow right now. Saved locally as fallback.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-start justify-center p-4 sm:p-8 overflow-y-auto" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#0e0e10] border border-white/10 rounded-2xl max-w-[640px] w-full my-8 transition-all duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-zinc-300 transition z-10">
          <X size={16} />
        </button>

        {!submitted ? (
          <div className="p-7 sm:p-9">
            <h2 className="text-[26px] font-extrabold text-white tracking-tight">Tell us about your project</h2>
            <div className="flex items-center gap-2 mt-4 mb-8">
              <div className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${step >= 1 ? 'bg-red-500' : 'bg-white/10'}`}></div>
              <div className={`h-1.5 flex-1 rounded-full transition-colors duration-500 ${step >= 2 ? 'bg-red-500' : 'bg-white/10'}`}></div>
            </div>

            <form onSubmit={submit}>
              
              {/* STEP 1: Project Details */}
              {step === 1 && (
                <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                  <div>
                    <label className="text-[13px] font-semibold text-zinc-300 mb-3 block">What service are you looking for?</label>
                    <div className="flex flex-wrap gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleChange('service', s)}
                          className={`px-4 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                            form.service === s 
                              ? 'bg-red-500/10 border-red-500/50 text-red-400 scale-105' 
                              : 'bg-[#151518] border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                          }`}
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                    {errors.service && <p className="text-red-400 text-[12px] mt-2">{errors.service}</p>}
                  </div>

                  <div>
                    <label className="text-[13px] font-semibold text-zinc-300 mb-3 block">Estimated Budget (INR)</label>
                    <div className="flex flex-wrap gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleChange('budget', b)}
                          className={`px-4 py-2.5 rounded-full text-[13px] font-medium border transition-all duration-300 ${
                            form.budget === b 
                              ? 'bg-red-500/10 border-red-500/50 text-red-400 scale-105' 
                              : 'bg-[#151518] border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-2"><MessageSquare size={14}/> Project Details (Optional)</label>
                    <textarea rows={4} className="input-field resize-none text-[14px]" placeholder="Tell us about your goals, timeline, and what you want to build..." value={form.message} onChange={(e) => handleChange('message', e.target.value)} />
                  </div>

                  <button type="button" onClick={nextStep} className="btn-primary w-full justify-center mt-2">
                    Next Step <ArrowRight size={15} />
                  </button>
                </div>
              )}

              {/* STEP 2: Contact Details */}
              {step === 2 && (
                <div className="space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <button type="button" onClick={() => setStep(1)} className="text-zinc-400 text-[13px] flex items-center gap-1 hover:text-white transition-colors mb-2 -ml-1 p-1">
                    <ArrowLeft size={14} /> Back to project details
                  </button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-2"><User size={14}/> Full Name</label>
                      <input autoFocus className={`input-field text-[14px] ${errors.name ? 'border-red-500/50 focus:border-red-500' : ''}`} placeholder="Jane Doe" value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
                      {errors.name && <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-2"><Building size={14}/> Company (Optional)</label>
                      <input className="input-field text-[14px]" placeholder="Acme Inc." value={form.company} onChange={(e) => handleChange('company', e.target.value)} />
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-2"><Mail size={14}/> Email</label>
                      <input className={`input-field text-[14px] ${errors.email ? 'border-red-500/50 focus:border-red-500' : ''}`} placeholder="you@company.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
                      {errors.email && <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-2"><Phone size={14}/> Phone</label>
                      <input className={`input-field text-[14px] ${errors.phone ? 'border-red-500/50 focus:border-red-500' : ''}`} placeholder="+91 98765 43210" value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                      {errors.phone && <p className="text-red-400 text-[12px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={submitting} className="btn-primary w-full justify-center disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300">
                      {submitting ? (
                        <><Loader2 size={15} className="animate-spin" /> Sending...</>
                      ) : (
                        <>Send Enquiry <Send size={15} /></>
                      )}
                    </button>
                  </div>
                  {submitError && <p className="text-amber-400 text-[12px] text-center">{submitError}</p>}
                  <p className="text-[11px] text-zinc-500 text-center mt-2">By submitting, you agree to our Privacy Policy and allow us to process your data for project consultation.</p>
                </div>
              )}
            </form>
          </div>
        ) : (
          <div className="p-12 text-center animate-in zoom-in-95 duration-500">
            <div className="w-16 h-16 rounded-full bg-red-500/15 border border-red-500/30 mx-auto flex items-center justify-center animate-pulse">
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
