import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactCompiler: false,
  images: {
    qualities: [75, 80, 100],
  },
};

export default nextConfig;
