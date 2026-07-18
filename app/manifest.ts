import { MetadataRoute } from 'next';
import { seoContent } from '@/content/seo';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: seoContent.title.split(' | ')[0],
    short_name: 'Samarth',
    description: seoContent.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a0a',
    theme_color: '#0a0a0a',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
