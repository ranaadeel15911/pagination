/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
            protocol:"https",
            hostname:"images.unsplash.com"
            },
            {
            protocol:"https",
            hostname:"fastly.picsum.photos"
            },
        ]
    }
};

export default nextConfig;
