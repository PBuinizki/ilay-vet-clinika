/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ilay-vet-clinika", // Имя папки на хостинге (без слэша в конце)
  assetPrefix: "/ilay-vet-clinika", // Гарантирует, что скрипты и стили будут искаться в этой папке
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;
