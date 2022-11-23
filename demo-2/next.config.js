/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/',
      },
      {
        source: '/:code',
        destination: '/',
      }
    ];
  },
}

module.exports = nextConfig
