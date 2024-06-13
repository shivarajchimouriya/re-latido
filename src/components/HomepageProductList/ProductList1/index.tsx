import CardLoader from "@/components/CardLoader";
import ProductCard from "@/components/Cards/ProductCard";
import ScrollProvider from "@/providers/ScrollProvider";
import { IProduct } from "@/resources/Product/interface";
import { VStack } from "@chakra-ui/react";
import React from "react";
interface IProps {
  products: IProduct[] | null;
}

const ProductList1 = ({ products }: IProps) => {
  if (products === null) {
    return;
  }
  return (
    <ScrollProvider selectorClassName="helo">
      <VStack
        w="100%"
        maxW="50rem"
        className="helo"
        overflow="auto"
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
      </VStack>
    </ScrollProvider>
  );
};

export default ProductList1;
