import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: 'website' | 'article' | 'service';
  jsonLd?: Record<string, unknown> | Array<Record<string, unknown>>;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image,
  type = 'website',
  jsonLd
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

    // 3. Update Canonical
    const currentUrl = canonical || `${window.location.origin}${window.location.pathname}`;
    const socialImage = image
      ? new URL(image, 'https://www.tekmorasolution.com').href
      : 'https://www.tekmorasolution.com/og-image.jpg';
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

    const defaultOrganizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Tekmora Solutions',
      alternateName: 'Tekmora',
      url: 'https://www.tekmorasolution.com',
      logo: 'https://www.tekmorasolution.com/brand-icon.svg',
      description: 'Tekmora Solutions builds custom software, web applications, mobile apps, and SaaS products for businesses.',
      sameAs: [
        'https://www.linkedin.com/company/tekmora-solution'
      ],
      email: 'info@tekmorasolution.com',
      areaServed: 'Worldwide',
      knowsAbout: [
        'Custom Software Development',
        'Web Application Development',
        'Mobile App Development',
        'SaaS Product Development',
        'UI/UX Design',
        'API Integration and Software Engineering'
      ]
    };

    const websiteSchema = {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: 'Tekmora Solutions',
      url: 'https://www.tekmorasolution.com/',
      publisher: { '@type': 'Organization', name: 'Tekmora Solutions' }
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
      '@type': type === 'article' ? 'Article' : 'WebPage',
      name: formattedTitle,
      description,
      url: currentUrl,
      inLanguage: 'en-US'
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
  }, [title, description, canonical, image, type, jsonLd]);

  return null;
};
