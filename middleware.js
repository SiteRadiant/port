export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - static (public files)
     */
    '/((?!api|_next/static|_next/image|favicon.ico|static|.*\\..*).*)',
  ],
};

export default function middleware(request) {
  const url = new URL(request.url);
  const acceptHeader = request.headers.get('Accept') || '';
  
  const validPaths = [
    '/', '/contact', '/services', '/about', '/faq', '/privacy', '/terms-and-conditions',
    '/website-development', '/website-design', '/landing-page-development', '/ecommerce-development',
    '/web-application-development', '/ai-automation', '/lms-development', '/website-development-mumbai',
    '/custom-website-development', '/website-redesign', '/conversion-focused-web-design', '/shopify-alternatives',
    '/how-much-does-a-custom-website-cost', '/custom-website-vs-shopify', '/when-to-redesign-your-website', 
    '/why-websites-fail-to-convert', '/portfolio', '/case-studies', '/case-studies/fly-with-ranjita',
    '/blog', '/website-cost-india', '/website-vs-landing-page', '/seo-friendly-website'
  ];

  // 1. Markdown content negotiation
  if (acceptHeader.includes('text/markdown')) {
    let mdContent = '';
    
    if (validPaths.includes(url.pathname)) {
      if (url.pathname === '/') {
        mdContent = `# Custom Websites Built to Turn Visitors Into Customers\n\nSiteRadiant is a premier agency building SEO-ready websites, robust e-commerce platforms, and custom software for scaling businesses.\n\n## Our Services\n- Custom Website Development\n- Website Redesign\n- Conversion-Focused Web Design\n- Shopify Alternatives\n\n[Contact Us](/contact)`;
      } else {
        mdContent = `# SiteRadiant: ${url.pathname}\n\nContent for this page is available. We build high-converting websites and software.`;
      }
      return new Response(mdContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept'
        }
      });
    } else {
      // 404 Markdown
      return new Response('# 404 Not Found\n\nThe requested path does not exist on SiteRadiant. Please check our [sitemap](/sitemap.xml) or read our [Agent Instructions](/llms.txt).', {
        status: 404,
        headers: {
          'Content-Type': 'text/markdown; charset=utf-8',
          'Vary': 'Accept'
        }
      });
    }
  }

  // 2. HTML 404s for invalid paths
  const isStaticAsset = url.pathname.includes('.') && !url.pathname.endsWith('.html');
  if (!isStaticAsset && !validPaths.includes(url.pathname)) {
    return new Response('404 Not Found. Please visit our homepage at https://siteradiant.co.in', {
      status: 404,
      headers: {
        'Content-Type': 'text/html; charset=utf-8'
      }
    });
  }
}
