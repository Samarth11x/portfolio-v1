/**
 * @file types/site.ts
 * @description Site-level configuration types for global metadata and navigation.
 */

/** A single navigation link in the site header or footer. */
export interface NavItem {
  /** Human-readable label displayed in the UI. */
  label: string;
  /** Absolute or relative href for the link. */
  href: string;
  /** Whether the link points to an external resource. */
  external?: boolean;
}

/**
 * Top-level site configuration object shape.
 * Populated from `@/data/site.ts`.
 */
export interface SiteConfig {
  /** Full name of the portfolio owner. */
  name: string;
  /** Short professional title or headline. */
  title: string;
  /** Brief one-liner description used in meta tags. */
  description: string;
  /** Canonical site URL (no trailing slash). */
  url: string;
  /** Absolute URL of the Open Graph / Twitter card image. */
  ogImage: string;
  /** Primary navigation links. */
  nav: NavItem[];
  /** Footer navigation links. */
  footerNav: NavItem[];
}
