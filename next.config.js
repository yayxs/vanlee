const withMDX = require('@next/mdx')()

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx']
  // Optionally, add any other Next.js config below
}

module.exports = withMDX(nextConfig) // 将其配置为使用 MDX：
