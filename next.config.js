/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    output: 'export',
    basePath: '',
    reactStrictMode: true,
    swcMinify: true,
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
    },
    images: {
        loader: 'custom',
        loaderFile: './my-loader.ts',
        formats:['image/webp'],
        unoptimized: true
    }
}

module.exports = nextConfig;
