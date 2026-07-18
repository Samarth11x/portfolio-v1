import React from 'react';
import { cn } from '@/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  interactive?: boolean; // Toggles subtle hover border highlights and shadow shifts
}

/**
 * @file components/ui/Card.tsx
 * @description Premium, content-agnostic card design holding structured details (Header, Body, Footer).
 */
export function Card({
  children,
  className,
  interactive = false,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border border-border bg-background-elevated p-6 text-foreground shadow-sm transition-theme',
        interactive && 'hover:border-border-hover hover:shadow-md cursor-pointer hover:bg-background-hover',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardHeader({ children, className, ...props }: CardHeaderProps) {
  return (
    <div
      className={cn('flex flex-col space-y-1.5 mb-4', className)}
      {...props}
    >
      {children}
    </div>
  );
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div className={cn('text-sm text-foreground-muted leading-relaxed', className)} {...props}>
      {children}
    </div>
  );
}

interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function CardFooter({ children, className, ...props }: CardFooterProps) {
  return (
    <div
      className={cn('flex items-center pt-4 mt-4 border-t border-border/50', className)}
      {...props}
    >
      {children}
    </div>
  );
}
