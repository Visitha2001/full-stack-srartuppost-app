import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    dangerouslyAllowSVG: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*",
      }
    ]
  },
  experimental: {
    ppr: false,
  },
  devIndicators: {
    buildActivity: false,
    buildActivityPosition: "bottom-right",
  }
};

export default nextConfig;
