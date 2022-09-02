/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      "store-images.s-microsoft.com",
      "cdn.cloudflare.steamstatic.com",
      "pbs.twimg.com",
      "encrypted-tbn0.gstatic.com",
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
