"use client";
import React from "react";
import { useTopRatedProduct } from "./data/useTopRatedProduct";
import { useSearchParams } from "next/navigation";
import { Box } from "@chakra-ui/react";
import HomepageProductLists from "@/components/HomepageProductList";
import { useSearchContext } from "@/providers/SearchProvider";
import { logger } from "@/utils/logger";

const TopRatedProductClient = () => {
    const searchParams = useSearchParams();
   
   
    const gender = searchParams.get("gender");
    const keyword = searchParams.get("keyword");
    const { data } = useTopRatedProduct(keyword ?? '', 'male');
    const products = data?.data.data;
    logger.log("search result",products)
    if (!products) return null;
    return <Box w="100%" >
        <HomepageProductLists products={products} viewType={1} />
    </Box>;
};

export default TopRatedProductClient;
