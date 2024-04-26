import OrderDetailsPage from "@/features/OrderDetailsPage";
import { Container, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  params: {
    id: string;
  };
}
export default function OrderDetails({ params }: IProps) {
  return (
    <Container background={"background"} padding="1.6rem">
      <Text
        variant="h1"
        fontSize="2rem"
        padding={"0 0 1rem 0"}
        color="textPrimary"
        textTransform="uppercase"
      >
        Order <span className="span-text">Status</span>
      </Text>
      <OrderDetailsPage orderId={params?.id} />
    </Container>
  );
}
