import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "a.mpcdn.io",
        pathname: "/ferrari/**",
      },
      {
        protocol: "https",
        hostname: "img1.wsimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "pvgp.org",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "fca-pennjersey.org",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/about.html",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/gallery.html",
        destination: "/gallery",
        permanent: true,
      },
      {
        source: "/register.html",
        destination: "/register",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
