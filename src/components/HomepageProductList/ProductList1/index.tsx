import ProductCard from "@/components/Cards/ProductCard";
import { IProduct } from "@/data/mock/products";
import { VStack } from "@chakra-ui/react";
import React from "react";

interface IProps {
  products: IProduct[];
}
const ProductList1 = ({ products }: IProps) => {
  return (
    <VStack w="100%">
      {products.map(el => {
        return (
          <ProductCard product={el} key={el.name} scrollSnapAlign="start" />
        );
      })}
    </VStack>
  );
};

export default ProductList1;
