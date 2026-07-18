import { seoContent } from '@/content/seo';

export function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: seoContent.title.split(' | ')[0],
    url: seoContent.url,
    image: seoContent.ogImage,
    jobTitle: 'Software Engineer',
    worksFor: {
      '@type': 'Organization',
      name: 'Independent',
    },
    sameAs: [
      'https://github.com/Samarth11x',
      'https://linkedin.com/in/samarth',
    ],
  };

  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: seoContent.title.split(' | ')[0],
    url: seoContent.url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
    </>
  );
}
