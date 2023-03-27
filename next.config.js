/** @type {import('next').NextConfig} */
const nextConfig = {
  //NEXTJS React Strict Mode - https://nextjs.org/docs/api-reference/next.config.js/react-strict-mode
  reactStrictMode: true,

  //NEXTJS Environment Variables - https://nextjs.org/docs/api-reference/next.config.js/environment-variables
  env: {
    STORYBLOK_ACCESS_TOKEN: process.env.STORYBLOK_ACCESS_TOKEN,
  },
};

module.exports = nextConfig;
