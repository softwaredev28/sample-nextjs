/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "de", "ja", "id"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
