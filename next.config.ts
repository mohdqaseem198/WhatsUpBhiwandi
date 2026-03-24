import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  typescript: {
    ignoreBuildErrors: true, // 🔥 IGNORE ALL TS ERRORS
  },
  
  /* config options here */
  images : {
    domains : ['res.cloudinary.com']
  }
};

export default nextConfig;
