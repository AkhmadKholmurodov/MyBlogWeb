/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
            domains: ['media.graphassets.com'],
    },
    // output: 'export', 
};

module.exports = nextConfig;