import ProductDetailPage from "@/features/ProductDetailPage/ProductDetail";
import React from "react";
import { ProductDetailProvider } from "@/contexts/ProductDetailContext";
import { ApolloProvider, ApolloClient } from "@apollo/client";
import IProps from "./IProps";
import { ApolloWrapper } from "@/providers/AppApolloProvider";

export default function ProductDetail({ params }: IProps) {
  return (
    <ApolloWrapper>
      <ProductDetailProvider>
        <ProductDetailPage productId={params.productId} />
      </ProductDetailProvider>
    </ApolloWrapper>
  );
}
