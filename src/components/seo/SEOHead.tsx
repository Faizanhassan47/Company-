import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  type?: 'website' | 'article' | 'service';
  jsonLd?: Record<string, any> | Array<Record<string, any>>;
}

export const SEOHead: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
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
    const currentUrl = canonical || window.location.href;
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = currentUrl;

    // 4. Update OpenGraph Tags
    const ogTags = [
      { property: 'og:title', content: formattedTitle },
      { property: 'og:description', content: description },
      { property: 'og:url', content: currentUrl },
      { property: 'og:type', content: type === 'article' ? 'article' : 'website' },
      { property: 'og:site_name', content: 'Tekmora' }
    ];

    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.content = content;
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
      name: 'Tekmora',
      url: 'https://tekmorasolution.com',
      logo: 'https://tekmorasolution.com/brand-icon.svg',
      description: 'Tekmora builds custom web platforms, mobile applications, enterprise systems and operational integrations for real business operations.',
      areaServed: 'Worldwide',
      serviceArea: 'Global',
      knowsAbout: [
        'Custom Web Application Development',
        'React Native Mobile App Development',
        'Enterprise Software Architecture',
        'SAP Business One Integration',
        'Warehouse Management Systems',
        'Custom WordPress Solutions'
      ]
    };

    const schemaToInject = jsonLd
      ? Array.isArray(jsonLd)
        ? [defaultOrganizationSchema, ...jsonLd]
        : [defaultOrganizationSchema, jsonLd]
      : defaultOrganizationSchema;

    scriptTag.textContent = JSON.stringify(schemaToInject);

    return () => {
      // Cleanup on unmount if needed
    };
  }, [title, description, canonical, type, jsonLd]);

  return null;
};
