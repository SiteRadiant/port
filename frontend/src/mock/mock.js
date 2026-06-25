// Mock data for SiteRadiant
export const BRAND = 'SiteRadiant';

export const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true, items: [
    { label: 'Website Development', slug: 'website' },
  ]},
  { label: 'Solutions', href: '/services', hasDropdown: true, items: [
    { label: 'E-Commerce', slug: 'ecommerce' },
    { label: 'Travel & Hospitality', slug: 'travel' },
  ]},
  { label: 'Industries', href: '/services', hasDropdown: true, items: [
    { label: 'Startups', slug: 'startups' },
    { label: 'Enterprises', slug: 'enterprises' },
  ]},
  { label: 'About', href: '#', hasDropdown: false },
];

export const partnerLogos = [
  { name: 'EliteDrop', color: '#0c2451' },
];

export const services = [
  { id: 'travel', icon: 'travel', title: 'Travel & Hospitality', desc: 'Booking platforms, travel guides, and hospitality solutions designed to enhance the travel experience.' },
  { id: 'website', icon: 'globe', title: 'Website Development', desc: 'Fast, SEO-optimised websites and web apps built on modern frameworks.' },
];

export const stats = [
  { value: 150, suffix: '+', label: 'Projects Delivered' },
  { value: 98, suffix: '%', label: 'Client Satisfaction' },
  { value: 25, suffix: '+', label: 'Industries Served' },
  { value: 18, suffix: '+', label: 'Countries Served' },
];

export const industries = [
  { icon: 'shopping-cart', color: 'orange', title: 'E-Commerce', desc: 'Storefronts, payments, inventory & AI recommendations.' },
  { icon: 'users', color: 'red', title: 'Social Media', desc: 'Creator platforms, communities & analytics dashboards.' },
  { icon: 'heart', color: 'pink', title: 'Dating', desc: 'Matching algorithms, messaging & safety moderation.' },
  { icon: 'gamepad-2', color: 'green', title: 'Gaming', desc: 'Game backends, leaderboards & real-time multiplayer.' },
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
  Services: ['Mobile Apps', 'Websites', 'Marketing Automation', 'Sales Automation', 'AI Services'],
  Industries: ['E-Commerce', 'Social Media', 'Dating Apps', 'Gaming'],
  Company: ['About', 'Case Studies', 'Contact', 'Privacy Policy', 'Terms'],
};

// Pricing data (INR)
export const fmt = (n) => '₹' + n.toLocaleString('en-IN');

export const getStartingPrice = (serviceId) => pricingData[serviceId]?.plans?.[0]?.price ?? 0;

