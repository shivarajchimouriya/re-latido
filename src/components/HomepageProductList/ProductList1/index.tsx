import ProductCard from "@/components/Cards/ProductCard";
import ScrollProvider from "@/providers/ScrollProvider";
import { IProduct } from "@/resources/Product/interface";
import { Grid } from "@chakra-ui/react";
import React from "react";
interface IProps {
  products: IProduct[] | null;
}

const ProductList1 = ({ products }: IProps) => {
  if (products === null) {
    return;
  }
  return (
    <ScrollProvider selectorClassName="productList">
      <Grid placeItems="center" gap="1rem">
        {products.map((el, i) => {
          const isFirst = i === 0;
          return (
            <ProductCard isFirstCard={isFirst} product={el} key={el.name} />
          );
        })}
      </Grid>
    </ScrollProvider>
  );
};

export default ProductList1;
