import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Active le support de Styled Components avec SWC
  },
  async headers() {
    return [
      {
        source: "/:lang(fr|kr|cn){/}*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=3600",
          },
        ],
      },
    ];
  },
  images: {
    domains: ["avatars.githubusercontent.com", "lh3.googleusercontent.com"], // Ajout du domaine pour les images externes
  },
};

export default withNextIntl(nextConfig);
