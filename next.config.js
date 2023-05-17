/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["pbs.twimg.com", "abs.twimg.com"],
    deviceSizes: [493, 705, 1005],
    imageSizes: [150, 350, 480],
  },
};

module.exports = nextConfig;
