"use client";
import { VStack } from "@chakra-ui/react";
import React, { ReactNode, useState } from "react";
import TabHeader from "../Tabs/TabHeader";
import ShippingDetails from "../Tabs/ShippingDetails";
import PaymentDetails from "../Tabs/paymentDetails";
import OrderSummary from "../Tabs/OrderSummary";

const CheckoutContainer = () => {
  const [step, setStep] = useState(0);

  const onShippingComplete = () => {
    setStep(2);
  };

  const onPaymentComplete = () => {};

  const views: Record<number, ReactNode> = {
    0: <ShippingDetails />,
    1: <PaymentDetails />,
    2: <OrderSummary />
  };

  return (
    <VStack w="full">
      <TabHeader />
      {views[step]}
    </VStack>
  );
};

export default CheckoutContainer;
