import { type NextConfig } from "next";

let basePath = '';


if (process.env.GITHUB_REPOSITORY) {
  basePath = process.env.GITHUB_REPOSITORY.split('/')[1];
}


const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: 'out-dist',
  basePath,
};

export default nextConfig;
