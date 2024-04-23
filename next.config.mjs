/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    // allow images form all domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
