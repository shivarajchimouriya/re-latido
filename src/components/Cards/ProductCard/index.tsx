import AppImage from "@/components/AppImage";
import { IProduct } from "@/data/mock/products";
import { Box, VStack } from "@chakra-ui/react";
import React from "react";

interface IProps {
  product: IProduct;
}

const ProductCard = ({ product }: IProps) => {
  return (
    <VStack p="1rem" rounded="2rem" border="1px solid gray" borderColor="gray">
      <Box height="40rem" w="100%">
        <AppImage
          alt={product.name}
          src={product.image[0]}
          height={1000}
          width={1000}
          quality={100}
        />
      </Box>
    </VStack>
  );
};

export default ProductCard;
