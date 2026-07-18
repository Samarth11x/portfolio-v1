import React from 'react';
import { cn } from '@/utils';

interface TagProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  active?: boolean;
}

/**
 * @file components/ui/Tag.tsx
 * @description Interactive tag button used for filtering lists (e.g. project tech tags).
 */
export function Tag({
  children,
  className,
  active = false,
  ...props
}: TagProps) {
  return (
    <button
      type="button"
      className={cn(
        'inline-flex items-center justify-center rounded-md px-3 py-1.5 text-xs font-medium border transition-theme cursor-pointer select-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-accent',
        active
          ? 'bg-accent text-accent-foreground border-accent'
          : 'bg-background-elevated text-foreground-muted border-border hover:border-border-hover hover:text-foreground',
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
