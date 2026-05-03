import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  allowedDevOrigins: [
    '.space.chatglm.site',
    '.space-z.ai',
  ],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'unpkg.com',
      },
    ],
  },
};

export default nextConfig;
