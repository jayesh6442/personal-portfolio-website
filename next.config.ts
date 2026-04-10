import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  distDir:'dist',
  output: 'export',
  compress: true,
  images: {
    // unoptimized: true,

    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.simpleicons.org",
      },
    ],
  },
};

export default nextConfig;
