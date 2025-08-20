import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   env: {
    MODE: process.env.MODE,
    API: process.env.API,
    PORT: process.env.PORT,
  }
};

export default nextConfig;
