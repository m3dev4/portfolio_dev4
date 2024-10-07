/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: false, images: {
        domains: ['assets.website-files.com']
    }, webpack: (config) => {
        config.cache = {
            type: "filesystem",
        }
        return config
    }
};

export default nextConfig;
