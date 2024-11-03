/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.seondrive.com",
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: "/admin/" }, // Exclure certaines pages ou sections
    ],
  },
};
