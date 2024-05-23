import { VStack } from "@chakra-ui/react";
import React from "react";
import TabHeader from "../Tabs/TabHeader";
import ShippingDetails from "../Tabs/ShippingDetails";
import PaymentDetails from "../Tabs/paymentDetails";

const CheckoutContainer = () => {
  return (
    <VStack w="full">
      <TabHeader />
      <ShippingDetails />
    </VStack>
  );
};

export default CheckoutContainer;
