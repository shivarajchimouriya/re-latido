import ProductDetailPage from "@/features/ProductDetailPage/ProductDetail";
import React from "react";
import { ProductDetailProvider } from "@/contexts/ProductDetailContext";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import IProps from "./IProps";
import { ApolloWrapper } from "@/providers/AppApolloProvider";
import { API } from "@/resources";
import { logger } from "@/utils/logger";

export const generateStaticParams = async () => {
  const res = await API.Product.getAll({ params: { limit: 1000, page: 1 } });
  const allProducts = res.data.data;
  return allProducts.slice(0, 35).map(el => {
    return {
      productId: el._id
    };
  });
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
