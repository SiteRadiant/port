const fs = require('fs');

let code = fs.readFileSync('src/components/Footer.jsx', 'utf8');

code = code.replace("if (link === 'Websites') href = '/website-development';", "if (link === 'Custom Websites') href = '/custom-website-development';");
code = code.replace("if (link === 'Web Design') href = '/website-design';", "if (link === 'Website Redesign') href = '/website-redesign';");
code = code.replace("if (link === 'Web Apps') href = '/web-application-development';", "if (link === 'Shopify Alternatives') href = '/shopify-alternatives';");
code = code.replace("if (link === 'Website Cost India') href = '/website-cost-india';", "if (link === 'Custom Website Cost') href = '/how-much-does-a-custom-website-cost';");
code = code.replace("if (link === 'Website vs Landing Page') href = '/website-vs-landing-page';", "if (link === 'When to Redesign') href = '/when-to-redesign-your-website';");
code = code.replace("if (link === 'SEO Guidelines') href = '/seo-friendly-website';", "if (link === 'Why Websites Fail') href = '/why-websites-fail-to-convert';");

fs.writeFileSync('src/components/Footer.jsx', code);
console.log("Footer.jsx updated!");
