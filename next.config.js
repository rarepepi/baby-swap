/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    config.externals.push("pino-pretty", "encoding");

    return config;
  },
  transpilePackages: ["@uniswap/widgets", "@uniswap/conedison"],
};

module.exports = nextConfig;
