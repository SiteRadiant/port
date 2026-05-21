import React, { createContext, useContext, useState } from 'react';
import { pricingData } from '../mock/mock';
import PricingModal from '../components/PricingModal';
import ContactDialog from '../components/ContactDialog';

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [pricingId, setPricingId] = useState(null);
  const [contactOpen, setContactOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState(null);

  const openPricing = (id) => setPricingId(id);
  const closePricing = () => setPricingId(null);
  const openContact = (prefill) => { setContactPrefill(prefill || null); setContactOpen(true); };
  const closeContact = () => setContactOpen(false);

  return (
    <UIContext.Provider value={{ openPricing, closePricing, openContact, closeContact }}>
      {children}
      {pricingId && pricingData[pricingId] && (
        <PricingModal serviceId={pricingId} onClose={closePricing} />
      )}
      {contactOpen && <ContactDialog onClose={closeContact} prefill={contactPrefill} />}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used inside UIProvider');
  return ctx;
};


