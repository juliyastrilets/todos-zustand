/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    loader: 'custom',
    loaderFile: 'utils/image-loader.ts',
  },
  basePath: '/todos-zustand',
  assetPrefix: '/todos-zustand',
};

module.exports = nextConfig;
