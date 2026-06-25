// Mock data for SiteRadiant
export const BRAND = 'SiteRadiant';

export const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true, items: [
    { label: 'Mobile App Development', slug: 'mobile-app' },
    { label: 'Website Development', slug: 'website' },
    { label: 'AI Services', slug: 'ai' },
    { label: 'Automation Solutions', slug: 'automation' },
  ]},
  { label: 'Solutions', href: '/services', hasDropdown: true, items: [
    { label: 'E-Commerce', slug: 'ecommerce' },
  ]},
  { label: 'Industries', href: '/services', hasDropdown: true, items: [
    { label: 'Startups', slug: 'startups' },
    { label: 'Enterprises', slug: 'enterprises' },
    { label: 'Retail & Commerce', slug: 'retail' },
  ]},
  { label: 'About', href: '/about', hasDropdown: false },
];

export const partnerLogos = [
  { name: 'EliteDrop', color: '#000000' },
];

export const services = [
  { id: 'website', icon: 'globe', title: 'Website Development', desc: 'Fast, SEO-optimised websites and web apps built on modern frameworks.' },
  { id: 'Comming Soonn', icon: 'sparkles', title: 'New Services', desc: 'Upcoming services that will revolutionize your digital experience.' },
];

export const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 97, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Industries Served' },
  { value: 5, suffix: '+', label: 'Countries Served' },
];

export const industries = [
  { icon: 'shopping-cart', color: 'orange', title: 'E-Commerce', desc: 'Storefronts, payments, inventory & AI recommendations.' },
  { icon: 'sparkles', color: 'blue', title: 'Other', desc: 'Custom solutions for any digital business segment.' },
];

export const processSteps = [
  { num: '01', icon: 'clock', title: 'Discovery Call', desc: 'A free 60-min session to map out goals, market, and technical scope.' },
  { num: '02', icon: 'zap', title: 'Design & Build', desc: 'Agile sprints with weekly demos — you always know what is shipping next.' },
  { num: '03', icon: 'rocket', title: 'Launch & Scale', desc: 'Deploy, monitor, and improve — we stay with you well past launch.' },
];

export const testimonials = [
  { brand: 'CRED', country: 'India', flag: '🇮🇳', color: '#000000', quote: 'SiteRadiant understood our product philosophy from day one. The reward engine they built is what makes our app feel like a club.', author: 'Head of Product, CRED', caseTitle: 'Reward Engine That Made Paying Bills Addictive' },
  { brand: 'Canva', country: 'Australia', flag: '🇦🇺', color: '#00C4CC', quote: 'SiteRadiant delivered production-quality work at a pace we had only seen from top-tier internal teams.', author: 'Growth Engineering Lead, Canva', caseTitle: 'Rebuilt Mobile Onboarding in 6 Weeks' },
  { brand: 'Razorpay', country: 'India', flag: '🇮🇳', color: '#0c2451', quote: 'They shipped a payments integration our internal team estimated at 3 months — in just 4 weeks. Outstanding.', author: 'VP Engineering, Razorpay', caseTitle: 'Cut Checkout Drop-off by 38% in One Quarter' },
  { brand: 'Zepto', country: 'India', flag: '🇮🇳', color: '#b91c1c', quote: 'Their AI recommendations boosted basket size by 24%. The collaboration felt like an extension of our team.', author: 'Director of Growth, Zepto', caseTitle: 'AI Recommendations That Lifted AOV by 24%' },
];

export const footerLinks = {
  Services: ['Websites'],
  Industries: ['E-Commerce','Startups','Enterprises'],
  Company: ['About', 'Case Studies', 'Contact', 'Privacy Policy', 'Terms'],
};

// Pricing data (INR)
export const fmt = (n) => '₹' + n.toLocaleString('en-IN');

export const getStartingPrice = (serviceId) => pricingData[serviceId]?.plans?.[0]?.price ?? 0;

