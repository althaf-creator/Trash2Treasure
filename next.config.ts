import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  env: {
    DATABASE_URL : process.env.DATABASE_URL,
    WEB3_AUTH_CLIENTID : process.env.WEB3_AUTH_CLIENTID,
    GEMINI_API_KEY : process.env.GEMINI_API_KEY,
    GOOGLE_MAPS_API_KEY : process.env.GOOGLE_MAPS_API_KEY,
  }
};

export default nextConfig;
