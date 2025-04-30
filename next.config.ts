import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['https://resume-scanning-and-filteration-production.up.railway.app/'], // Replace with your actual backend domain
  },
};

export default nextConfig;
