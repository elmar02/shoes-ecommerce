/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['fakestoreapi.com'], // Add your allowed domains for image optimization here
  },
}

module.exports = nextConfig
