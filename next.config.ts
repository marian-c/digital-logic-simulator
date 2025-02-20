import { type NextConfig } from "next";

const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: 'out-dist'
};

export default nextConfig;
