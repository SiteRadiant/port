import { useEffect } from 'react';

const SITE_NAME = 'SiteRadiant';
const DEFAULT_DESCRIPTION = 'SiteRadiant is a premier agency building SEO-ready websites, robust e-commerce platforms, intelligent AI systems, and custom automation workflows for scaling businesses.';

const setMetaTag = (selector, attributes) => {
  const existingTag = document.head.querySelector(selector);
  const metaTag = existingTag || document.createElement('meta');

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      metaTag.setAttribute(key, value);
    }
  });

  if (!existingTag) {
    document.head.appendChild(metaTag);
  }
};

const setLinkTag = (selector, attributes) => {
  const existingTag = document.head.querySelector(selector);
  const linkTag = existingTag || document.createElement('link');

  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      linkTag.setAttribute(key, value);
    }
  });

  if (!existingTag) {
    document.head.appendChild(linkTag);
  }
};

const setFaviconLinks = () => {
  const links = [
    ['link[rel="icon"][href$="/favicon.ico"]', { rel: 'icon', href: '/favicon.ico', sizes: 'any' }],
    ['link[rel="icon"][sizes="16x16"]', { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/android-chrome-16x16.png' }],
    ['link[rel="icon"][sizes="32x32"]', { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/android-chrome-32x32.png' }],
    ['link[rel="apple-touch-icon"]', { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' }],
    ['link[rel="manifest"]', { rel: 'manifest', href: '/site.webmanifest' }],
  ];

  links.forEach(([selector, attributes]) => setLinkTag(selector, attributes));
};

const setJsonLd = (schema) => {
  const existingTag = document.head.querySelector('script[data-seo-jsonld="true"]');

  if (!schema || schema.length === 0) {
    if (existingTag) {
      existingTag.remove();
    }
    return;
  }

  const scriptTag = existingTag || document.createElement('script');
  scriptTag.type = 'application/ld+json';
  scriptTag.setAttribute('data-seo-jsonld', 'true');
  scriptTag.textContent = JSON.stringify(Array.isArray(schema) ? schema : [schema]);

  if (!existingTag) {
    document.head.appendChild(scriptTag);
  }
};

const SEO = ({
  title,
  description = DEFAULT_DESCRIPTION,
  path = '/',
  noIndex = false,
  schema,
}) => {
  useEffect(() => {
    const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
    const canonicalUrl = new URL(path, window.location.origin).href;

    document.title = pageTitle;
    setFaviconLinks();
    setMetaTag('meta[name="description"]', { name: 'description', content: description });
    setMetaTag('meta[name="robots"]', {
      name: 'robots',
      content: noIndex ? 'noindex,nofollow' : 'index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1',
    });
    setMetaTag('meta[property="og:title"]', { property: 'og:title', content: pageTitle });
    setMetaTag('meta[property="og:description"]', { property: 'og:description', content: description });
    setMetaTag('meta[property="og:type"]', { property: 'og:type', content: 'website' });
    setMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
    setMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: pageTitle });
    setMetaTag('meta[name="twitter:description"]', { name: 'twitter:description', content: description });
    setLinkTag('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl });
    setJsonLd(schema);
  }, [description, noIndex, path, schema, title]);

  return null;
};

export default SEO;