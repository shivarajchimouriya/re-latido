/** @type {import('next').NextConfig} */

const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
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
