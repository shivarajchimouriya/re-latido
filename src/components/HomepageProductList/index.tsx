import React from "react";
import ProductList1 from "./ProductList1";
import { IProduct } from "@/resources/Product/interface";
import { Box } from "@chakra-ui/react";

interface IProps {
  products: IProduct[];
  viewType: 1;
}

const HomepageProductLists = ({ products, viewType }: IProps) => {
  const viewMapping = {
    1: (product: IProduct[]) => (
      <Box mt="15dvh">
        <ProductList1 products={product} />
      </Box>
    ),
  };

  return viewMapping[viewType](products);
};

export default HomepageProductLists;
