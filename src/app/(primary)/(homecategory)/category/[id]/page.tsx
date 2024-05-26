import CardLoader from "@/components/CardLoader";
import HomepageProductLists from "@/components/HomepageProductList";
import CategoryResult from "@/features/CategoryResult";
import ProductListings from "@/features/Homepage/ProductListings";
import { APPError } from "@/lib/exception";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import React, { Suspense } from "react";

interface IProps {
  params: {
    id: string;
  };
}

const Page = async ({ params }: IProps) => {
  const id = params.id as string;
  return (
    <Suspense fallback={<CardLoader />}>
      <CategoryResult id={id} />
    </Suspense>
  );
};

export default Page;
