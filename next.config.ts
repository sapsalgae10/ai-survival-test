import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

export default nextConfig;
// next.config.js
module.exports = {
  images: {
    domains: ["images.ctfassets.net"], // 사용할 이미지 도메인을 허용합니다.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net", // 프로토콜과 호스트명을 명시하여 외부 이미지 경로를 허용합니다.
      },
    ],
  },
};
