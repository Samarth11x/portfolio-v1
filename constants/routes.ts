/**
 * @file constants/routes.ts
 * @description Centralised route definitions for type-safe navigation.
 *
 * Using a const object instead of raw strings prevents typos and makes
 * refactoring routes a single-file operation.
 */

export const ROUTES = {
  home: '/',
  about: '/#about',
  projects: '/#projects',
  skills: '/#skills',
  contact: '/#contact',
} as const;

/** Union of all valid route values. */
export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
