"use client";
import React, { useEffect } from "react";
import { Box, Grid, Spinner, Text } from "@chakra-ui/react";
import { useInfiniteQuery } from "@tanstack/react-query";
import { queryKeys } from "@/constants/keys";
import { getProducts } from "@/features/Homepage/ProductListings";
import { useInView } from "react-intersection-observer";
import ProductList1 from "@/components/HomepageProductList/ProductList1";
import { fetchProductByGender, genderTypes } from "../GenderBasedProduct";

interface IProps {
  gender: genderTypes;
}

export default function GenderProductWrapper({ gender }: IProps) {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery({
    queryKey: [queryKeys.GENDER_PRODUCT_LISTING, gender],
    queryFn: ({ pageParam }) => {
      const page = pageParam?.page || 1;
      return fetchProductByGender({
        limit: 10,
        gender: gender,
        page: page,
      });
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
    threshold: 0,
  };
  const { ref, inView } = useInView(options);

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView]);

  return (
    <>
      <Box mt="15dvh">
        <ProductList1 products={productsFlat || []} />
        <Grid width="full" mt="2rem" minH="80vh" justifyContent="center">
          {hasNextPage && (
            <Box className="THIS_IS_TARGET">
              <Spinner height="10rem" width="10rem" />
              <Box mt="-1500px" ref={ref} bg="transparent" />
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
