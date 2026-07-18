import React from 'react';
import { cn } from '@/utils';

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  as?: React.ElementType;
  clean?: boolean; // If true, removes max-width and default padding
}

/**
 * @file components/layout/Container.tsx
 * @description Central layout container limiting width and providing consistent horizontal alignment.
 */
export function Container({
  children,
  className,
  as: Component = 'div',
  clean = false,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        !clean && 'mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12',
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
