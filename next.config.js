/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
      mdxRs: true,
      serverComponentsExternalPackages: ['mongoose']
    },
  }
   
  const withMDX = require('@next/mdx')()
  module.exports = withMDX(nextConfig)