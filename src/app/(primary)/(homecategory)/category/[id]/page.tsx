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
  const homepageData = await API.Homepage.get();
  const categories = homepageData.data.category;

  return categories.map((cat) => ({
    id: cat._id,
  }));
}

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const result = await API.Homepage.get();
  const categoryData = result.data.category;

  const index = categoryData.find((cat) => cat._id === params.id);

  if (!index) {
    return {};
  }
  return {
    title: index?.title,
    keywords: index?.slug,
    openGraph: {
      type: "website",
      description: index.title,
      title: index.title,
      siteName: "Latido",
      url: env.SITE_URL + "/category" + params.id,
      images: [index.image],
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
