const fs = require('fs');

let mockJs = fs.readFileSync('src/mock/mock.js', 'utf8');

// Update navLinks
mockJs = mockJs.replace("{ label: 'Website Development', href: '/website-development' }", "{ label: 'Custom Website Development', href: '/custom-website-development' }");
mockJs = mockJs.replace("{ label: 'Website Design', href: '/website-design' }", "{ label: 'Website Redesign', href: '/website-redesign' }");
mockJs = mockJs.replace("{ label: 'Landing Page Development', href: '/landing-page-development' }", "{ label: 'Conversion Web Design', href: '/conversion-focused-web-design' }");

// Also add Shopify Alternatives under Solutions
mockJs = mockJs.replace("{ label: 'E-Commerce', href: '/ecommerce-development' }", "{ label: 'E-Commerce', href: '/ecommerce-development' },\n      { label: 'Shopify Alternatives', href: '/shopify-alternatives' }");

// Update Blog resources in navLinks
mockJs = mockJs.replace("{ label: 'Website Cost in India', href: '/website-cost-india' }", "{ label: 'Cost of Custom Website', href: '/how-much-does-a-custom-website-cost' }");
mockJs = mockJs.replace("{ label: 'Website vs Landing Page', href: '/website-vs-landing-page' }", "{ label: 'Custom vs Shopify', href: '/custom-website-vs-shopify' }");
mockJs = mockJs.replace("{ label: 'SEO Friendly Website', href: '/seo-friendly-website' }", "{ label: 'Why Websites Fail', href: '/why-websites-fail-to-convert' }");

// Update footerLinks
mockJs = mockJs.replace("'Websites', 'Web Design', 'Web Apps'", "'Custom Websites', 'Website Redesign', 'Shopify Alternatives'");
mockJs = mockJs.replace("'Website Cost India', 'Website vs Landing Page', 'SEO Guidelines'", "'Custom Website Cost', 'When to Redesign', 'Why Websites Fail'");

fs.writeFileSync('src/mock/mock.js', mockJs);

console.log("mock.js updated!");
