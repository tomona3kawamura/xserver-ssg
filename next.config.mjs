/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // ↓ ここを追加
  output: 'export',
  // SSGではnext/imageが利用できない。今回はunoptimizedで割愛
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
