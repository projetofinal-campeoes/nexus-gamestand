/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "store-images.s-microsoft.com",
      "cdn.cloudflare.steamstatic.com",
      "cdn6.aptoide.com",
      "*",
    ],
  },
};

const path = require("path");
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
};

module.exports = nextConfig;
