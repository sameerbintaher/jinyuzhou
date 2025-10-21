/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export", // Commented for dev mode
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
