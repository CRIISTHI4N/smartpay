/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    trailingSlash: true,
    images: {
      unoptimized: true
    },
    // Removemos assetPrefix para evitar conflictos con next/font
  };
  
  export default nextConfig;
  