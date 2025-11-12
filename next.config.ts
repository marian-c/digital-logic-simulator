import { type NextConfig } from "next";

let basePath = '';


if (process.env.GITHUB_REPOSITORY) {
  basePath = '/' + process.env.GITHUB_REPOSITORY.split('/')[1];
}


const nextConfig: NextConfig = {
  trailingSlash: true,
  output: 'export',
  distDir: 'out-dist',
  basePath,
  webpack: (config: NextConfig) => {
    config.module.rules.unshift({
      resourceQuery: /raw/,
      type: 'asset/source',
    });
    return config;
  }
};

export default nextConfig;
