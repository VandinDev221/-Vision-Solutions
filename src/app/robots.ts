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
    sitemap: "https://visionsolutionsbr.vercel.app/sitemap.xml",
    host: "https://visionsolutionsbr.vercel.app",
  };
}
