/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  env: {
    RAPID_API_KEY: process.env.RAPID_API_KEY,
    RAPID_HOST_URL: process.env.RAPID_HOST_URL,
  },
};

module.exports = nextConfig;
