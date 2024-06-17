"use client";
import React from "react";
import { useTopRatedProduct } from "./data/useTopRatedProduct";
import { notFound, useSearchParams } from "next/navigation";
import { Box, Text } from "@chakra-ui/react";
import HomepageProductLists from "@/components/HomepageProductList";
import { useSearchContext } from "@/providers/SearchProvider";
import { logger } from "@/utils/logger";
import CardLoader from "@/components/CardLoader";
import SearchNotFound from "../SearchNotFound";

const TopRatedProductClient = () => {
  const searchParams = useSearchParams();

  const gender = searchParams.get("gender");
  const keyword = searchParams.get("keyword");
  const { data, isLoading, error } = useTopRatedProduct(keyword ?? "", "");
  const products = data?.data.data;
  const totalProducts = products?.length ?? 0;
  if (isLoading) return <CardLoader />;
  // if (products?.length === 0 || error)notFound()
  return (
    <Box w="100%" bg="base">
      <Text
        w="full"
        textAlign="left"
        fontSize="1.4rem"
        px="1rem"
        py="1rem"
        mt="7.4rem"
        position="fixed"
        zIndex="99"
      >
        {totalProducts > 0 ? (
          <>
            <strong>{totalProducts}</strong> total products found for keyword{" "}
            <strong>{keyword}</strong>
          </>
        ) : (
          <>
            No result found for <strong>{keyword}</strong>
          </>
        )}
      </Text>
      {products && products?.length > 0 ? (
        <>
          <HomepageProductLists products={products} viewType={1} />
        </>
      ) : (
        <>
          <SearchNotFound />
        </>
      )}
    </Box>
  );
};

export default TopRatedProductClient;
