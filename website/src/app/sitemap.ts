import type { MetadataRoute } from "next";

const siteUrl = "https://rahatkhanna.me";

const publicRoutes = [
  "/",
  "/projects",
  "/projects/agent-observability",
  "/speaking",
  "/vision",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return publicRoutes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : route === "/speaking" ? 0.9 : 0.8,
  }));
}
