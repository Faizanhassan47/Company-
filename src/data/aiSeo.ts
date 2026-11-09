/** Answer-style FAQs optimized for search and AI citation. Keep factual and non-hyped. */
export const HOME_FAQS = [
  {
    question: 'What does Tekmora Solutions do?',
    answer:
      'Tekmora Solutions designs and develops custom software, web applications, mobile apps, and SaaS products for businesses that need technology built around how they work.'
  },
  {
    question: 'Who should hire Tekmora Solutions?',
    answer:
      'Businesses and startups that need a new application, an internal operations system, a SaaS product, a mobile app, or improvements to an existing platform. Digital agencies can also partner with Tekmora for development capacity.'
  },
  {
    question: 'Does Tekmora only build new products?',
    answer:
      'No. Tekmora works on new products and on existing systems that need new features, better workflows, integrations, or technical improvements.'
  },
  {
    question: 'How do I start a project with Tekmora?',
    answer:
      'Share a short project description through the contact form at tekmorasolution.com/contact. Tekmora reviews the requirements, arranges a discussion if the project looks suitable, and agrees scope before a proposal.'
  },
  {
    question: 'Where can I see Tekmora’s work?',
    answer:
      'Selected projects and case studies are published at tekmorasolution.com/work, including the DOME internal operations product case study.'
  }
] as const;

export const buildFaqSchema = (faqs: ReadonlyArray<{ question: string; answer: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(faq => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer
    }
  }))
});
