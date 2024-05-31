import CardLoader from "@/components/CardLoader";
import ScrollProvider from "@/providers/ScrollProvider";
import { IProduct } from "@/resources/Product/interface";
import { VStack } from "@chakra-ui/react";
import dynamic from "next/dynamic";
import React from "react";
const ProductCard = dynamic(() => import("@/components/Cards/ProductCard"), {
  ssr: true,

  loading: () => <CardLoader />
});
interface IProps {
  products: IProduct[];
}

const ProductList1 = ({ products }: IProps) => {
  return (
    <ScrollProvider selectorClassName="helo" >
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
          height: "calc(-150px + 100dvh)"
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
