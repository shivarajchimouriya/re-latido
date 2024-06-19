import OrderListing from "@/features/OrdersPage/OrderListing";
import { Container, Text } from "@chakra-ui/react";
import React from "react";

const DigitalInvoice = () => {
 return  <Container background={"background"} padding="1.6rem">
    <Text
      variant="h1"
      fontSize="2rem"
      padding={"0 0 1rem 0"}
      color="textPrimary"
      textTransform="uppercase"
    >
      DIGITAL <span className="span-text">INVOICE</span>
    </Text>
    <OrderListing isInvoice />
  </Container>;
};

export default DigitalInvoice;
