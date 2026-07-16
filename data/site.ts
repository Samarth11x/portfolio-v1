/**
 * @file data/site.ts
 * @description Personal site configuration data.
 *
 * This is the single source of truth for all personal information shown
 * across the portfolio. Updating values here propagates everywhere.
 *
 * ⚠️  Replace ALL placeholder values with your real information.
 */

import type { SiteConfig } from '@/types';
import { ROUTES } from '@/constants/routes';

export const siteConfig: SiteConfig = {
  name: 'Samarth',
  title: 'Software Engineer',
  description:
    'Software engineer specializing in building exceptional digital experiences.',
  url: 'https://samarth.dev',
  ogImage: 'https://samarth.dev/og.png',
  nav: [
    { label: 'About', href: ROUTES.about },
    { label: 'Projects', href: ROUTES.projects },
    { label: 'Skills', href: ROUTES.skills },
    { label: 'Contact', href: ROUTES.contact },
  ],
  footerNav: [
    { label: 'GitHub', href: 'https://github.com/Samarth11x', external: true },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com/in/samarth',
      external: true,
    },
  ],
};
