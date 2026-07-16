/**
 * @file utils/cn.ts
 * @description Class name utility — merges Tailwind classes with proper conflict resolution.
 *
 * Uses `clsx` for conditional class logic and `tailwind-merge` to deduplicate
 * conflicting Tailwind utilities (e.g. `p-2 p-4` → `p-4`).
 *
 * @example
 * cn('text-red-500', isActive && 'font-bold', 'text-blue-500')
 * // → 'font-bold text-blue-500'  (text-red-500 is overridden)
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges class names with Tailwind conflict resolution.
 *
 * @param inputs - Any number of class values (string, object, array, falsy).
 * @returns A single merged class name string.
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
