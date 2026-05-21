// Mock data for Site Radiant
export const BRAND = 'Site Radiant';

export const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true, items: [
    { label: 'Mobile App Development', slug: 'mobile-app' },
    { label: 'Website Development', slug: 'website' },
    { label: 'AI Services', slug: 'ai' },
    { label: 'Automation Solutions', slug: 'automation' },
  ]},
  { label: 'Solutions', href: '/services', hasDropdown: true, items: [
    { label: 'E-Commerce', slug: 'ecommerce' },
    { label: 'Social Media', slug: 'social' },
    { label: 'Dating Platforms', slug: 'dating' },
    { label: 'Gaming Solutions', slug: 'gaming' },
  ]},
  { label: 'Industries', href: '/services', hasDropdown: true, items: [
    { label: 'Startups', slug: 'startups' },
    { label: 'Enterprises', slug: 'enterprises' },
    { label: 'Retail & Commerce', slug: 'retail' },
    { label: 'Media & Entertainment', slug: 'media' },
  ]},
  { label: 'Case Studies', href: '#', hasDropdown: false },
  { label: 'About', href: '/about', hasDropdown: false },
];

export const partnerLogos = [
  { name: 'CRED', color: '#000000' },
  { name: 'TradingView', color: '#2962FF' },
];

export const services = [
  { id: 'mobile-app', icon: 'smartphone', title: 'Mobile App Development', desc: 'Native iOS & Android apps with React Native — pixel-perfect and App Store-ready.' },
  { id: 'website', icon: 'globe', title: 'Website Development', desc: 'Fast, SEO-optimised websites and web apps built on modern frameworks.' },
  { id: 'marketing', icon: 'trending-up', title: 'Marketing Automation', desc: 'Email sequences, lead scoring, and multi-channel funnels that generate leads 24/7.' },
  { id: 'sales', icon: 'bar-chart-3', title: 'Sales Automation', desc: 'CRM integrations, pipeline automation, and follow-up sequences engineered to close deals.' },
  { id: 'ai', icon: 'sparkles', title: 'AI Services', desc: 'Custom AI agents, chatbots, and ML pipelines that embed intelligence into your business.' },
  { id: 'cloud', icon: 'cloud', title: 'Cloud & DevOps', desc: 'AWS, Google Cloud, Docker & Kubernetes — scalable infrastructure with CI/CD pipelines built in.' },
];

