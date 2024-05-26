import { IServerResponse } from "@/features/CheckoutPage/Tabs/OrderSummary/DTO";
import CheckoutResponse from "@/features/CheckoutResponse";
import React from "react";

interface IProps {
  searchParams: IServerResponse;
}

const Page = (data: IProps) => {
  return <CheckoutResponse serverResponse={data.searchParams} />;
};

export default Page;
