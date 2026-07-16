/**
 * @file lib/metadata.ts
 * @description Shared metadata factory for Next.js App Router pages.
 *
 * Provides a typed helper to construct `Metadata` objects with sensible
 * defaults, Open Graph, and Twitter card support.
 */

import type { Metadata } from 'next';

import { SITE_URL } from '@/constants/site';
import { siteConfig } from '@/data/site';

interface MetadataOptions {
  /** Page-specific title. Appended to the site name. */
  title?: string;
  /** Page-specific description. Falls back to the site description. */
  description?: string;
  /** Canonical path (no origin). Defaults to '/'. */
  canonicalPath?: string;
  /** Absolute URL to an OG image. Defaults to the site OG image. */
  ogImage?: string;
  /** Whether to prevent search engine indexing. */
  noIndex?: boolean;
}

/**
 * Generates a complete `Metadata` object for a Next.js page.
 *
 * @param options - Page-level overrides for the default site metadata.
 * @returns A fully populated Next.js `Metadata` object.
 */
export function generateMetadata({
  title,
  description,
  canonicalPath = '/',
  ogImage,
  noIndex = false,
}: MetadataOptions = {}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.name;

  const pageDescription = description ?? siteConfig.description;
  const canonicalUrl = `${SITE_URL}${canonicalPath}`;
  const ogImageUrl = ogImage ?? siteConfig.ogImage;

  return {
    title: pageTitle,
    description: pageDescription,
    metadataBase: new URL(SITE_URL),
    alternates: {
      canonical: canonicalUrl,
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: 'website',
      locale: 'en_US',
      url: canonicalUrl,
      siteName: siteConfig.name,
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: ogImageUrl,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDescription,
      images: [ogImageUrl],
    },
  };
}
