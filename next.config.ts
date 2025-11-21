import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/:slug",
        destination: "https://api.lamarshalada.com/:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
