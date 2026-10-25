/**
 * Centralized Regional Pricing Configuration for SiteRadiant
 * 
 * Configured Regions:
 * - IN: India (INR, ₹)
 * - US: United States (USD, $)
 * - GB: United Kingdom (GBP, £)
 * - CA: Canada (CAD, CA$)
 * - AU: Australia (AUD, A$)
 * - AE: United Arab Emirates (AED, AED )
 * 
 * Note:
 * - If a regional price is not set, or is null/undefined, the UI displays "Get a Quote".
 * - If price is 0, the UI displays "Custom".
 * - Each region has its own manual prices — no exchange rates are used.
 */

export const REGIONS = {
  IN: {
    code: 'IN',
    name: 'India',
    flag: '🇮🇳',
    currency: 'INR',
    symbol: '₹',
    locale: 'en-IN',
    hostingAddon: 5000,
    budgets: [
      'Under ₹10,000',
      '₹10,000 - ₹30,000',
      '₹30,000 - ₹1,00,000',
      '₹1,00,000 - ₹5,00,000',
      'Above ₹5,00,000'
    ]
  },
  US: {
    code: 'US',
    name: 'United States',
    flag: '🇺🇸',
    currency: 'USD',
    symbol: '$',
    locale: 'en-US',
    hostingAddon: 60,
    budgets: [
      'Under $500',
      '$500 - $1,500',
      '$1,500 - $5,000',
      '$5,000 - $15,000',
      'Above $15,000'
    ]
  },
  GB: {
    code: 'GB',
    name: 'United Kingdom',
    flag: '🇬🇧',
    currency: 'GBP',
    symbol: '£',
    locale: 'en-GB',
    hostingAddon: 50,
    budgets: [
      'Under £400',
      '£400 - £1,200',
      '£1,200 - £4,000',
      '£4,000 - £12,000',
      'Above £12,000'
    ]
  },
  CA: {
    code: 'CA',
    name: 'Canada',
    flag: '🇨🇦',
    currency: 'CAD',
    symbol: 'CA$',
    locale: 'en-CA',
    hostingAddon: 80,
    budgets: [
      'Under CA$600',
      'CA$600 - CA$2,000',
      'CA$2,000 - CA$6,500',
      'CA$6,500 - CA$20,000',
      'Above CA$20,000'
    ]
  },
  AU: {
    code: 'AU',
    name: 'Australia',
    flag: '🇦🇺',
    currency: 'AUD',
    symbol: 'A$',
    locale: 'en-AU',
    hostingAddon: 90,
    budgets: [
      'Under A$700',
      'A$700 - A$2,200',
      'A$2,200 - A$7,500',
      'A$7,500 - A$22,000',
      'Above A$22,000'
    ]
  },
  AE: {
    code: 'AE',
    name: 'United Arab Emirates',
    flag: '🇦🇪',
    currency: 'AED',
    symbol: 'AED ',
    locale: 'en-AE',
    hostingAddon: 220,
    budgets: [
      'Under AED 1,800',
      'AED 1,800 - AED 5,500',
      'AED 5,500 - AED 18,000',
      'AED 18,000 - AED 55,000',
      'Above AED 55,000'
    ]
  }
};

export const DEFAULT_REGION = 'IN';

/**
 * Regional pricing data table.
 * All existing Indian INR prices are preserved exactly as they are.
 * Each region has its own manually configured prices for plans and starting prices.
 */
