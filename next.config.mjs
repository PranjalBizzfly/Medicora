/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // 60: home hero photos (under a dark overlay, so lower quality is not visible).
  images: { qualities: [60, 75, 85] },
};

export default nextConfig;
