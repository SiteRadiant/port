import React, { useEffect, useState } from 'react';
import { X, Send, CheckCircle2, Mail, Phone, User, MessageSquare, Building, Loader2, ArrowRight, ArrowLeft } from 'lucide-react';
import { sendLeadToZohoFlow } from '../lib/zohoWebhook';
import { useCurrency } from '../hooks/useCurrency';

const services = ['Website Development', 'Landing Page', 'E-Commerce Solutions', 'Learning Management System', 'Startups', 'Enterprises', 'Other'];

const ContactDialog = ({ onClose, prefill }) => {
  const { currentRegion, budgets, formatAmount } = useCurrency();
  const [step, setStep] = useState(1);

  const initialBudget = () => {
    if (prefill?.price && typeof prefill.price === 'number') {
      const p = prefill.price;
      if (budgets && budgets.length === 5) {
        if (currentRegion.code === 'IN') {
          return p < 10000 ? budgets[0] : p < 30000 ? budgets[1] : p < 100000 ? budgets[2] : p < 500000 ? budgets[3] : budgets[4];
        } else if (currentRegion.code === 'US') {
          return p < 500 ? budgets[0] : p < 1500 ? budgets[1] : p < 5000 ? budgets[2] : p < 15000 ? budgets[3] : budgets[4];
        } else if (currentRegion.code === 'GB') {
          return p < 400 ? budgets[0] : p < 1200 ? budgets[1] : p < 4000 ? budgets[2] : p < 12000 ? budgets[3] : budgets[4];
        } else if (currentRegion.code === 'CA') {
          return p < 600 ? budgets[0] : p < 2000 ? budgets[1] : p < 6500 ? budgets[2] : p < 20000 ? budgets[3] : budgets[4];
        } else if (currentRegion.code === 'AU') {
          return p < 700 ? budgets[0] : p < 2200 ? budgets[1] : p < 7500 ? budgets[2] : p < 22000 ? budgets[3] : budgets[4];
        } else if (currentRegion.code === 'AE') {
          return p < 1800 ? budgets[0] : p < 5500 ? budgets[1] : p < 18000 ? budgets[2] : p < 55000 ? budgets[3] : budgets[4];
        }
      }
      return budgets[1] || '';
    }
    return '';
  };

  const initialMessage = () => {
    if (prefill?.plan && prefill?.service) {
      const priceStr = prefill.price !== undefined ? ` (${formatAmount(prefill.price)})` : '';
      return `Interested in the ${prefill.plan} plan${priceStr} for ${prefill.service}. Region: ${currentRegion.name} (${currentRegion.currency}).`;
    }
    return '';
  };

  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '',
    service: prefill?.service || '', plan: prefill?.plan || '',
    budget: initialBudget(),
    message: initialMessage(),
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
    if (!form.phone.trim() || form.phone.replace(/\D/g, '').length < 7) errs.phone = 'Valid phone required';
    if (!form.service) errs.service = 'Required';
    setErrors(errs);
    if (Object.keys(errs).length) return;

    setSubmitting(true);
    try {
      await sendLeadToZohoFlow({
        ...form,
        region: currentRegion.name,
        currency: currentRegion.currency
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Lead submission failed', err);
      setSubmitError('Unable to submit enquiry right now. Please try again or WhatsApp us directly.');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[110] flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto" onClick={onClose}>
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
      <div
        className="relative bg-[#0e0e10] border border-white/10 rounded-2xl max-w-[620px] w-full max-h-[92vh] overflow-y-auto my-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-zinc-300 transition z-10"
        >
          <X size={15} />
        </button>

        {!submitted ? (
          <div className="p-5 sm:p-7 md:p-8">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-red-400" />
              <span className="text-[11px] font-semibold tracking-wider uppercase text-zinc-400">Step {step} of 2</span>
            </div>
            <h2 className="text-[22px] sm:text-[26px] font-bold text-white tracking-tight">
              {step === 1 ? 'Tell us about your project' : 'How should we reach you?'}
            </h2>
            <p className="text-zinc-400 text-[13px] sm:text-[14px] mt-1 mb-6">
              {step === 1 ? 'Select what you need and your general budget.' : 'We will review your project and get back within 24 hours.'}
            </p>

            <form onSubmit={submit}>
              {/* STEP 1: Service and Budget */}
              {step === 1 && (
                <div className="space-y-5 animate-in fade-in duration-300">
                  <div>
                    <label className="text-[12px] sm:text-[13px] font-semibold text-zinc-300 mb-2.5 sm:mb-3 block">Service Required</label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {services.map((s) => (
                        <button
                          key={s}
                          type="button"
                          onClick={() => handleChange('service', s)}
                          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-medium border transition-all duration-300 ${
                            form.service === s 
                              ? 'bg-red-500/15 border-red-500/60 text-red-300 scale-[1.02]' 
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
                    <label className="text-[12px] sm:text-[13px] font-semibold text-zinc-300 mb-2.5 sm:mb-3 block">
                      Estimated Budget ({currentRegion.currency})
                    </label>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {budgets.map((b) => (
                        <button
                          key={b}
                          type="button"
                          onClick={() => handleChange('budget', b)}
                          className={`px-3 sm:px-4 py-2 sm:py-2.5 rounded-full text-[12px] sm:text-[13px] font-medium border transition-all duration-300 ${
                            form.budget === b 
                              ? 'bg-red-500/15 border-red-500/60 text-red-300 scale-[1.02]' 
                              : 'bg-[#151518] border-white/5 text-zinc-400 hover:border-white/20 hover:text-zinc-200'
                          }`}
                        >
                          {b}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[12px] sm:text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-2"><MessageSquare size={14}/> Project Details (Optional)</label>
                    <textarea rows={3} className="input-field resize-none text-[16px] sm:text-[14px]" placeholder="Tell us about your goals, timeline, and what you want to build..." value={form.message} onChange={(e) => handleChange('message', e.target.value)} />
                  </div>

                  <button type="button" onClick={nextStep} className="btn-primary w-full justify-center mt-2 min-h-[46px]">
                    Next Step <ArrowRight size={15} />
                  </button>
                </div>
              )}

              {/* STEP 2: Contact Details */}
              {step === 2 && (
                <div className="space-y-5 sm:space-y-6 animate-in fade-in slide-in-from-right-4 duration-500">
                  <button type="button" onClick={() => setStep(1)} className="text-zinc-400 text-[12px] sm:text-[13px] flex items-center gap-1 hover:text-white transition-colors mb-1 -ml-1 p-1">
                    <ArrowLeft size={14} /> Back to project details
                  </button>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
                    <div>
                      <label className="text-[12px] sm:text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-1.5"><User size={14}/> Full Name</label>
                      <input autoFocus className={`input-field text-[16px] sm:text-[14px] ${errors.name ? 'border-red-500/50 focus:border-red-500' : ''}`} placeholder="Jane Doe" value={form.name} onChange={(e) => handleChange('name', e.target.value)} />
                      {errors.name && <p className="text-red-400 text-[12px] mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="text-[12px] sm:text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-1.5"><Building size={14}/> Company (Optional)</label>
                      <input className="input-field text-[16px] sm:text-[14px]" placeholder="Acme Inc." value={form.company} onChange={(e) => handleChange('company', e.target.value)} />
                    </div>
                    <div>
                      <label className="text-[12px] sm:text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-1.5"><Mail size={14}/> Email</label>
                      <input type="email" className={`input-field text-[16px] sm:text-[14px] ${errors.email ? 'border-red-500/50 focus:border-red-500' : ''}`} placeholder="you@company.com" value={form.email} onChange={(e) => handleChange('email', e.target.value)} />
                      {errors.email && <p className="text-red-400 text-[12px] mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <label className="text-[12px] sm:text-[13px] font-semibold text-zinc-300 flex items-center gap-1.5 mb-1.5"><Phone size={14}/> Phone</label>
                      <input type="tel" className={`input-field text-[16px] sm:text-[14px] ${errors.phone ? 'border-red-500/50 focus:border-red-500' : ''}`} placeholder={currentRegion.code === 'IN' ? '+91 98765 43210' : '+1 555 123 4567'} value={form.phone} onChange={(e) => handleChange('phone', e.target.value)} />
                      {errors.phone && <p className="text-red-400 text-[12px] mt-1">{errors.phone}</p>}
                    </div>
                  </div>

                  <div className="pt-2">
                    <button type="submit" disabled={submitting} className="btn-primary w-full justify-center min-h-[46px] disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-300">
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
