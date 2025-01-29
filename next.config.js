/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig

module.exports = {
  images: {
    formats: ["image/avif", "image/webp"], // Enable modern formats
    deviceSizes: [320, 640, 768, 1024, 1200], // Optimize for different screens
    domains: ["cdn.discordapp.com", "images.unsplash.com"]
  },
};

