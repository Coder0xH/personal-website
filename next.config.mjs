/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable new features while maintaining compatibility
  experimental: {
    // Enable optimizations for server components
    serverActions: true,
    // Enable new image optimization features
    optimizePackageImports: ['react-icons'],
  },
  // Improved image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // TypeScript features
  typescript: {
    // Enable incremental type checking
    incrementalTypeChecks: true,
  },
  // Webpack optimization
  webpack: (config) => {
    config.optimization = {
      ...config.optimization,
      moduleIds: 'deterministic',
    }
    return config
  },
  postinstall: 'prisma generate',
}

export default nextConfig
