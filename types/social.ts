/**
 * @file types/social.ts
 * @description Types for social media and professional profile links.
 */

/** Supported social / professional platform identifiers. */
export type SocialPlatform =
  | 'github'
  | 'linkedin'
  | 'twitter'
  | 'instagram'
  | 'youtube'
  | 'email'
  | 'website';

/** A single social or contact link. */
export interface SocialLink {
  /** Platform identifier used for icon selection and aria labels. */
  platform: SocialPlatform;
  /** Full URL or mailto: address. */
  href: string;
  /** Optional custom label override (defaults to platform name). */
  label?: string;
}