export const pricingData = {
  'mobile-app': {
    title: 'Mobile App Development',
    subtitle: 'Native and cross-platform mobile apps that engage users and scale with your business.',
    tagline: 'Built for a Billion Users',
    plans: [
      { name: 'Starter', badge: 'Launch Offer', price: 41499, original: 49999, popular: false, desc: 'Perfect for MVPs and early-stage apps', features: ['Up to 8 screens (iOS & Android)', 'React Native + Expo stack', 'REST API integration', 'Push notifications', 'App Store & Play Store submission', '30 days post-launch support'] },
      { name: 'Growth', price: 149999, popular: true, desc: 'Full-featured app ready for scale', features: ['Up to 15 screens (iOS & Android)', 'Custom UI design system', 'Offline-first architecture', 'In-app payments (Razorpay / Stripe)', 'Analytics & crash reporting', 'UPI & biometric auth', '90 days post-launch support'] },
      { name: 'Enterprise', price: 599999, popular: false, desc: 'Complex, high-traffic apps at scale', features: ['Up to 25 screens', 'Custom native modules', 'Multi-language & accessibility', 'Advanced security (SSL pinning, OWASP)', 'CI/CD with EAS Build', 'Dedicated project manager', '6 months post-launch support'] },
    ],
  },
  'website': {
    title: 'Website Development',
    subtitle: 'Fast, SEO-ready websites and web applications built to convert visitors into customers.',
    tagline: 'Crafted to Convert',
    plans: [
      { name: 'Starter', badge: 'Early Bird', price: 4999, original: 9999, popular: false, desc: 'Clean, fast marketing websites', features: ['Up to 4 pages', 'Mobile-responsive design', 'Basic SEO setup', 'Contact form', '14 days post-launch support'] },
      { name: 'Growth', price: 9999, original: 12999, popular: true, desc: 'Full-stack web app with CMS', features: ['Up to 15 pages / screens', 'Django + React stack', 'CMS for content updates', 'Advanced SEO & structured data', 'Payment gateway integration', 'Core Web Vitals optimisation', '60 days post-launch support'] },
      { name: 'Enterprise', price: 14999, original: 19999, popular: false, desc: 'Complex portals and platforms', features: ['Up to 25 pages', 'Multi-tenant architecture', 'Custom ERP / CRM integration', 'SSO / OAuth2 authentication', '99.9% uptime SLA', 'Dedicated DevOps setup', '6 months post-launch support'] },
    ],
  },
  'ai': {
    title: 'AI Services',
    subtitle: 'Production-ready AI that automates work, delights users, and gives your business a competitive edge.',
    tagline: 'Intelligence, Engineered',
    plans: [
      { name: 'Starter', price: 49999, popular: false, desc: 'AI chatbot or basic agent', features: ['Custom AI chatbot', 'OpenAI / Gemini integration', 'Knowledge base ingestion', 'Web widget embed', 'Up to 1,000 monthly conversations', '30 days support'] },
      { name: 'Growth', price: 199999, popular: true, desc: 'Multi-channel AI agents', features: ['Multi-agent system', 'WhatsApp + Web + Email channels', 'RAG with vector database', 'Custom fine-tuning', 'Analytics dashboard', 'Up to 25,000 conversations / month', '90 days support'] },
      { name: 'Enterprise', price: 799999, popular: false, desc: 'Custom ML pipelines & MLOps', features: ['Custom model training', 'MLOps & monitoring pipeline', 'On-prem / VPC deployment', 'SLA + dedicated MLE', 'Unlimited conversations', 'Compliance (GDPR / DPDP)', '12 months support'] },
    ],
  },
  'automation': {
    title: 'Automation Solutions',
    subtitle: 'Eliminate repetitive work and connect your tools so your team can focus on what matters.',
    tagline: 'Work Smarter, Scale Faster',
    plans: [
      { name: 'Starter', price: 19999, popular: false, desc: 'Connect 3-5 tools, basic flows', features: ['Up to 5 automations', 'Zapier / Make / n8n setup', 'Email + Slack notifications', 'CRM data sync', '14 days support'] },
      { name: 'Growth', price: 99999, popular: true, desc: 'Sales + marketing automation suite', features: ['Up to 20 automations', 'CRM (HubSpot / Zoho) setup', 'Email drip campaigns', 'Lead scoring & routing', 'Reporting dashboards', '60 days support'] },
      { name: 'Enterprise', price: 399999, popular: false, desc: 'Custom RPA + workflow engine', features: ['Unlimited automations', 'Custom RPA bots', 'ERP / SAP integration', 'Approval workflows', 'Audit logs & compliance', 'Dedicated automation engineer', '6 months support'] },
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
      { name: 'MVP Sprint', price: 99999, popular: false, desc: '6-week MVP build', features: ['Discovery + design sprint', 'Working MVP (web or mobile)', 'Investor-ready demo', 'Pitch deck assets', '30 days support'] },
      { name: 'Growth Build', price: 399999, popular: true, desc: 'Production product for first users', features: ['Web + mobile app', 'Payments & onboarding', 'Analytics + experimentation', 'Growth-loop instrumentation', '90 days support'] },
      { name: 'Series A Ready', price: 999999, popular: false, desc: 'Scale-ready architecture', features: ['Multi-region infrastructure', 'SOC 2 prep', 'Hiring playbook + handover', 'Dedicated CTO advisory', '12 months support'] },
    ],
  },
  'enterprises': {
    title: 'Enterprises',
    subtitle: 'ERP systems, business automation, and internal dashboards that transform how large organisations operate.',
    tagline: 'Enterprise-Grade, Always',
    plans: [
      { name: 'Pilot', price: 199999, popular: false, desc: 'Single-department automation', features: ['Process audit', 'Custom internal tool', 'SSO integration', 'Training & rollout', '60 days support'] },
      { name: 'Suite', price: 799999, popular: true, desc: 'Cross-functional platform', features: ['ERP / CRM customisation', 'Workflow automation', 'BI dashboards', 'Multi-team rollout', '90 days support'] },
      { name: 'Enterprise', price: 2499999, popular: false, desc: 'Org-wide digital transformation', features: ['Custom platform build', 'Legacy system migration', 'Compliance (ISO / SOC 2)', 'Dedicated delivery team', '12 months support'] },
    ],
  },
};

