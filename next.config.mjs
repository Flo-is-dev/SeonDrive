import NextI18NextConfig from "./next-i18next.config.js";

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // Active le support de Styled Components avec SWC
  },
  ...NextI18NextConfig,
};

export default nextConfig;
