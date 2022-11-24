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
      // {
      //   source: '/:code',
      //   destination: '/code',
      // },
      // {
      //   source: '/referral/#code',
      //   destination: '/referral#:code',
      // },
    ];
  },
}

module.exports = nextConfig
