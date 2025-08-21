import type { NextConfig } from "next";

/**
 * The Next.js configuration object for the application.
 *
 * @remarks
 * This configuration sets up environment variables, image domains, and experimental features.
 *
 * @property env - Defines environment variables to be exposed to the client and server.
 * @property env.MODE - The current mode of the application (e.g., development, production).
 * @property env.API - The base URL or endpoint for the API.
 * @property env.PORT - The port on which the application runs.
 * @property env.NEXT_PUBLIC_SITE_URL - The public URL of the site.
 *
 * @property images - Configuration for the Next.js Image Optimization API.
 * @property images.domains - An array of allowed external image domains. Here, only "localhost" is allowed.
 *
 * @property experimental - Enables experimental Next.js features.
 * @property experimental.globalNotFound - Enables the global not-found feature for handling 404 pages.
 */
const nextConfig: NextConfig = {
  /* config options here */

  env: {
    MODE: process.env.MODE,
    API: process.env.API,
    PORT: process.env.PORT,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },

  images: {
    domains: ["localhost"],
  },
  experimental: {
    globalNotFound: true,
  },
};

export default nextConfig;
