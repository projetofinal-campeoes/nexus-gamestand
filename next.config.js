/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
    domains: [
      "store-images.s-microsoft.com",
      "cdn.cloudflare.steamstatic.com",
      "cdn6.aptoide.com",
      "media.rawg.io",
      "img.hype.games"
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
