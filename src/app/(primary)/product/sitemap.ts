import { env } from "@/config/environment";
import { API } from "@/resources";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
  const result = await API.Product.getAll();
  const productData = result.data.data;

  return productData.map((product) => ({
    url: `${env.SITE_URL}/product/details/${product._id}`,
    lastModified: product.updatedAt,
  }));
};

export default sitemap;