import React from "react";
import ProductList1 from "./ProductList1";
import ProductList2 from "./ProductList2";
import ProductList3 from "./ProductList3";
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

// https://isydwbl5r3.execute-api.ap-south-1.amazonaws.com/prod/mobile_home?page=1&limit=1&gender=male&priceLowerLimit=0&priceUpperLimit=10000
// https://isydwbl5r3.execute-api.ap-south-1.amazonaws.com/prod/mobile_home?page=1&limit=1&gender=female&priceLowerLimit=0&priceUpperLimit=64000&collections=637de6398ed77c00088b4df5
