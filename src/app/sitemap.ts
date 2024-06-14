import { env } from "@/config/environment";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${env.SITE_URL}`,
      changeFrequency: "monthly",
    },
    {
      url: `${env.SITE_URL}/about`,
      changeFrequency: "monthly",
    },
    {
      url: `${env.SITE_URL}/contact`,
      changeFrequency: "monthly",
    },
    {
      url: `${env.SITE_URL}/policy`,
      changeFrequency: "monthly",
    },
  ];
}
