import type { MetadataRoute } from "next";

const siteUrl = "https://rahatkhanna.me";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",
          "/design-system",
          "/landing-prototype",
          "/ai-multiverse",
          "/os",
          "/writing",
        ],
      },
    ],
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
