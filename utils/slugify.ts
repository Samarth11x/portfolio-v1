/**
 * @file utils/slugify.ts
 * @description Converts a string to a URL-safe slug.
 */

/**
 * Converts a plain string to a lowercase, hyphenated URL slug.
 *
 * @param value - The input string to slugify.
 * @returns A URL-safe slug string.
 *
 * @example
 * slugify('My Awesome Project!')  // → 'my-awesome-project'
 * slugify('React & TypeScript')   // → 'react-typescript'
 */
export function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '') // remove non-word chars
    .replace(/[\s_-]+/g, '-') // collapse whitespace and underscores to hyphens
    .replace(/^-+|-+$/g, ''); // strip leading/trailing hyphens
}
