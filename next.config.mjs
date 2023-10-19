import million from "million/compiler";

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.sanity.io"],
    domains: ["media.discordapp.net"],
  },
};

export default million.next(nextConfig);
