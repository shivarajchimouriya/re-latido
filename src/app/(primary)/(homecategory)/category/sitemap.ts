import { env } from "@/config/environment";
import { API } from "@/resources";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const result = await API.Homepage.get();
  const categoryData = result.data.category;
  return categoryData.map((category) => ({
    url: `${env.SITE_URL}/category/${category._id}`,
    lastModified: category.updatedAt,
  }));
};

export default sitemap;
