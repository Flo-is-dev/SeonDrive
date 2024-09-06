import path from "path";

/** @type {import('next-i18next').UserConfig} */
const NextI18NextConfig = {
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },
  localePath:
    typeof window === "undefined"
      ? path.resolve("./public/locales")
      : "/public/locales",
  localeDetection: false,
};

export default NextI18NextConfig;
