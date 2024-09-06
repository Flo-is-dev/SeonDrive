import NextI18NextConfig from "./next-i18next.config.mjs";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Active le support de Styled Components avec SWC
  },
  i18n: NextI18NextConfig.i18n,
};

export default nextConfig;
