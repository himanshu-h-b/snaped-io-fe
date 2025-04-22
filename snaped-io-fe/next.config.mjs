/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "img.freepik.com",
      },
      {
        hostname: "avatar.iran.liara.run",
      },
      {
        hostname: "i.ibb.co",
      },
      {
        hostname: "prod-tos.avatar2everyone.com",
      },
      {
        hostname: "images.pexels.com",
      },
    ],
  },
  experimental: {
    serverActions: {
      allowedOrigins: [
        "localhost:3000",
        "t2app.allforone.ai",
        "snaped.artizence.com",
        "snaped.artizence.com/",
        // "http://167.86.121.218:8080",
      ],
    },
  },
};

export default nextConfig;
