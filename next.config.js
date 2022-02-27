/** @type {import('next').NextConfig} */

const BASE_DIR = "/metadocs";

const nextConfig = {
  reactStrictMode: true,
  basePath: BASE_DIR,
  assetPrefix: BASE_DIR,
  publicRuntimeConfig: {
    basePath: BASE_DIR,
  }
};

module.exports = nextConfig;
