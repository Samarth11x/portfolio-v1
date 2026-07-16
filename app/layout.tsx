/**
 * @file app/layout.tsx
 * @description Root layout — wraps every page in the application.
 *
 * Responsibilities:
 * - Global font loading via `next/font`
 * - HTML lang attribute
 * - Global CSS import
 * - Default metadata (pages can override with their own `generateMetadata`)
 */

import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';

import '@/styles/globals.css';

import { siteConfig } from '@/data/site';
import { SITE_URL } from '@/constants/site';

// ---------------------------------------------------------------------------
// Font
// ---------------------------------------------------------------------------

/**
 * Inter is loaded with the `latin` subset only for performance.
 * The CSS variable `--font-inter` is available globally via Tailwind.
 */
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    'software engineer',
    'portfolio',
    'web developer',
    'full-stack',
    'React',
    'Next.js',
    'TypeScript',
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: siteConfig.url,
    siteName: siteConfig.name,
    title: siteConfig.name,
    description: siteConfig.description,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#0a0a0a' },
  ],
  width: 'device-width',
  initialScale: 1,
};

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-background text-foreground antialiased">
        {children}
      </body>
    </html>
  );
}
