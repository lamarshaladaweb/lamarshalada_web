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
        source: "/go/:slug",
        destination: "https://api.lamarshalada.com/go/:slug",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
