import { API } from "@/resources";
import { VStack } from "@chakra-ui/react";
import React, { Suspense } from "react";
import SearchBar from "../SearchBar";
import TopRatedProduct from "../TopRatedProduct";
import SearchProvider from "@/providers/SearchProvider";

interface IProps {
  keyword: string;
  gender: string;
}

const SearchContainer = ({ gender, keyword }: IProps) => {
  return (
    <SearchProvider>
      <VStack w="100%">
        <Suspense fallback="loading">
          <SearchBar />
        </Suspense>
        <Suspense fallback="loading">
          {" "}<TopRatedProduct gender={"male"} keyword={keyword} />
        </Suspense>
      </VStack>
    </SearchProvider>
  );
};

export default SearchContainer;
