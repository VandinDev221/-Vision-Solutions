import type { MetadataRoute } from "next";

const routes = ["", "/produtos", "/servicos", "/tecnologia", "/sobre", "/contato"];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://visionsolutions.com.br";
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
