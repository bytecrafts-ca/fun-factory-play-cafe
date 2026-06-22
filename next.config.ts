import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/parties",
        destination: "/birthday-parties",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
