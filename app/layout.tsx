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

import { seoContent } from '@/content/seo';
import { heroContent } from '@/content/hero';
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
    default: seoContent.title,
    template: `%s | ${seoContent.title}`,
  },
  description: seoContent.description,
  keywords: seoContent.keywords,
  authors: [{ name: heroContent.name, url: seoContent.url }],
  creator: heroContent.name,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seoContent.url,
    siteName: heroContent.name,
    title: seoContent.title,
    description: seoContent.description,
    images: [
      {
        url: seoContent.ogImage,
        width: 1200,
        height: 630,
        alt: heroContent.name,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoContent.title,
    description: seoContent.description,
    images: [seoContent.ogImage],
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

import { ThemeProvider } from '@/components/layout/ThemeContext';
import { SkipToContent } from '@/components/layout/SkipToContent';
import { StructuredData } from '@/components/seo/StructuredData';

// ---------------------------------------------------------------------------
// Layout
// ---------------------------------------------------------------------------

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <head>
        <StructuredData />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(!t){var m=window.matchMedia("(prefers-color-scheme: dark)");t=m.matches?"dark":"light"}document.documentElement.classList.add(t)}catch(e){}})()`,
          }}
        />
      </head>
      <body className="bg-background text-foreground antialiased min-h-screen flex flex-col transition-colors duration-300">
        <SkipToContent />
        <ThemeProvider>
          <div id="main-content" className="flex flex-col flex-grow outline-none" tabIndex={-1}>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
