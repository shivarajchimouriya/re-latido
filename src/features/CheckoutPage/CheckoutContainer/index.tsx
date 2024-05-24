"use client";
import { VStack } from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import TabHeader from "../Tabs/TabHeader";
import ShippingDetails from "../Tabs/ShippingDetails";
import PaymentDetails from "../Tabs/paymentDetails";
import OrderSummary from "../Tabs/OrderSummary";
import { useSearchParams } from "next/navigation";

export type tabNameTypes = "shipping" | "payment" | "summary";
export interface ICheckoutTabs {
  name: string;
  tab: tabNameTypes;
}

const CheckoutContainer = () => {
  const [step, setStep] = useState(0);
  const params = useSearchParams();
  const activeTab = (params.get("tab") as tabNameTypes) || "shipping";
  const onPaymentComplete = () => {};

  const views: Record<tabNameTypes, ReactNode> = {
    shipping: <ShippingDetails />,
    payment: <PaymentDetails />,
    summary: <OrderSummary />
  };

  return (
    <VStack w="full">
      <TabHeader />
      {views[activeTab]}
    </VStack>
  );
};

export default CheckoutContainer;
