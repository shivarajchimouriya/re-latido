"use client";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import { Container, Heading } from "@chakra-ui/react";
import React from "react";
import { useFetchInvoice } from "./data/useFetchInvoice";

interface IProps {
  id: string;
}

export const DigitalInvoicePage = ({ id }: IProps) => {
  const { data, error, isLoading } = useFetchInvoice(id);
  logger.log("data: ", data);
  if (!data) return null;
  return (
    <Container>
      <Heading as={"h1"} textTransform="uppercase">
        Digital Invoice
      </Heading>
    </Container>
  );
};
