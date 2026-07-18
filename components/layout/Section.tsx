import React from 'react';
import { cn } from '@/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  variant?: 'default' | 'elevated' | 'ambient';
}

/**
 * @file components/layout/Section.tsx
 * @description Standardized structural section wrapper offering consistent vertical margins,
 * semantic structures, and premium background styling options (e.g. ambient radial glows).
 */
export function Section({
  children,
  className,
  as: Component = 'section',
  variant = 'default',
  ...props
}: SectionProps) {
  return (
    <Component
      className={cn(
        'relative py-16 sm:py-24 md:py-32 overflow-hidden transition-colors duration-300',
        variant === 'elevated' && 'bg-background-elevated border-y border-border',
        variant === 'ambient' && 'bg-radial-glow',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
