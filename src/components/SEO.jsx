import { useEffect } from 'react';

const SITE_NAME = 'SiteRadiant';
const DEFAULT_DESCRIPTION = 'SiteRadiant builds SEO-ready websites, mobile apps, AI systems, and automation workflows for growing businesses.';

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