export const stats = [
  { value: 100, suffix: '+', label: 'Projects Delivered' },
  { value: 97, suffix: '%', label: 'Client Satisfaction' },
  { value: 10, suffix: '+', label: 'Industries Served' },
  { value: 5, suffix: '+', label: 'Countries Served' },
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
  { brand: 'CRED', country: 'India', flag: '🇮🇳', color: '#000000', quote: 'Site Radiant understood our product philosophy from day one. The reward engine they built is what makes our app feel like a club.', author: 'Head of Product, CRED', caseTitle: 'Reward Engine That Made Paying Bills Addictive' },
  { brand: 'Canva', country: 'Australia', flag: '🇦🇺', color: '#00C4CC', quote: 'Site Radiant delivered production-quality work at a pace we had only seen from top-tier internal teams.', author: 'Growth Engineering Lead, Canva', caseTitle: 'Rebuilt Mobile Onboarding in 6 Weeks' },
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
      { name: 'Starter', badge: 'Early Bird', price: 24999, original: 27999, popular: false, desc: 'Clean, fast marketing websites', features: ['Up to 5 pages', 'Mobile-responsive design', 'Basic SEO setup', 'Contact form', 'Google Analytics integration', '14 days post-launch support'] },
      { name: 'Growth', price: 149999, popular: true, desc: 'Full-stack web app with CMS', features: ['Up to 15 pages / screens', 'Django + React stack', 'CMS for content updates', 'Advanced SEO & structured data', 'Payment gateway integration', 'Core Web Vitals optimisation', '60 days post-launch support'] },
      { name: 'Enterprise', price: 349999, popular: false, desc: 'Complex portals and platforms', features: ['Up to 25 pages', 'Multi-tenant architecture', 'Custom ERP / CRM integration', 'SSO / OAuth2 authentication', '99.9% uptime SLA', 'Dedicated DevOps setup', '6 months post-launch support'] },
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
      { name: 'Starter', price: 34999, popular: false, desc: 'Shopify / WooCommerce store', features: ['Shopify or WooCommerce setup', 'Up to 50 products', 'Razorpay / Stripe payments', 'Mobile-responsive theme', 'Basic SEO', '30 days support'] },
      { name: 'Growth', price: 199999, popular: true, desc: 'Custom storefront with AI search', features: ['Custom Next.js storefront', 'Headless CMS', 'AI-powered search & recommendations', 'Inventory + order management', 'Multi-language', 'Loyalty programme', '90 days support'] },
      { name: 'Enterprise', price: 749999, popular: false, desc: 'Multi-vendor marketplace', features: ['Marketplace with vendor onboarding', 'Custom commission & payout engine', 'Multi-warehouse fulfilment', 'B2B + B2C flows', 'Mobile apps (iOS + Android)', 'Dedicated team', '12 months support'] },
    ],
  },
  'social': {
    title: 'Social Media Platforms',
    subtitle: 'Community apps, creator platforms, and social networks engineered for engagement and scale.',
    tagline: 'Communities That Scale',
    plans: [
      { name: 'Starter', price: 79999, popular: false, desc: 'Niche community MVP', features: ['User profiles & feeds', 'Posts, likes & comments', 'Push notifications', 'Basic moderation', '30 days support'] },
      { name: 'Growth', price: 299999, popular: true, desc: 'Creator platform with monetisation', features: ['Creator profiles & subscriptions', 'Live streaming integration', 'Stories & reels', 'In-app tipping (UPI)', 'Analytics dashboard', '90 days support'] },
      { name: 'Enterprise', price: 999999, popular: false, desc: 'Full social network at scale', features: ['Real-time messaging at scale', 'AI moderation pipeline', 'Recommendation feed (ML)', 'Multi-region deployment', 'Dedicated team', '12 months support'] },
    ],
  },
  'dating': {
    title: 'Dating Platforms',
    subtitle: 'Matchmaking apps and relationship platforms built with safety, AI, and engagement at the core.',
    tagline: 'Connections That Matter',
    plans: [
      { name: 'Starter', price: 99999, popular: false, desc: 'Swipe-based dating MVP', features: ['Profiles + swipe matching', 'Chat after match', 'Photo verification', 'Reporting & blocking', '30 days support'] },
      { name: 'Growth', price: 349999, popular: true, desc: 'AI matching + premium tiers', features: ['AI matching algorithm', 'Video calls in-app', 'Premium subscriptions', 'Boost & super-likes', 'Safety center', '90 days support'] },
      { name: 'Enterprise', price: 1199999, popular: false, desc: 'Niche dating platform at scale', features: ['Custom matching ML model', 'Background verification API', 'Event/meet-up engine', 'Multi-city expansion ready', 'Dedicated team', '12 months support'] },
    ],
  },
  'gaming': {
    title: 'Gaming Solutions',
    subtitle: 'Multiplayer games, casino platforms, and real-money gaming systems built for scale and compliance.',
    tagline: 'Games People Love',
    plans: [
      { name: 'Starter', price: 149999, popular: false, desc: 'Casual mobile game', features: ['Unity / Godot game build', 'Leaderboards', 'In-app purchases', 'Basic analytics', '30 days support'] },
      { name: 'Growth', price: 499999, popular: true, desc: 'Multiplayer game with backend', features: ['Real-time multiplayer backend', 'Matchmaking system', 'Tournaments & rewards', 'Live ops dashboard', 'Anti-cheat', '90 days support'] },
      { name: 'Enterprise', price: 1499999, popular: false, desc: 'Real-money gaming platform', features: ['RMG compliance (state-wise)', 'KYC + AML integration', 'Wallet + payouts', 'Fraud detection', 'Dedicated team', '12 months support'] },
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
  'retail': {
    title: 'Retail & Commerce',
    subtitle: 'POS systems, inventory management, and loyalty platforms that modernise retail operations.',
    tagline: 'Retail, Reimagined',
    plans: [
      { name: 'Starter', price: 79999, popular: false, desc: 'Single-store POS + inventory', features: ['POS app (iPad / Android)', 'Inventory + barcode', 'Daily reports', 'GST invoicing', '30 days support'] },
      { name: 'Chain', price: 349999, popular: true, desc: 'Multi-store operations', features: ['Multi-store inventory sync', 'Loyalty programme', 'Staff management', 'Cloud reporting', '90 days support'] },
      { name: 'Omnichannel', price: 999999, popular: false, desc: 'Online + offline unified', features: ['E-commerce + POS unified', 'Real-time stock sync', 'Customer 360 view', 'Marketing automation', '12 months support'] },
    ],
  },
  'media': {
    title: 'Media & Entertainment',
    subtitle: 'OTT platforms, content portals, and streaming infrastructure built for scale and monetisation.',
    tagline: 'Engage Every Audience',
    plans: [
      { name: 'Content Portal', price: 149999, popular: false, desc: 'Web + mobile content portal', features: ['Article + video CMS', 'Subscriptions or ads', 'Mobile apps', 'Analytics', '30 days support'] },
      { name: 'OTT Launch', price: 699999, popular: true, desc: 'OTT platform MVP', features: ['Video streaming (HLS/DASH)', 'Subscriptions + payments', 'TV apps (Android TV / FireTV)', 'Recommendation engine', '90 days support'] },
      { name: 'OTT Scale', price: 1999999, popular: false, desc: 'Production OTT at scale', features: ['Multi-region CDN', 'DRM (Widevine / FairPlay)', 'Live streaming', 'Ad-tech integration', 'Dedicated team', '12 months support'] },
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
