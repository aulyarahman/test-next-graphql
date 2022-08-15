/** @type {import('next').NextConfig} */

const env = {
  GRAPHQL_SERVER: 'https://graphql.anilist.co',
}

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env,
  images: { domains: ['s4.anilist.co'] },
}

module.exports = nextConfig
