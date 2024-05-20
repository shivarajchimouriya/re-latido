import FilterResults from "@/features/FilterResults";
import { IProductFilterReq } from "@/resources/Product/interface";
import React, { Suspense } from "react";
export const dynamic = "force-dynamic";
interface IProps {
  searchParams: IProductFilterReq;
}

const Page = ({ searchParams }: IProps) => {
  const constrains = searchParams;

  return (
    <Suspense fallback="loading">
      <FilterResults filter={constrains} />
    </Suspense>
  );
};

export default Page;
