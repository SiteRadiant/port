import { regionalPricingData } from '../lib/pricingConfig';

// Mock data for SiteRadiant
export const BRAND = 'SiteRadiant';

export const navLinks = [
  { label: 'Services', href: '/services', hasDropdown: true, items: [
    { label: 'Custom Website Development', href: '/custom-website-development' },
    { label: 'Website Redesign', href: '/website-redesign' },
    { label: 'Web Application Development', href: '/web-application-development' },
    { label: 'Conversion Web Design', href: '/conversion-focused-web-design' },
  ]},
  { label: 'Solutions', href: '/services', hasDropdown: true, items: [
    { label: 'E-Commerce', href: '/ecommerce-development' },
      { label: 'Shopify Alternatives', href: '/shopify-alternatives' },
    { label: 'Learning Management System', href: '/lms-development' },
    { label: 'AI Automation', href: '/ai-automation' },
  ]},
  { label: 'Our Product', href: 'https://flow.siteradiant.co.in', hasDropdown: false },
  { label: 'Portfolio', href: '/portfolio', hasDropdown: false },
  { label: 'Resources', href: '#', hasDropdown: true, items: [
    { label: 'Blog', href: '/blog' },
    { label: 'Cost of Custom Website', href: '/how-much-does-a-custom-website-cost' },
    { label: 'Custom vs Shopify', href: '/custom-website-vs-shopify' },
    { label: 'Why Websites Fail', href: '/why-websites-fail-to-convert' },
  ]},
  { label: 'About', href: '/about', hasDropdown: false },
  { label: 'FAQ', href: '/faq', hasDropdown: false },
];

export const partnerLogos = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'Tailwind CSS', color: '#38BDF8' },
  { name: 'Django', color: '#092E20' },
  { name: 'Node.js', color: '#68A063' },
  { name: 'PostgreSQL', color: '#336791' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'Vercel', color: '#ffffff' },
];

export const services = [
  { id: 'website', icon: 'globe', title: 'Website Development', desc: 'Fast, SEO-optimised websites and web apps built on modern frameworks.' },
  { id: 'landing_page', icon: 'layout-template', title: 'Landing Page Development', desc: 'High-converting, stunning few-page websites to capture leads and drive sales.' },
  { id: 'ecommerce', icon: 'shopping-cart', title: 'E-Commerce Solutions', desc: 'Scalable online stores and marketplaces built to drive sales.' },
  { id: 'lms', icon: 'graduation-cap', title: 'Learning Management System', desc: 'Scalable e-learning platforms to host courses, manage students, and monetize knowledge.' },
];

export const stats = [
  { value: 100, suffix: '%', label: 'Hand-Crafted Custom Code' },
  { value: 99, suffix: '+', label: 'Target Speed Score' },
  { value: 14, suffix: ' Days', label: 'Average Turnaround' },
  { value: 100, suffix: '%', label: 'Founder-Led Communication' },
];

export const industries = [
  { icon: 'shopping-cart', color: 'orange', title: 'E-Commerce', desc: 'Storefronts, payments, inventory & AI recommendations.' },
  { icon: 'graduation-cap', color: 'blue', title: 'Education & LMS', desc: 'Custom e-learning platforms, student dashboards, and course monetization.' },
  { icon: 'sparkles', color: 'green', title: 'Other', desc: 'Custom solutions for any digital business segment.' },
];

export const processSteps = [
  { num: '01', icon: 'clock', title: 'Discovery Call', desc: 'A free 30-min session to map out goals, audience, and technical scope.' },
  { num: '02', icon: 'zap', title: 'Design & Build', desc: 'Agile development with frequent updates — you always know what is shipping next.' },
  { num: '03', icon: 'rocket', title: 'Launch & Scale', desc: 'Deploy, test on real devices, and monitor — we provide post-launch warranty support.' },
];

export const testimonials = [
  { 
    brand: 'Fly With Ranjita', 
    country: 'India', 
    flag: '🇮🇳', 
    color: '#ef4444', 
    quote: 'SiteRadiant transformed our travel portal into a high-converting booking and package discovery experience. Fast, clean, and delivered with genuine care.', 
    author: 'Founder, Fly With Ranjita', 
    caseTitle: 'Immersive Travel Agency Discovery & Booking Portal' 
  },
];

export const footerLinks = {
  Services: ['Custom Websites', 'Website Redesign', 'Shopify Alternatives', 'Landing Pages', 'E-Commerce', 'AI Automation'],
  Resources: ['Blog', 'Custom Website Cost', 'When to Redesign', 'Why Websites Fail', 'Mumbai Web Dev'],
  Company: ['Our Product', 'About', 'FAQ', 'Contact', 'Privacy Policy', 'Terms'],
};

// Pricing data (centralized configuration)
export const fmt = (n) => "₹" + n.toLocaleString("en-IN");

export const getStartingPrice = (serviceId) => {
  const service = regionalPricingData[serviceId];
  return service?.plans?.[0]?.pricing?.IN?.price ?? 0;
};

export const pricingData = regionalPricingData;

// Categories on /services page
export const serviceCategories = [
  { num: '01', title: 'Services', sub: 'Core web builds', count: '3 offerings', items: [
    { id: 'website', icon: 'globe', title: 'Website Development', tagline: 'Crafted to Convert', desc: 'Fast, SEO-optimised websites and web apps built on modern frameworks.' },
    { id: 'landing_page', icon: 'layout-template', title: 'Landing Page Development', tagline: 'Built to Convert', desc: 'High-converting, stunning single-page websites to capture leads and drive sales.' },
  ]},
  { num: '02', title: 'Solutions', sub: 'Platform builds for specific verticals', count: '4 offerings', items: [
    { id: 'ecommerce', icon: 'shopping-cart', title: 'E-Commerce Solutions', tagline: 'Commerce, Accelerated', desc: 'Scalable online stores and marketplaces built to drive sales across India and beyond.' },
    { id: 'lms', icon: 'graduation-cap', title: 'Learning Management System', tagline: 'Teach the World', desc: 'Scalable e-learning platforms to host courses, manage students, and monetize knowledge.' },
    { id: 'travel', icon: 'users', title: 'Travel & Hospitality', tagline: 'Explore the World', desc: 'Booking platforms, travel guides, and hospitality solutions designed to enhance the travel experience.' },
  ]},
  { num: '03', title: 'Industries', sub: 'Sectors we know inside out', count: '4 offerings', items: [
    { id: 'startups', icon: 'rocket', title: 'Startups', tagline: 'From Idea to Launch', desc: 'MVP to Series A — we build the product that gets you funded and your first 10,000 users.' },
    { id: 'enterprises', icon: 'building-2', title: 'Enterprises', tagline: 'Enterprise-Grade, Always', desc: 'ERP systems, business automation, and internal dashboards that transform how large organisations operate.' },
  ]},
];
