import React from 'react';
import { cn } from '@/utils';

interface DividerProps extends React.HTMLAttributes<HTMLDivElement> {
  orientation?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

/**
 * @file components/ui/Divider.tsx
 * @description Horizontal or vertical separation line supporting optional inline text/label.
 */
export function Divider({
  orientation = 'horizontal',
  children,
  className,
  ...props
}: DividerProps) {
  if (orientation === 'vertical') {
    return (
      <div
        className={cn('inline-block h-full w-[1px] bg-border align-middle self-stretch min-h-[1em]', className)}
        role="separator"
        aria-orientation="vertical"
        {...props}
      />
    );
  }

  return (
    <div
      className={cn('flex w-full items-center my-6', className)}
      role="separator"
      aria-orientation="horizontal"
      {...props}
    >
      <div className="flex-grow h-[1px] bg-border" />
      {children && (
        <span className="px-4 text-[10px] text-foreground-subtle bg-transparent uppercase tracking-widest font-bold select-none">
          {children}
        </span>
      )}
      {children && <div className="flex-grow h-[1px] bg-border" />}
    </div>
  );
}
