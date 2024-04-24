import { IProduct } from "@/data/mock/products";
import React from "react";
import ProductList1 from "./ProductList1";
import ProductList2 from "./ProductList2";
import ProductList3 from "./ProductList3";

interface IProps {
  products: IProduct[];
  viewType: 1 | 2 | 3;
}

const HomepageProductLists = ({ products, viewType }: IProps) => {
  const viewMapping = {
    1: (product: IProduct[]) => <ProductList1 products={product} />,
    2: (product: IProduct[]) => <ProductList2 products={product} />,
    3: (product: IProduct[]) => <ProductList3 products={product} />
  };

  return viewMapping[viewType](products);
};

export default HomepageProductLists;
