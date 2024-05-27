import React from "react";
import ProductList1 from "./ProductList1";
import { IProduct } from "@/resources/Product/interface";

interface IProps {
  products: IProduct[];

  viewType: 1;
}

const HomepageProductLists = ({ products, viewType }: IProps) => {
  const viewMapping = {
    1: (product: IProduct[]) => <ProductList1 products={product} />
  };

  return viewMapping[viewType](products);
};

export default HomepageProductLists;
