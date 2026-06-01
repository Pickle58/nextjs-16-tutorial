import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        hostname: 'courteous-goshawk-449.convex.cloud',
        protocol: 'https',
        port: '',
      }
    ],
  },
};

export default nextConfig;
