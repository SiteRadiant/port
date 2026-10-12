export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|static|.*\\..*).*)',
  ],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('Accept') || '';
  
  if (url.pathname.startsWith('/api')) {
    const headers = { 
      'Content-Type': 'application/json',
      'RateLimit-Limit': '100',
      'RateLimit-Remaining': '99',
      'RateLimit-Reset': '60'
    };
    if (url.pathname === '/api/v1/services') {
      return new Response(JSON.stringify([{ id: "dev", name: "Custom Website Development" }]), {
        status: 200,
        headers
      });
    }
    return new Response(JSON.stringify({
      code: 'not_found',
      message: 'API endpoint not found',
      resolution: 'Check /openapi.json for valid endpoints'
    }), {
      status: 404,
      headers
    });
  }

  const validPaths = [
    '/', '/contact', '/services', '/about', '/faq', '/privacy', '/terms-and-conditions',
    '/website-development', '/website-design', '/landing-page-development', '/ecommerce-development',
    '/web-application-development', '/ai-automation', '/lms-development', '/website-development-mumbai',
    '/custom-website-development', '/website-redesign', '/conversion-focused-web-design', '/shopify-alternatives',
    '/how-much-does-a-custom-website-cost', '/custom-website-vs-shopify', '/when-to-redesign-your-website', 
    '/why-websites-fail-to-convert', '/portfolio', '/case-studies', '/case-studies/fly-with-ranjita',
    '/blog', '/website-cost-india', '/website-vs-landing-page', '/seo-friendly-website',
    '/openapi.json', '/.well-known/mcp/manifest.json', '/developers'
  ];

  if (acceptHeader.includes('text/markdown')) {
    let mdContent = '';
    if (validPaths.includes(url.pathname)) {
      mdContent = url.pathname === '/' ? `# Custom Websites Built to Turn Visitors Into Customers - SiteRadiant

SiteRadiant is a boutique web design and development studio based in Navi Mumbai, India, serving clients across India and internationally.

## Services & Transparent Pricing
- Custom Website Development (from ₹7,999 INR / ~$100 USD)
- Website Redesign & Conversion Optimization (from ₹11,499 INR / ~$140 USD)
- E-Commerce Solutions (from ₹19,999 INR / ~$240 USD)
- Learning Management Systems (from ₹24,999 INR / ~$300 USD)
- Custom Web Applications & AI Automation

## Flagship Verified Work
- Fly With Ranjita ([flywithranjita.com](https://flywithranjita.com)): High-converting, immersive travel agency portal.

## Contact & Enquiries
- Email: support@siteradiant.co.in
- Phone: +91 72089 99095 / +91 99871 14604
- [Contact Form](/contact) | [Services](/services) | [API Docs](/openapi.json)` : `# SiteRadiant: ${url.pathname}\n\nContent for this page is available. We build high-converting websites and custom software.\nContact: support@siteradiant.co.in`;
      return new Response(mdContent, { status: 200, headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Vary': 'Accept' } });
    } else {
      return new Response('# 404 Not Found\n\nThe requested path does not exist on SiteRadiant. Please check our [sitemap](/sitemap.xml) or read our [Agent Instructions](/llms.txt).', { status: 404, headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Vary': 'Accept' } });
    }
  }

  const isStaticAsset = url.pathname.includes('.') && !url.pathname.endsWith('.html');
  if (!isStaticAsset && !validPaths.includes(url.pathname)) {
    return new Response('404 Not Found. Please visit our homepage at https://siteradiant.co.in', {
      status: 404,
      headers: { 'Content-Type': 'text/html; charset=utf-8' }
    });
  }
}
