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
      mdContent = url.pathname === '/' ? `# Custom Websites Built to Turn Visitors Into Customers\n\nSiteRadiant is a premier agency.\n[API Docs](/openapi.json) | [Developers](/developers)` : `# SiteRadiant: ${url.pathname}\n\nContent for this page is available.`;
      return new Response(mdContent, { status: 200, headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Vary': 'Accept' } });
    } else {
      return new Response('# 404 Not Found\n\nThe requested path does not exist.', { status: 404, headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Vary': 'Accept' } });
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
