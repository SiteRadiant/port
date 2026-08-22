import React, { createContext, useContext, useState } from 'react';
import { useSearchParams, useLocation } from 'react-router-dom';
import { pricingData } from '../mock/mock';
import PricingModal from '../components/PricingModal';
import ContactDialog from '../components/ContactDialog';

const UIContext = createContext(null);

export const UIProvider = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  
  const pricingId = searchParams.get('pricing');
  const isContactPath = location.pathname === '/contact';
  const isContactOpen = isContactPath || searchParams.get('contact') === 'true';
  const [contactPrefill, setContactPrefill] = useState(null);

  const openPricing = (id) => {
    setSearchParams(prev => {
      prev.set('pricing', id);
      return prev;
    });
  };
  
  const closePricing = () => {
    setSearchParams(prev => {
      prev.delete('pricing');
      return prev;
    });
  };
  
  const openContact = (prefill) => { 
    setContactPrefill(prefill || null); 
    setSearchParams(prev => {
      prev.set('contact', 'true');
      return prev;
    });
  };
  
  const closeContact = () => { 
    if (isContactPath) {
      window.location.href = '/'; // Redirect to home if they landed directly on /contact
    } else {
      setSearchParams(prev => {
        prev.delete('contact');
        return prev;
      });
    }
  };

  return (
    <UIContext.Provider value={{ openPricing, closePricing, openContact, closeContact }}>
      {children}
      {pricingId && pricingData[pricingId] && (
        <PricingModal serviceId={pricingId} onClose={closePricing} />
      )}
      {isContactOpen && <ContactDialog onClose={closeContact} prefill={contactPrefill} />}
    </UIContext.Provider>
  );
};

export const useUI = () => {
  const ctx = useContext(UIContext);
  if (!ctx) throw new Error('useUI must be used inside UIProvider');
  return ctx;
};


