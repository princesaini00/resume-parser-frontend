import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://web-production-3e7e.up.railway.app/'], // Replace with your actual backend domain
  },
};

export default nextConfig;
