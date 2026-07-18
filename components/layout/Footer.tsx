import Link from 'next/link';

import { heroContent } from '@/content/hero';
import { navigationContent } from '@/content/navigation';
import { Container } from './Container';

/**
 * @file components/layout/Footer.tsx
 * @description Minimalist, high-contrast semantic footer element rendering copyright
 * and secondary social navigation links.
 */
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-border bg-background py-8 md:py-12 mt-auto transition-colors duration-300">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-foreground-muted">
        <div>
          <span>© {currentYear} {heroContent.name}. All rights reserved.</span>
        </div>

        <nav className="flex items-center space-x-6" aria-label="Social Navigation">
          {navigationContent.footer.map((item) => {
            const isExternal = item.external;
            return (
              <Link
                key={item.label}
                href={item.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className="hover:text-foreground transition-theme focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </Container>
    </footer>
  );
}
