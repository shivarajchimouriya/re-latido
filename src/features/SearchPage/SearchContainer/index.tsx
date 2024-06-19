import { API } from "@/resources";
import { Box, VStack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SearchBar from "../SearchBar";
import TopRatedProduct from "../TopRatedProduct";
import SearchProvider from "@/providers/SearchProvider";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import CardLoader from "@/components/CardLoader";

interface IProps {
  keyword: string;
  gender: string;
}

const SearchContainer = ({ gender, keyword }: IProps) => {
  return (
    <SearchProvider>
      <VStack w="100%">
        <Suspense fallback={<LoaderSkeleton w="full" h="4rem" />}>
          <SearchBar />
        </Suspense>

        <Suspense fallback={<CardLoader />}>
          <TopRatedProduct gender={"male"} keyword={keyword} />
        </Suspense>
      </VStack>
    </SearchProvider>
  );
};

export default SearchContainer;
