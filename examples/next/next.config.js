/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ["healthicons-react"],
  },
};

module.exports = nextConfig;
