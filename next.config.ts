import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Let the dev server be opened from the LAN address (e.g. phone testing).
  allowedDevOrigins: ["192.168.56.1"],
};

export default nextConfig;
