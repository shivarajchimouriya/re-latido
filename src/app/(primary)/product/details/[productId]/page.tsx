import ProductDetailPage from "@/features/ProductDetailPage/ProductDetail";
import React from "react";
import { ProductDetailProvider } from "@/contexts/ProductDetailContext";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import IProps from "./IProps";
import { ApolloWrapper } from "@/providers/AppApolloProvider";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { Metadata } from "next";
import { env } from "@/config/environment";
import ProfileSkeleton from "@/features/ProfilePage/ProfileSkeleton";
import { notFound } from "next/navigation";

export const generateStaticParams = async () => {
  const res = await API.Product.getAll({ params: { limit: 1000, page: 1 } });
  const allProducts = res.data.data;
  return allProducts.slice(0, 35).map((el) => {
    return {
      productId: el._id,
    };
  });
};

const getProductDetail = async (id: string) => {
  try {
    const res = await API.Product.byID(id);
    return res;
  } catch (error) {
    logger.log("Error", error);
  }
};

export const generateMetadata = async ({
  params,
}: IProps): Promise<Metadata> => {
  const res = await getProductDetail(params.productId);
  if (!res || !res?.data?.productDetail) notFound();
  return {
    openGraph: {
      images: [res?.data.productDetail.primary_image],
      type: "website",
      description: res.data.productDetail.description,
      url: `${env.SITE_URL}/product/details/${params.productId}`,
      locale: "nepali",
    },
    title: res.data.productDetail.name,
    description: res.data.productDetail.description,
    authors: [{ name: res.data.productDetail.added_by ?? "" }],
    category: res.data.productDetail.category.title,
  };
};

export default function ProductDetail({ params }: IProps) {
  return (
    <ApolloWrapper>
      <ProductDetailProvider>
        <ProductDetailPage productId={params.productId} />
      </ProductDetailProvider>
    </ApolloWrapper>
  );
}
