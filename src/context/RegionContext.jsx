import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { REGIONS, DEFAULT_REGION, regionalPricingData } from '../lib/pricingConfig';

const RegionContext = createContext(null);

const STORAGE_KEY = 'siteradiant_selected_region';

export const RegionProvider = ({ children }) => {
  const [regionCode, setRegionCode] = useState(() => {
    // 1. Check if user previously made a manual selection
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && REGIONS[saved]) {
        return saved;
      }
    } catch {
      // localStorage may be unavailable in private browsing
    }
    return DEFAULT_REGION;
  });

  const [isDetecting, setIsDetecting] = useState(false);

  // Automatic country detection on initial mount if user hasn't explicitly saved a choice
  useEffect(() => {
    let hasSavedChoice = false;
    try {
      hasSavedChoice = Boolean(localStorage.getItem(STORAGE_KEY));
    } catch {
      hasSavedChoice = false;
    }

    if (hasSavedChoice) {
      return; // respect existing user choice
    }

    let isMounted = true;
    setIsDetecting(true);

    const detectCountry = async () => {
      let detectedCountry = null;

      // Primary check: api.country.is (fast, ultra-lightweight HTTPS JSON endpoint)
      try {
        const res = await fetch('https://api.country.is/', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.country) {
            detectedCountry = data.country.toUpperCase();
          }
        }
      } catch {
        // Fallback check
      }

      // Secondary fallback: ipwho.is
      if (!detectedCountry) {
        try {
          const res = await fetch('https://ipwho.is/', { credentials: 'omit' });
          if (res.ok) {
            const data = await res.json();
            if (data && data.success && data.country_code) {
              detectedCountry = data.country_code.toUpperCase();
            }
          }
        } catch {
          // Both failed, keep default
        }
      }

      if (isMounted && detectedCountry && REGIONS[detectedCountry]) {
        setRegionCode(detectedCountry);
      }
      if (isMounted) {
        setIsDetecting(false);
      }
    };

    detectCountry();

    return () => {
      isMounted = false;
    };
  }, []);

  // Manual region selector handler
  const selectRegion = useCallback((code) => {
    if (REGIONS[code]) {
      setRegionCode(code);
      try {
        localStorage.setItem(STORAGE_KEY, code);
      } catch {
        // Ignore storage write error
      }
    }
  }, []);

  const currentRegion = REGIONS[regionCode] || REGIONS[DEFAULT_REGION];

  /**
   * Format any numeric amount with the current or provided region currency symbol & formatting
   */
  const formatAmount = useCallback((amount, targetRegion = currentRegion) => {
    if (amount === undefined || amount === null) {
      return 'Get a Quote';
    }
    if (amount === 0) {
      return 'Custom';
    }
    const formattedNum = Number(amount).toLocaleString(targetRegion.locale || 'en-US');
    return `${targetRegion.symbol}${formattedNum}`;
  }, [currentRegion]);

  /**
   * Format price by checking if value is a plan object, a numeric price, or null.
   * If price is null/undefined or not configured, returns "Get a Quote".
   * If price is 0, returns "Custom".
   */
  const formatPrice = useCallback((priceOrPlan, targetRegionCode = regionCode) => {
    const reg = REGIONS[targetRegionCode] || currentRegion;

    if (priceOrPlan === null || priceOrPlan === undefined) {
      return 'Get a Quote';
    }

    // If a plan object with a 'pricing' map was passed
    if (typeof priceOrPlan === 'object' && priceOrPlan.pricing) {
      const regional = priceOrPlan.pricing[reg.code];
      if (!regional || regional.price === undefined || regional.price === null) {
        return 'Get a Quote';
      }
      return formatAmount(regional.price, reg);
    }

    // Direct numeric value
    if (typeof priceOrPlan === 'number') {
      return formatAmount(priceOrPlan, reg);
    }

    return 'Get a Quote';
  }, [regionCode, currentRegion, formatAmount]);

  /**
   * Get starting price info for a service in the active region
   */
  const getStartingPrice = useCallback((serviceId, targetRegionCode = regionCode) => {
    const regCode = REGIONS[targetRegionCode] ? targetRegionCode : regionCode;
    const service = regionalPricingData[serviceId];
    if (!service || !service.plans || service.plans.length === 0) {
      return null;
    }
    const firstPlan = service.plans[0];
    const regional = firstPlan?.pricing?.[regCode];
    if (!regional || regional.price === undefined || regional.price === null) {
      return null;
    }
    return regional.price;
  }, [regionCode]);

  /**
   * Helper to format starting price text directly
   */
  const formatStartingPrice = useCallback((serviceId) => {
    const price = getStartingPrice(serviceId);
    if (price === null) {
      return 'Get a Quote';
    }
    return formatAmount(price, currentRegion);
  }, [getStartingPrice, formatAmount, currentRegion]);

  const value = useMemo(() => ({
    regionCode,
    currentRegion,
    regions: REGIONS,
    selectRegion,
    formatAmount,
    formatPrice,
    getStartingPrice,
    formatStartingPrice,
    isDetecting,
    hostingAddon: currentRegion.hostingAddon,
    budgets: currentRegion.budgets,
  }), [
    regionCode,
    currentRegion,
    selectRegion,
    formatAmount,
    formatPrice,
    getStartingPrice,
    formatStartingPrice,
    isDetecting,
  ]);

  return (
    <RegionContext.Provider value={value}>
      {children}
    </RegionContext.Provider>
  );
};

export const useRegion = () => {
  const ctx = useContext(RegionContext);
  if (!ctx) {
    throw new Error('useRegion must be used within a RegionProvider');
  }
  return ctx;
};