export const regionalPricingData = {
  landing_page: {
    title: 'Landing Page',
    subtitle: 'High-converting, stunning single-page websites to capture leads and drive sales.',
    tagline: 'Built to Convert',
    plans: [
      {
        name: 'Standard',
        popular: true,
        desc: 'High-conversion landing page',
        features: [
          '2-3 section scrolling design',
          'Mobile-responsive layout',
          'Lead capture form integration',
          'Basic SEO setup',
          'Fast load times',
          '14 days post-launch support'
        ],
        pricing: {
          IN: { price: 4999, original: 8999 },
          US: { price: 149, original: 249 },
          GB: { price: 119, original: 199 },
          CA: { price: 199, original: 329 },
          AU: { price: 229, original: 379 },
          AE: { price: 549, original: 899 }
        }
      }
    ]
  },
  website: {
    title: 'Website Development',
    subtitle: 'Fast, SEO-ready websites and web applications built to turn visitors into customers.',
    tagline: 'Crafted to Convert',
    plans: [
      {
        name: 'Starter',
        badge: 'Early Bird',
        popular: false,
        desc: 'Clean, fast marketing websites',
        features: [
          'Up to 4 pages',
          'Mobile-responsive design',
          'Basic SEO setup',
          'Contact form',
          '14 days post-launch support'
        ],
        pricing: {
          IN: { price: 7999, original: 10999 },
          US: { price: 249, original: 349 },
          GB: { price: 199, original: 279 },
          CA: { price: 329, original: 459 },
          AU: { price: 379, original: 529 },
          AE: { price: 899, original: 1249 }
        }
      },
      {
        name: 'Growth',
        popular: true,
        desc: 'Full-stack web app with CMS',
        features: [
          'Up to 15 pages / screens',
          'Django + React stack',
          'CMS for content updates',
          'Advanced SEO & structured data',
          'Payment gateway integration',
          'Core Web Vitals optimisation',
          '60 days post-launch support'
        ],
        pricing: {
          IN: { price: 11499, original: 15999 },
          US: { price: 399, original: 549 },
          GB: { price: 319, original: 439 },
          CA: { price: 529, original: 729 },
          AU: { price: 599, original: 849 },
          AE: { price: 1449, original: 1999 }
        }
      },
      {
        name: 'Enterprise',
        popular: false,
        desc: 'Complex portals and platforms',
        features: [
          'Up to 25 pages',
          'Multi-tenant architecture',
          'Custom ERP / CRM integration',
          'SSO / OAuth2 authentication',
          '99.9% uptime SLA',
          'Dedicated DevOps setup',
          '6 months post-launch support'
        ],
        pricing: {
          IN: { price: 21999, original: 34999 },
          US: { price: 749, original: 1199 },
          GB: { price: 599, original: 949 },
          CA: { price: 999, original: 1599 },
          AU: { price: 1149, original: 1799 },
          AE: { price: 2749, original: 4399 }
        }
      }
    ]
  },
  ecommerce: {
    title: 'E-Commerce Solutions',
    subtitle: 'Scalable online stores and marketplaces built to drive sales across India and beyond.',
    tagline: 'Commerce, Accelerated',
    plans: [
      {
        name: 'Starter',
        popular: false,
        desc: 'Custom store',
        features: [
          'Custom store setup',
          'Up to 50 products',
          'Razorpay / Stripe payments',
          'Mobile-responsive theme',
          'Basic SEO',
          '30 days support'
        ],
        pricing: {
          IN: { price: 19999, original: 24999 },
          US: { price: 649, original: 849 },
          GB: { price: 519, original: 679 },
          CA: { price: 869, original: 1149 },
          AU: { price: 999, original: 1299 },
          AE: { price: 2399, original: 3099 }
        }
      },
      {
        name: 'Growth',
        popular: true,
        desc: 'Custom storefront with AI search',
        features: [
          'Everything in Starter',
          'Custom Next.js storefront',
          'Headless CMS',
          'Inventory + order management',
          'Multi-language',
          '45 days support'
        ],
        pricing: {
          IN: { price: 29999, original: 49999 },
          US: { price: 999, original: 1649 },
          GB: { price: 799, original: 1319 },
          CA: { price: 1349, original: 2199 },
          AU: { price: 1549, original: 2499 },
          AE: { price: 3699, original: 5999 }
        }
      },
      {
        name: 'Enterprise',
        popular: false,
        desc: 'Multi-vendor marketplace',
        features: [
          'Everything in Growth',
          'Marketplace with vendor onboarding',
          'Custom commission & payout engine',
          'Dedicated DevOps setup',
          '60 days support'
        ],
        pricing: {
          IN: { price: 89999, original: 149999 },
          US: { price: 2999, original: 4999 },
          GB: { price: 2399, original: 3999 },
          CA: { price: 3999, original: 6699 },
          AU: { price: 4599, original: 7699 },
          AE: { price: 10999, original: 18399 }
        }
      }
    ]
  },
  lms: {
    title: 'Learning Management System',
    subtitle: 'Scalable e-learning platforms to host courses, manage students, and monetize your knowledge.',
    tagline: 'Teach the World',
    plans: [
      {
        name: 'Starter',
        popular: false,
        desc: 'Basic course hosting',
        features: [
          'Custom LMS setup',
          'Up to 5 courses',
          'Student dashboard',
          'Razorpay integration',
          'Basic progress tracking',
          '30 days support'
        ],
        pricing: {
          IN: { price: 24999, original: 34999 },
          US: { price: 799, original: 1149 },
          GB: { price: 639, original: 919 },
          CA: { price: 1069, original: 1549 },
          AU: { price: 1229, original: 1769 },
          AE: { price: 2949, original: 4199 }
        }
      },
      {
        name: 'Growth',
        popular: true,
        desc: 'Advanced e-learning portal',
        features: [
          'Everything in Starter',
          'Unlimited courses',
          'Drip content scheduling',
          'Quizzes & assignments',
          'Certificates of completion',
          'Zoom/Webinar integration',
          '90 days support'
        ],
        pricing: {
          IN: { price: 39999, original: 54999 },
          US: { price: 1299, original: 1799 },
          GB: { price: 1039, original: 1439 },
          CA: { price: 1749, original: 2399 },
          AU: { price: 1999, original: 2769 },
          AE: { price: 4799, original: 6599 }
        }
      },
      {
        name: 'Enterprise',
        popular: false,
        desc: 'Full-scale university platform',
        features: [
          'Everything in Growth',
          'Multi-instructor marketplace',
          'Custom video DRM protection',
          'Subscription & membership tiers',
          'SCORM compliance',
          'Mobile apps (iOS + Android)',
          '12 months support'
        ],
        pricing: {
          IN: { price: 99999, original: 149999 },
          US: { price: 3299, original: 4999 },
          GB: { price: 2639, original: 3999 },
          CA: { price: 4429, original: 6699 },
          AU: { price: 5079, original: 7699 },
          AE: { price: 12199, original: 18399 }
        }
      }
    ]
  },
  startups: {
    title: 'Startups',
    subtitle: 'MVP to Series A — we build the product that gets you funded and your first 10,000 users.',
    tagline: 'From Idea to Launch',
    plans: [
      {
        name: 'Contact Us',
        popular: false,
        desc: '6-week MVP build',
        features: [
          'Discovery + design sprint',
          'Working MVP (web or mobile)',
          'Investor-ready demo',
          'Pitch deck assets',
          '30 days support'
        ],
        pricing: {
          IN: { price: 0 },
          US: { price: 0 },
          GB: { price: 0 },
          CA: { price: 0 },
          AU: { price: 0 },
          AE: { price: 0 }
        }
      }
    ]
  },
  enterprises: {
    title: 'Enterprises',
    subtitle: 'ERP systems, business automation, and internal dashboards that transform how large organisations operate.',
    tagline: 'Enterprise-Grade, Always',
    plans: [
      {
        name: 'Pilot',
        popular: false,
        desc: 'Single-department automation',
        features: [
          'Process audit',
          'Custom internal tool',
          'SSO integration',
          'Training & rollout',
          '60 days support'
        ],
        pricing: {
          IN: { price: 109999 },
          US: { price: 3499 },
          GB: { price: 2799 },
          CA: { price: 4699 },
          AU: { price: 5399 },
          AE: { price: 12899 }
        }
      },
      {
        name: 'Suite',
        popular: true,
        desc: 'Cross-functional platform',
        features: [
          'Everything in Pilot',
          'ERP / CRM customisation',
          'Workflow automation',
          'BI dashboards',
          'Multi-team rollout',
          '90 days support'
        ],
        pricing: {
          IN: { price: 209999 },
          US: { price: 6499 },
          GB: { price: 5199 },
          CA: { price: 8699 },
          AU: { price: 9999 },
          AE: { price: 23899 }
        }
      },
      {
        name: 'Enterprise',
        popular: false,
        desc: 'Org-wide digital transformation',
        features: [
          'Everything in Suite',
          'Custom platform build',
          'Legacy system migration',
          'Compliance (ISO / SOC 2)',
          'Dedicated delivery team',
          '12 months support'
        ],
        pricing: {
          IN: { price: 399999 },
          US: { price: 11999 },
          GB: { price: 9599 },
          CA: { price: 15999 },
          AU: { price: 18499 },
          AE: { price: 44099 }
        }
      }
    ]
  }
};
