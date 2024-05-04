import FilterResults from "@/features/FilterResults";
import { IProductFilterReq } from "@/resources/Product/interface";
import React from "react";

interface IProps {
  searchParams: IProductFilterReq;
}

const Page = ({ searchParams }: IProps) => {
  const constrains = searchParams;

  return <FilterResults filter={constrains} />;
};

export default Page;
