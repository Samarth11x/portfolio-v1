import type { NextConfig } from 'next';

/**
 * @see https://nextjs.org/docs/app/api-reference/next-config-js
 */
const nextConfig: NextConfig = {
  /**
   * Enable React strict mode for highlighting potential issues.
   * This is the recommended setting for production applications.
   */
  reactStrictMode: true,

  /**
   * Turbopack root — explicitly set to suppress warnings when a parent
   * directory contains another package-lock.json.
   * @see https://nextjs.org/docs/app/api-reference/config/next-config-js/turbopack#root-directory
   */
  turbopack: {
    root: __dirname,
  },

  /**
   * Image optimization configuration.
   * Add remote hostnames here as the project grows.
   */
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [],
  },

  /**
   * Compiler options for production optimization.
   */
  compiler: {
    /**
     * Remove console.log statements in production builds only.
     */
    removeConsole:
      process.env.NODE_ENV === 'production'
        ? { exclude: ['error', 'warn'] }
        : false,
  },
};

export default nextConfig;
