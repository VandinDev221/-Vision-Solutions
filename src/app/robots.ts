import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      }
    ],
    sitemap: "https://visionsolutions.dev.br/sitemap.xml",
    host: "https://visionsolutions.dev.br",
  };
}
