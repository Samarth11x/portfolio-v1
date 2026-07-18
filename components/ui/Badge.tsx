import React from 'react';
import { cn } from '@/utils';

type BadgeVariant = 'default' | 'primary' | 'success' | 'warning' | 'danger';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  variant?: BadgeVariant;
}

/**
 * @file components/ui/Badge.tsx
 * @description Small pill-style badge used for technology tags, status tags, or indicators.
 */
export function Badge({
  children,
  className,
  variant = 'default',
  ...props
}: BadgeProps) {
  const baseStyles =
    'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold tracking-wide border transition-theme';

  const variants = {
    default:
      'bg-background-hover text-foreground-muted border-border',
    primary:
      'bg-accent/10 text-accent border-accent/20',
    success:
      'bg-emerald-500/10 text-emerald-500 border-emerald-500/25 dark:text-emerald-400',
    warning:
      'bg-amber-500/10 text-amber-500 border-amber-500/25 dark:text-amber-400',
    danger:
      'bg-red-500/10 text-red-500 border-red-500/25 dark:text-red-400',
  };

  return (
    <span
      className={cn(baseStyles, variants[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
}
