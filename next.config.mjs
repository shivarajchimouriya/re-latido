/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});
const nextConfig = {
  logging: {
    fetches: {
      fullUrl: true
    }
  },
  images: {
    formats: ["image/avif", "image/webp"],
    // allow images form all domains
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],

  },
};

export default withPWA({ nextConfig });
