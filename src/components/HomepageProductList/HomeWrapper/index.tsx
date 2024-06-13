"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductList1 from "../ProductList1";
import { Box, Container, Spinner, Text, VStack } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/keys";
import { getProducts } from "@/features/Homepage/ProductListings";
import { useInView } from "react-intersection-observer";
import { logger } from "@/utils/logger";

export default function HomeWrapper() {
  const containerRef = useRef(null);

  const {
    data,
    error,
    isLoading,
    isFetching,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery({
    queryKey: [queryKeys.PRODUCT_LISTING],
    queryFn: ({ pageParam }) => {
      const page = pageParam?.page || 1;
      return getProducts({ limit: 10, page });
    },
    getNextPageParam: (lastPage: any) => {
      if (lastPage?.data?.data?.length === 0) {
        return undefined;
      }
      return { page: lastPage?.data?.page + 1 };
    },
    initialPageParam: { page: 1 },
  });

  const productsFlat = data?.pages?.flatMap((el) => {
    return el?.data?.data || [];
  });

  const options = {
    root: containerRef.current,
    rootMargin: "1500px",
    threshold: 0,
    skip: (productsFlat?.length || 0) < 10,
  };
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Box ref={containerRef}>
        <ProductList1 products={productsFlat || []} />
        <Box mt="2rem" minH="80vh">
          {hasNextPage &&
            (!isFetchingNextPage || !isFetching || !isLoading) && (
              <Box ref={ref}>
                <Spinner height="10rem" width="10rem" />
              </Box>
            )}
          {!hasNextPage && (
            <Text fontSize="2rem" fontWeight="bold">
              End of Product
            </Text>
          )}
        </Box>
      </Box>
    </Container>
  );
}