// Categories on /services page
export const serviceCategories = [
  { num: '01', title: 'Services', sub: 'Core software development capabilities', count: '4 offerings', items: [
    { id: 'mobile-app', icon: 'smartphone', title: 'Mobile App Development', tagline: 'Built for a Billion Users', desc: 'Native and cross-platform mobile apps that engage users and scale with your business.' },
    { id: 'website', icon: 'globe', title: 'Website Development', tagline: 'Crafted to Convert', desc: 'Fast, SEO-ready websites and web applications built to convert visitors into customers.' },
    { id: 'ai', icon: 'sparkles', title: 'AI Services', tagline: 'Intelligence, Engineered', desc: 'Production-ready AI that automates work, delights users, and gives your business a competitive edge.' },
    { id: 'automation', icon: 'zap', title: 'Automation Solutions', tagline: 'Work Smarter, Scale Faster', desc: 'Eliminate repetitive work and connect your tools so your team can focus on what matters.' },
  ]},
  { num: '02', title: 'Solutions', sub: 'Platform builds for specific verticals', count: '4 offerings', items: [
    { id: 'ecommerce', icon: 'shopping-cart', title: 'E-Commerce Solutions', tagline: 'Commerce, Accelerated', desc: 'Scalable online stores and marketplaces built to drive sales across India and beyond.' },
    { id: 'social', icon: 'users', title: 'Social Media Platforms', tagline: 'Communities That Scale', desc: 'Community apps, creator platforms, and social networks engineered for engagement and scale.' },
    { id: 'dating', icon: 'heart', title: 'Dating Platforms', tagline: 'Connections That Matter', desc: 'Matchmaking apps and relationship platforms built with safety, AI, and engagement at the core.' },
    { id: 'gaming', icon: 'gamepad-2', title: 'Gaming Solutions', tagline: 'Games People Love', desc: 'Multiplayer games, casino platforms, and real-money gaming systems built for scale and compliance.' },
  ]},
  { num: '03', title: 'Industries', sub: 'Sectors we know inside out', count: '4 offerings', items: [
    { id: 'startups', icon: 'rocket', title: 'Startups', tagline: 'From Idea to Launch', desc: 'MVP to Series A — we build the product that gets you funded and your first 10,000 users.' },
    { id: 'enterprises', icon: 'building-2', title: 'Enterprises', tagline: 'Enterprise-Grade, Always', desc: 'ERP systems, business automation, and internal dashboards that transform how large organisations operate.' },
    { id: 'retail', icon: 'store', title: 'Retail & Commerce', tagline: 'Retail, Reimagined', desc: 'POS systems, inventory management, and loyalty platforms that modernise retail operations.' },
    { id: 'media', icon: 'tv', title: 'Media & Entertainment', tagline: 'Engage Every Audience', desc: 'OTT platforms, content portals, and streaming infrastructure built for scale and monetisation.' },
  ]},
];
