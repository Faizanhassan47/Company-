import React, { useEffect } from 'react';
import { buildOrganizationSchema, WEBSITE_ID } from '../../data/aiSeo';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
  robots?: string;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  jsonLd,
  robots = 'index, follow, max-image-preview:large'
}) => {
  useEffect(() => {
    // 1. Update Title
    const formattedTitle = title.includes('Tekmora') ? title : `${title} | Tekmora`;
    document.title = formattedTitle;

    // 2. Update Meta Description
    let metaDesc = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.name = 'description';
      document.head.appendChild(metaDesc);
    }
    metaDesc.content = description;

    let robotsMeta = document.querySelector('meta[name="robots"]') as HTMLMetaElement;
    if (!robotsMeta) {
      robotsMeta = document.createElement('meta');
      robotsMeta.name = 'robots';
      document.head.appendChild(robotsMeta);
    }
    robotsMeta.content = robots;

    // 3. Update Canonical
    const currentUrl = canonical || `${window.location.origin}${window.location.pathname}`;
    const socialImage = image
      ? new URL(image, 'https://www.tekmorasolution.com').href
      : 'https://www.tekmorasolution.com/og-image-optimized.jpg';
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // 4. Update OpenGraph Tags
    const metaTags = [
      { property: 'og:title', content: formattedTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type === 'article' ? 'article' : 'website' },
      { property: 'og:site_name', content: 'Tekmora Solutions' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:image', content: socialImage },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'Tekmora Solutions — custom software and app development' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image', content: socialImage },
      { name: 'twitter:title', content: formattedTitle },
      { name: 'twitter:description', content: description },
      { name: 'author', content: 'Tekmora Solutions' }
    ];

    metaTags.forEach((meta) => {
      const isProperty = 'property' in meta;
      const attrName = isProperty ? 'property' : 'name';
      const attrValue = isProperty ? meta.property : meta.name;

      let tag = document.querySelector(`meta[${attrName}="${attrValue}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute(attrName, attrValue as string);
        document.head.appendChild(tag);
      }
      tag.content = meta.content;
    });

    // 5. Inject JSON-LD Schema
    const scriptId = 'tekmora-schema-jsonld';
    let scriptTag = document.getElementById(scriptId) as HTMLScriptElement;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = scriptId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const defaultOrganizationSchema = buildOrganizationSchema();

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      name: 'Tekmora Solutions',
      url: 'https://www.tekmorasolution.com/',
      inLanguage: 'en-US',
      publisher: { '@id': defaultOrganizationSchema['@id'] },
      potentialAction: {
        '@type': 'CommunicateAction',
        target: 'https://www.tekmorasolution.com/contact',
        name: 'Discuss Your Project'
      }
    };

    const breadcrumbParts = window.location.pathname.split('/').filter(Boolean);
    const breadcrumbSchema = breadcrumbParts.length > 0
      ? {
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.tekmorasolution.com/' },
            ...breadcrumbParts.map((part, index) => ({
              '@type': 'ListItem',
              position: index + 2,
              name: part.replace(/-/g, ' ').replace(/\b\w/g, character => character.toUpperCase()),
              item: `https://www.tekmorasolution.com/${breadcrumbParts.slice(0, index + 1).join('/')}`
            }))
          ]
        }
      : null;

    const suppliedSchemas = jsonLd
      ? Array.isArray(jsonLd) ? jsonLd : [jsonLd]
      : [];
    const hasBreadcrumbSchema = suppliedSchemas.some(schema => schema['@type'] === 'BreadcrumbList');
    const pageSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      '@id': `${currentUrl}#webpage`,
      name: formattedTitle,
      description,
      url: currentUrl,
      inLanguage: 'en-US',
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': defaultOrganizationSchema['@id'] }
    };

    const schemaToInject = [
      defaultOrganizationSchema,
      websiteSchema,
      pageSchema,
      ...suppliedSchemas,
      ...(breadcrumbSchema && !hasBreadcrumbSchema ? [breadcrumbSchema] : [])
    ];

    scriptTag.textContent = JSON.stringify(schemaToInject);

    return () => {
      // Cleanup on unmount if needed
    };
  }, [title, description, canonical, image, type, jsonLd, robots]);

  const formattedTitle = title.includes('Tekmora') ? title : `${title} | Tekmora`;
  const currentUrl = canonical || 'https://www.tekmorasolution.com/';
  const socialImage = image
    ? new URL(image, 'https://www.tekmorasolution.com').href
    : 'https://www.tekmorasolution.com/og-image-optimized.jpg';
  const organization = buildOrganizationSchema();
  const website = {
    '@context': 'https://schema.org', '@type': 'WebSite', '@id': WEBSITE_ID,
    name: 'Tekmora Solutions', url: 'https://www.tekmorasolution.com/', inLanguage: 'en-US',
    publisher: { '@id': organization['@id'] }
  };
  const page = {
    '@context': 'https://schema.org', '@type': 'WebPage', '@id': `${currentUrl}#webpage`,
    name: formattedTitle, description, url: currentUrl, inLanguage: 'en-US',
    isPartOf: { '@id': WEBSITE_ID }, about: { '@id': organization['@id'] }
  };
  const schemas = [organization, website, page, ...(jsonLd ? (Array.isArray(jsonLd) ? jsonLd : [jsonLd]) : [])];

  const schemaScript = (
    <script id="tekmora-schema-jsonld" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }} />
  );

  // Metadata is emitted during SSR and moved into <head> by the prerenderer.
  // In the browser, useEffect owns those head nodes; rendering a second set in
  // the hydrated app would make React try to claim nodes outside #root.
  if (typeof document !== 'undefined') return schemaScript;

  return (
    <>
      <title>{formattedTitle}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={currentUrl} />
      <meta property="og:type" content={type === 'article' ? 'article' : 'website'} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={formattedTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={socialImage} />
      <meta property="og:site_name" content="Tekmora Solutions" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={formattedTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={socialImage} />
      {schemaScript}
    </>
  );
};
