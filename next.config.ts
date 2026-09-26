import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Allow LAN access (e.g. 192.168.1.15) during development without blocking HMR
  allowedDevOrigins: [
    '192.168.1.15',
    '192.168.1.15:3000',
    '192.168.*',
    'localhost:3000',
    '127.0.0.1:3000',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
