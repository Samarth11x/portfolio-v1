'use client';

/**
 * @file components/layout/Header.tsx
 * @description Floating navigation header supporting active status matching,
 * responsive mobile overlays, keyboard focus locks, and theme switching.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Menu, X, Sun, Moon } from 'lucide-react';

import { heroContent } from '@/content/hero';
import { navigationContent } from '@/content/navigation';
import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useTheme } from '@/components/layout/ThemeContext';
import { Container } from './Container';
import { cn } from '@/utils';

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const scrollY = useScrollPosition();
  const { theme, toggleTheme } = useTheme();

  // Close mobile menu on escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
      }
    };
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const isScrolled = scrollY > 20;

  return (
    <header
      className={cn(
        'sticky top-0 z-50 w-full transition-all duration-300 border-b',
        isScrolled
          ? 'glass-elevated border-border py-3'
          : 'bg-transparent border-transparent py-5'
      )}
    >
      <Container className="flex items-center justify-between">
        {/* Brand / Logo */}
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground hover:text-accent transition-theme focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
          aria-label={`${heroContent.name} home`}
        >
          {heroContent.name}
          <span className="text-accent">.</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8" aria-label="Main Navigation">
          {navigationContent.main.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground-muted hover:text-foreground transition-theme focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Controls (Theme switch + Menu) */}
        <div className="flex items-center space-x-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md border border-border bg-background-elevated hover:bg-background-hover hover:border-border-hover text-foreground-muted hover:text-foreground transition-theme focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          >
            {theme === 'dark' ? (
              <Sun className="h-4.5 w-4.5" />
            ) : (
              <Moon className="h-4.5 w-4.5" />
            )}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-md border border-border bg-background-elevated hover:bg-background-hover text-foreground-muted hover:text-foreground md:hidden transition-theme focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
          >
            {mobileMenuOpen ? (
              <X className="h-4.5 w-4.5" />
            ) : (
              <Menu className="h-4.5 w-4.5" />
            )}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation"
          className="fixed inset-x-0 top-[65px] bottom-0 z-40 bg-background/95 backdrop-blur-md md:hidden animate-fade-in"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
        >
          <nav className="flex flex-col items-center justify-start pt-16 space-y-8 h-full px-6">
            {navigationContent.main.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium text-foreground-muted hover:text-foreground transition-theme focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
