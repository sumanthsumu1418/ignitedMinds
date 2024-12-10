// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images: {
//     domains: ['ignitedmindsit.com'],
//   },
// };

// export default nextConfig;


// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   reactStrictMode: true,
//   env: {
//     SMTP_EMAIL: process.env.SMTP_EMAIL,
//     SMTP_PASSWORD: process.env.SMTP_PASSWORD,
//   },
//   images: {
//     domains: ['ignitedmindsit.com'],
//   },
// };

// export default nextConfig;



import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  env: {
    SMTP_EMAIL: process.env.SMTP_EMAIL,
    SMTP_PASSWORD: process.env.SMTP_PASSWORD,
  },
  images: {
    domains: ['ignitedmindsit.com'],
  },
  async rewrites() {
    return [
      {
        source: '/sitemap.xml',
        destination: '/api/sitemap.xml',
      },
    ];
  },
};

export default nextConfig;
