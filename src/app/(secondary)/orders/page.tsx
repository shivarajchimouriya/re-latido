import React from "react";
import { Container, Text } from "@chakra-ui/react";
import OrderListing from "@/features/OrdersPage/OrderListing";
export default function Orders() {
  return (
    <Container background={"background"} padding="1.6rem">
      <Text
        variant="h1"
        fontSize="2rem"
        padding={"0 0 1rem 0"}
        color="textPrimary"
        textTransform="uppercase"
      >
        Your <span className="span-text">Orders</span>
      </Text>
      <OrderListing />
    </Container>
  );
}
