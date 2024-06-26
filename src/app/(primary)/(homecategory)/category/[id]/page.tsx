import CardLoader from "@/components/CardLoader";
import HomepageProductLists from "@/components/HomepageProductList";
import { env } from "@/config/environment";
import CategoryResult from "@/features/CategoryResult";
import ProductListings from "@/features/Homepage/ProductListings";
import { APPError } from "@/lib/exception";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { Metadata, MetadataRoute } from "next";
import React, { Suspense } from "react";

interface IProps {
  params: {
    id: string;
  };
}

export async function generateStaticParams() {
  const homepageData = await API.Homepage.get({
    params: { gender: "male", limit: 10, page: 1 },
  });
  const categories = homepageData.data.category;

  return categories.map((cat) => ({
    id: cat._id,
  }));
}

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const result = await API.Homepage.get({
    params: { gender: "male", limit: 10, page: 1 },
  });
  const categoryData = result.data.category;

  const category = categoryData.find((cat) => cat._id === params.id);

  if (!category) {
    return {};
  }
  return {
    title: category?.title,
    keywords: category?.slug,
    openGraph: {
      type: "website",
      description: category.title,
      title: category.title,
      siteName: "Latido",
      url: env.SITE_URL + "/category" + params.id,
      images: [category.image],
    },
  };
};

const Page = async ({ params }: IProps) => {
  const id = params.id as string;
  return (
    <Suspense fallback={<CardLoader />}>
      <CategoryResult id={id} />
    </Suspense>
  );
};

export default Page;