export const pricingData = {
  'website': {
    title: 'Website Development',
    subtitle: 'Fast, SEO-ready websites and web applications built to convert visitors into customers.',
    tagline: 'Crafted to Convert',
    plans: [
      { name: 'Starter', badge: 'Early Bird', price: 4999, original: 9999, popular: false, desc: 'Clean, fast marketing websites', features: ['Up to 4 pages', 'Mobile-responsive design', 'Basic SEO setup', 'Contact form', '14 days post-launch support'] },
      { name: 'Growth', price: 11499, original: 15999, popular: true, desc: 'Full-stack web app with CMS', features: ['Up to 15 pages / screens', 'Django + React stack', 'CMS for content updates', 'Advanced SEO & structured data', 'Payment gateway integration', 'Core Web Vitals optimisation', '60 days post-launch support'] },
      { name: 'Enterprise', price: 24999, original: 34999, popular: false, desc: 'Complex portals and platforms', features: ['Up to 25 pages', 'Multi-tenant architecture', 'Custom ERP / CRM integration', 'SSO / OAuth2 authentication', '99.9% uptime SLA', 'Dedicated DevOps setup', '6 months post-launch support'] },
    ],
  },
  'ecommerce': {
    title: 'E-Commerce Solutions',
    subtitle: 'Scalable online stores and marketplaces built to drive sales across India and beyond.',
    tagline: 'Commerce, Accelerated',
    plans: [
      { name: 'Starter', price: 19999, original: 24999,popular: false, desc: 'Custom store', features: ['Custom store setup', 'Up to 50 products', 'Razorpay / Stripe payments', 'Mobile-responsive theme', 'Basic SEO', '30 days support'] },
      { name: 'Growth', price: 29999, original: 49999, popular: true, desc: 'Custom storefront with AI search', features: ['Custom Next.js storefront', 'Headless CMS', 'AI-powered search & recommendations', 'Inventory + order management', 'Multi-language', 'Loyalty programme', '90 days support'] },
      { name: 'Enterprise', price: 89999, original: 149999, popular: false, desc: 'Multi-vendor marketplace', features: ['Marketplace with vendor onboarding', 'Custom commission & payout engine', 'Multi-warehouse fulfilment', 'B2B + B2C flows', 'Mobile apps (iOS + Android)', 'Dedicated team', '12 months support'] },
    ],
  },
  'startups': {
    title: 'Startups',
    subtitle: 'MVP to Series A — we build the product that gets you funded and your first 10,000 users.',
    tagline: 'From Idea to Launch',
    plans: [
      { name: 'Contact Us', price: 0, popular: false, desc: '6-week MVP build', features: ['Discovery + design sprint', 'Working MVP (web or mobile)', 'Investor-ready demo', 'Pitch deck assets', '30 days support'] },
    ],
  },
  'enterprises': {
    title: 'Enterprises',
    subtitle: 'ERP systems, business automation, and internal dashboards that transform how large organisations operate.',
    tagline: 'Enterprise-Grade, Always',
    plans: [
      { name: 'Pilot', price: 109999, popular: false, desc: 'Single-department automation', features: ['Process audit', 'Custom internal tool', 'SSO integration', 'Training & rollout', '60 days support'] },
      { name: 'Suite', price: 209999, popular: true, desc: 'Cross-functional platform', features: ['ERP / CRM customisation', 'Workflow automation', 'BI dashboards', 'Multi-team rollout', '90 days support'] },
      { name: 'Enterprise', price: 399999, popular: false, desc: 'Org-wide digital transformation', features: ['Custom platform build', 'Legacy system migration', 'Compliance (ISO / SOC 2)', 'Dedicated delivery team', '12 months support'] },
    ],
  },
};

// Categories on /services page
export const serviceCategories = [
  { num: '01', title: 'Solutions', sub: 'Platform builds for specific verticals', count: '4 offerings', items: [
    { id: 'ecommerce', icon: 'shopping-cart', title: 'E-Commerce Solutions', tagline: 'Commerce, Accelerated', desc: 'Scalable online stores and marketplaces built to drive sales across India and beyond.' },
    { id: 'travel', icon: 'users', title: 'Travel & Hospitality', tagline: 'Explore the World', desc: 'Booking platforms, travel guides, and hospitality solutions designed to enhance the travel experience.' },
  ]},
  { num: '02', title: 'Industries', sub: 'Sectors we know inside out', count: '4 offerings', items: [
    { id: 'startups', icon: 'rocket', title: 'Startups', tagline: 'From Idea to Launch', desc: 'MVP to Series A — we build the product that gets you funded and your first 10,000 users.' },
    { id: 'enterprises', icon: 'building-2', title: 'Enterprises', tagline: 'Enterprise-Grade, Always', desc: 'ERP systems, business automation, and internal dashboards that transform how large organisations operate.' },
  ]},
];
