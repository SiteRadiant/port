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
        "telephone": "+91-0000000000",
        "contactType": "customer service",
        "areaServed": ["IN", "US", "GB", "AU"],
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

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};
