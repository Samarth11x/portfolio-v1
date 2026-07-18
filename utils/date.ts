/**
 * @file utils/date.ts
 * @description Date formatting helpers using the Intl API (no external dependency).
 */

/**
 * Formats a date into a human-readable string.
 *
 * @param date - A Date object, ISO string, or timestamp number.
 * @param options - Intl.DateTimeFormatOptions to customise the output.
 * @returns A formatted date string in the user's locale.
 *
 * @example
 * formatDate('2024-01-15')        // → 'January 15, 2024'
 * formatDate(new Date(), { month: 'short' }) // → 'Jan 15, 2024'
 */
export function formatDate(
  date: Date | string | number,
  options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  },
): string {
  return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
}

/**
 * Returns a human-readable relative time string.
 *
 * @param date - A Date object, ISO string, or timestamp number.
 * @returns Relative time string e.g. '3 months ago', 'in 2 days'.
 *
 * @example
 * getRelativeTime(Date.now() - 1000 * 60 * 60 * 24 * 90) // → '3 months ago'
 */
export function getRelativeTime(date: Date | string | number): string {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
  const diffMs = new Date(date).getTime() - Date.now();
  const diffSec = Math.round(diffMs / 1000);
  const diffMin = Math.round(diffSec / 60);
  const diffHour = Math.round(diffMin / 60);
  const diffDay = Math.round(diffHour / 24);
  const diffMonth = Math.round(diffDay / 30);
  const diffYear = Math.round(diffMonth / 12);

  if (Math.abs(diffSec) < 60) return rtf.format(diffSec, 'second');
  if (Math.abs(diffMin) < 60) return rtf.format(diffMin, 'minute');
  if (Math.abs(diffHour) < 24) return rtf.format(diffHour, 'hour');
  if (Math.abs(diffDay) < 30) return rtf.format(diffDay, 'day');
  if (Math.abs(diffMonth) < 12) return rtf.format(diffMonth, 'month');
  return rtf.format(diffYear, 'year');
}
