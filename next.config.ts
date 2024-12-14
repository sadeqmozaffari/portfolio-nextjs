import type {NextConfig} from 'next';
const isProd = process.env.NODE_ENV === 'production';
const nextConfig: NextConfig = {
  /* config options here */

  reactStrictMode: true,
  images: {
    domains: ['localhost'],
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix: isProd ? '/portfolio-nextjs/' : '',
  basePath: isProd ? '/portfolio-nextjs' : '',
  output: 'export',
};

export default nextConfig;
