import ProductCard from "@/components/Cards/ProductCard";
import { IProduct } from "@/resources/Product/interface";
import { VStack } from "@chakra-ui/react";
import React from "react";

interface IProps {
  products: IProduct[];
}
const ProductList1 = ({ products }: IProps) => {
  return (
    <VStack
      w="100%"
      maxW="50rem"
      overflow="auto"
      rounded="1rem"
      p="2rem"
      style={{
        scrollSnapType: "y mandatory",
        scrollSnapStop: "always",
        scrollBehavior: "smooth",
        height: "calc(-230px + 100dvh)"
      }}
    >
      <VStack w="100%">
        {products.map(el => {
          return (
            <ProductCard product={el} key={el.name} scrollSnapAlign="start" />
          );
        })}
      </VStack>
    </VStack>
  );
};

export default ProductList1;
