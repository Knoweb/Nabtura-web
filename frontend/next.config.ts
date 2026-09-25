import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    qualities: [75, 90],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        // Safe caching for non-hashed static public assets
        source: '/(.*\\.(?:svg|png|jpg|jpeg|gif|webp|avif|ico))$',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=86400, stale-while-revalidate=2592000',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
