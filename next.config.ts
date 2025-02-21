const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        remotePatterns: [
            {
                protocol: "http",
                hostname: "localhost",
                port: "3000",
                pathname: "/**",
            },
            {
                protocol: "http",
                hostname: "localhost",
                port: "1337",
                pathname: "/uploads/**",
            },
            {
                protocol: "http",
                hostname: "192.168.10.177",
                port: "1337",
                pathname: "/uploads/**",
            },
            {
                protocol: "http",
                hostname: "api.sims4helper.ru",
                port: "80",
                pathname: "/uploads/**",
            },

            {
                protocol: "https",
                hostname: "img.youtube.com",
                port: "",
                pathname: "/vi/**",
            },
        ],
    },
};

module.exports = nextConfig;
