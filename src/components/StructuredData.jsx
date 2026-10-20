import React from 'react';
import { Helmet } from 'react-helmet-async';

export const StructuredData = ({ type, data }) => {
  let schema = {};

  if (type === 'Organization') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "SiteRadiant",
      "url": "https://www.siteradiant.co.in",
      "logo": "https://www.siteradiant.co.in/android-chrome-512x512.png",
      "description": "SiteRadiant is a premier agency building SEO-ready websites, robust e-commerce platforms, and custom software.",
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+91-7208999095",
        "contactType": "sales and customer support",
        "areaServed": ["IN", "US", "GB", "CA", "AE"],
        "availableLanguage": ["English", "Hindi"]
      },
      ...data
    };
  }

  if (type === 'Service') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "provider": {
        "@type": "Organization",
        "name": "SiteRadiant"
      },
      ...data
    };
  }

  if (type === 'Article') {
    schema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "publisher": {
        "@type": "Organization",
        "name": "SiteRadiant",
        "logo": {
          "@type": "ImageObject",
          "url": "https://www.siteradiant.co.in/android-chrome-512x512.png"
        }
      },
      ...data
    };
  }

  if (type === 'LocalBusiness') {
    schema = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "SiteRadiant",
      "url": "https://www.siteradiant.co.in",
      "logo": "https://www.siteradiant.co.in/android-chrome-512x512.png",
      "image": "https://www.siteradiant.co.in/android-chrome-512x512.png",
      "description": "SiteRadiant is a boutique web design and development studio building high-performance, conversion-focused websites, e-commerce stores, and custom software.",
      "telephone": "+91-7208999095",
      "priceRange": "$$",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Navi Mumbai",
        "addressRegion": "Maharashtra",
        "postalCode": "410206",
        "addressCountry": "IN"
      },
      ...data
    };
  }

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
