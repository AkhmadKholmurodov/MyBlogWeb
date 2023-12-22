/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
            domains: ['media.graphassets.com'],
            // unoptimized: true, //add
    },
    // output: 'export',  // addd
};

module.exports = nextConfig;