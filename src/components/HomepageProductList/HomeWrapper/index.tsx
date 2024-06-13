"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductList1 from "../ProductList1";
import { Box, Container, Grid, Spinner, Text, VStack } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/keys";
import { getProducts } from "@/features/Homepage/ProductListings";
import { useInView } from "react-intersection-observer";

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

  const isClient = typeof window != undefined;

  const options = {
    root: isClient ? window?.document?.getElementById("rootContainer") : null,
    rootMargin: "1500px",
    threshold: 0,
  };
  const { ref, inView } = useInView(options);

  useEffect(() => {
    console.log("in view: ", inView);
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <Box mt="14dvh">
        <ProductList1 products={productsFlat || []} />
        <Grid width="full" mt="2rem" minH="80vh" justifyContent="center">
          {hasNextPage && (
            <Box ref={ref} className="THIS_IS_TARGET">
              <Spinner height="10rem" width="10rem" />
            </Box>
          )}
          {!hasNextPage && (
            <Text fontSize="2rem" fontWeight="bold">
              End of Product
            </Text>
          )}
        </Grid>
      </Box>
    </>
  );
}
