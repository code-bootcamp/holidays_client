/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: true,
  generateBuildId: () => "holidays-client",
  swcMinify: true,

  exportPathMap: () => ({
    "/": { page: "/" },
    "/404": { page: "/404" },
  }),
};

const withPWA = require("next-pwa")({
  pwa: {
    dest: "public",
    register: true,
    skipWaitings: true,
    disabled: process.env.NODE_ENV === "development",
    sw: "sw.js",
  },
});

// module.exports = {
//   images: {
//     loader: "imgix",
//     domain: [process.env.CLIENT], // 이미지 도메인
//   },
// };

module.exports = [nextConfig, withPWA];
