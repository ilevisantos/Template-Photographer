/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Libera domínios externos usados no portfólio (Unsplash é só placeholder de dev).
    // Troque pelas fotos reais e remova este bloco em produção.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
