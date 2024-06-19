"use client";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { useFetchInvoice } from "./data/useFetchInvoice";
import Invoice from "./Collections/components/Invoice";

interface IProps {
  id: string;
}

export const DigitalInvoicePage = ({ id }: IProps) => {
  const { data, error, isLoading } = useFetchInvoice(id);
  if (!data) return null;
  return (
    <Container bg="background" minH="100dvh">
      <Heading px={8} fontSize={"2rem"} as="h1" lineHeight={1.2} textAlign="left" py="6">
        <Text as={"span"}>DIGITAL </Text>
        <br />
        <Text fontWeight="bold" as={"span"}>INVOICE</Text>
      </Heading>
      <Box>
        <Invoice
          createdAt={data?.data?.orderDetail?.createdAt}
          productName={data?.data?.orderDetail?.product?.name}
          currency={data?.data?.orderDetail?.product_specification?.price?.currency}
          full_name={data?.data?.orderDetail?.shipping_details?.full_name}

          date={data?.data?.orderDetail?.delivery_date}
          finalAmount={
            data?.data?.orderDetail?.total_amount ||
            data?.data?.orderDetail?.product_specification?.price?.value
          }
          invoiceId={data?.data?.orderDetail?.order_no}
          subtotal={
            data?.data?.orderDetail?.total_amount ||
            data?.data?.orderDetail?.product_specification?.price?.value
          }
          billingAddress={data?.data?.orderDetail?.shipping_details?.address}
          deliveryAddress={data?.data?.orderDetail?.shipping_details?.address}
        />
      </Box>
    </Container>
  );
};
