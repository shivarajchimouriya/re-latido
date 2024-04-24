import AppImage from "@/components/AppImage";
import { IProduct } from "@/data/mock/products";
import { Box, StackProps, VStack } from "@chakra-ui/react";
import React from "react";

interface IProps extends StackProps {
  product: IProduct;
}

const ProductCard = ({ product, ...rest }: IProps) => {
  return (
    <VStack
      w="100%"
      p="1rem"
      rounded="1rem"
      overflow="hidden"
      // border="1px solid gray"
      bg="rgba(0,0,0,0.03)"
      {...rest}
    >
      <Box height="40rem" w="100%" overflow="hidden">
        <AppImage
          alt={product.name}
          src={product.image[0]}
          height={1000}
          width={1000}
          quality={100}
          style={{ objectFit: "contain", width: "100%", height: "100%" }}
        />
      </Box>
    </VStack>
  );
};

export default ProductCard;
