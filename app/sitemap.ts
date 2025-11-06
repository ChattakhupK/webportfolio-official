import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://www.ckportfolio.site",
      lastModified: new Date(),
    },
    {
      url: "https://www.ckportfolio.site/experience",
      lastModified: new Date(),
    },
    {
      url: "https://www.ckportfolio.site/certification",
      lastModified: new Date(),
    },
    {
      url: "https://www.ckportfolio.site/performance",
      lastModified: new Date(),
    },
    {
      url: "https://www.ckportfolio.site/contact",
      lastModified: new Date(),
    },
  ];
}
