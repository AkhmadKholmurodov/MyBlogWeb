/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
      domains: ['media.graphassets.com'],
    },
    exportPathMap: async function () {
      // Define exportPathMap if needed
      return {
        '/': { page: '/' },
        // Add other pages as needed
      };
    },
    // Other configurations...
    output: {
      // This is the configuration for the 'next export' command
      path: 'out', // Specify the output directory
      // Other export-related configurations...
    },
  };
  
  module.exports = nextConfig;
  