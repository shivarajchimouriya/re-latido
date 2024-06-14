"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductList1 from "../ProductList1";
import { Box, Container, VStack } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/keys";
import { getProducts } from "@/features/Homepage/ProductListings";
import { useInView } from "react-intersection-observer";
import { logger } from "@/utils/logger";

export default function HomeWrapper() {
  const containerRef = useRef(null);

  const options = {
    root: containerRef.current,
    rootMargin: "3000px",
    threshold: 0,
  };
  const [ref, inView] = useInView(options);

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

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <Container>
      <Box ref={containerRef}>
        <ProductList1
          products={productsFlat || []}
          viewRef={ref}
          hasNextPage={hasNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isFetching={isFetching}
          isLoading={isLoading}
        />
      </Box>
    </Container>
  );
}
