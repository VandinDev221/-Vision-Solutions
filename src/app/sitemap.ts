import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://visionsolutionsbr.vercel.app";
  const routes = ["", "/produtos", "/servicos", "/tecnologia", "/sobre", "/contato", "/privacidade", "/termos"];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
