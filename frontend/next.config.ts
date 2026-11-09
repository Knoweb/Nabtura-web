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
  async rewrites() {
    return [
      {
        source: '/sanota-greenhouse',
        destination: 'http://165.22.251.111/',
      },
      {
        source: '/sanota-greenhouse/:path*',
        destination: 'http://165.22.251.111/:path*',
      },
      {
        source: '/assets/:path*',
        destination: 'http://165.22.251.111/assets/:path*',
      },
    ];
  },
};

export default nextConfig;
