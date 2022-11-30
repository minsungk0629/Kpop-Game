const path = require("path"); // 1. path 선언

const nextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: `https://www.googleapis.com/youtube/v3/:path*`,
      },
    ];
  },
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: ["i.ytimg.com"],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "styles/_variables.scss"; @import "styles/_mixins.scss";`, // 2. sassOptions 옵션 추가
  },
};

module.exports = nextConfig;
