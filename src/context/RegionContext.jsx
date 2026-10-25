import React, { createContext, useContext, useState, useEffect, useMemo, useCallback } from 'react';
import { REGIONS, DEFAULT_REGION, regionalPricingData } from '../lib/pricingConfig';

const RegionContext = createContext(null);

const STORAGE_KEY = 'siteradiant_selected_region';

/**
 * Infer country code from browser's native timezone & language settings.
 * Runs instantly (0 network requests) and cannot be blocked by ad-blockers or client privacy extensions.
 */
function inferCountryFromBrowser() {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone || '';
    
    // United States timezones
    if (
      tz.startsWith('America/New_York') ||
      tz.startsWith('America/Chicago') ||
      tz.startsWith('America/Denver') ||
      tz.startsWith('America/Los_Angeles') ||
      tz.startsWith('America/Phoenix') ||
      tz.startsWith('America/Anchorage') ||
      tz.startsWith('America/Honolulu') ||
      tz.startsWith('America/Detroit') ||
      tz.startsWith('America/Indiana') ||
      tz.startsWith('America/Boise') ||
      tz.startsWith('US/')
    ) {
      return 'US';
    }

    // United Kingdom timezones
    if (
      tz === 'Europe/London' ||
      tz === 'GB' ||
      tz === 'Europe/Belfast' ||
      tz === 'Europe/Jersey' ||
      tz === 'Europe/Guernsey' ||
      tz === 'Europe/Isle_of_Man'
    ) {
      return 'GB';
    }

    // Canada timezones
    if (
      tz.startsWith('America/Toronto') ||
      tz.startsWith('America/Vancouver') ||
      tz.startsWith('America/Montreal') ||
      tz.startsWith('America/Edmonton') ||
      tz.startsWith('America/Winnipeg') ||
      tz.startsWith('America/Halifax') ||
      tz.startsWith('America/St_Johns') ||
      tz.startsWith('America/Regina') ||
      tz.startsWith('Canada/')
    ) {
      return 'CA';
    }

    // Australia timezones
    if (
      tz.startsWith('Australia/') ||
      tz === 'Antarctica/Macquarie'
    ) {
      return 'AU';
    }

    // UAE timezones
    if (tz === 'Asia/Dubai') {
      return 'AE';
    }

    // India timezones
    if (tz === 'Asia/Kolkata' || tz === 'Asia/Calcutta') {
      return 'IN';
    }

    // Browser language fallback (e.g. en-GB, en-AU, en-CA, en-US, ar-AE, en-IN, hi-IN)
    const lang = (navigator.language || navigator.userLanguage || '').toUpperCase();
    if (lang.endsWith('-GB')) return 'GB';
    if (lang.endsWith('-US')) return 'US';
    if (lang.endsWith('-CA')) return 'CA';
    if (lang.endsWith('-AU')) return 'AU';
    if (lang.endsWith('-AE')) return 'AE';
    if (lang.endsWith('-IN')) return 'IN';
  } catch {
    // Ignore error
  }
  return null;
}

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

    // 2. Instant initial detection from browser environment
    const browserInferred = inferCountryFromBrowser();
    if (browserInferred && REGIONS[browserInferred]) {
      return browserInferred;
    }

    return DEFAULT_REGION;
  });

  const [isDetecting, setIsDetecting] = useState(false);

  // Automatic country detection refinement on mount
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

      // 1. First attempt: First-party hosting endpoint (/api/geo via Vercel Edge middleware)
      // Since this is on the exact same domain, ad-blockers NEVER block it.
      try {
        const res = await fetch('/api/geo', { cache: 'no-store' });
        if (res.ok) {
          const data = await res.json();
          if (data && data.country && REGIONS[data.country.toUpperCase()]) {
            detectedCountry = data.country.toUpperCase();
          }
        }
      } catch {
        // Continue to fallback
      }

      // 2. Second attempt: Cloudflare cdn-cgi trace
      // Major CDN endpoint that is almost never on adblock blocklists
      if (!detectedCountry) {
        try {
          const res = await fetch('https://cloudflare.com/cdn-cgi/trace', { cache: 'no-store' });
          if (res.ok) {
            const text = await res.text();
            const match = text.match(/loc=([A-Z]{2})/);
            if (match && match[1] && REGIONS[match[1]]) {
              detectedCountry = match[1];
            }
          }
        } catch {
          // Continue to next fallback
        }
      }

      // 3. Third attempt: Native browser timezone & locale heuristic
      if (!detectedCountry) {
        detectedCountry = inferCountryFromBrowser();
      }

      // 4. Fourth attempt: Fallback public lookup (ipwho.is)
      if (!detectedCountry) {
        try {
          const res = await fetch('https://ipwho.is/', { credentials: 'omit' });
          if (res.ok) {
            const data = await res.json();
            if (data && data.country_code && REGIONS[data.country_code.toUpperCase()]) {
              detectedCountry = data.country_code.toUpperCase();
            }
          }
        } catch {
          // Ignored
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
