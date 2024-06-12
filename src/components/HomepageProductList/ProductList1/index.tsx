"use client";
import CardLoader from "@/components/CardLoader";
import ProductCard from "@/components/Cards/ProductCard";
import ScrollProvider from "@/providers/ScrollProvider";
import { IProduct } from "@/resources/Product/interface";
import { Box, Spinner, Text, VStack } from "@chakra-ui/react";
import React from "react";
interface IProps {
  products: IProduct[] | null;
  viewRef: any;
  hasNextPage: boolean;
  isFetchingNextPage: boolean;
  isFetching: boolean;
  isLoading: boolean;
}

const ProductList1 = ({
  products,
  viewRef,
  hasNextPage,
  isFetchingNextPage,
  isFetching,
  isLoading,
}: IProps) => {
  if (products === null) {
    return;
  }
  return (
    <ScrollProvider selectorClassName="helo">
      <VStack
        w="100%"
        maxW="50rem"
        className="helo"
        rounded="0"
        p="0"
        style={{
          scrollSnapType: "y mandatory",
          scrollSnapStop: "always",
          scrollBehavior: "smooth",
          height: "calc(-150px + 100dvh)",
        }}
      >
        <VStack w="100%">
          {products.map((el, i) => {
            const isFirst = i === 0;
            return (
              <ProductCard
                isFirstCard={isFirst}
                product={el}
                key={el.name}
                scrollSnapAlign="start"
              />
            );
          })}
        </VStack>
        <Box mt="2rem" minH="80vh">
          {hasNextPage &&
            (!isFetchingNextPage || !isFetching || !isLoading) && (
              <Box ref={viewRef}>
                <Spinner height="10rem" width="10rem" />
              </Box>
            )}

          {!hasNextPage && (
            <Text fontSize="2rem" fontWeight="bold">
              End of Product
            </Text>
          )}
        </Box>
      </VStack>
    </ScrollProvider>
  );
};

export default ProductList1;
