/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/smacks',
  images: {
    domains: ["localhost"],
    loader: 'custom',
    loaderFile: './customImageLoader.js',
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
