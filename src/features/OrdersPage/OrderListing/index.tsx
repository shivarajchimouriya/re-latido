"use client";
import React from "react";
import { TODO } from "../../../../global";
import { Grid } from "@chakra-ui/react";
import OrderCard from "@/components/OrderCard";
import { useFetchOrders } from "../data/useFetchOrders";
import { logger } from "@/utils/logger";

interface IProps {
  isInvoice: boolean;
}
export default function OrderListing({ isInvoice }: IProps) {
  const { data, error, isLoading } = useFetchOrders();
  const order = data?.data.data;

  return (
    <Grid gap={"1.6rem"} width={"100%"}>
      {order?.map((order: TODO) => (
        <OrderCard
          orderIdentity={order?.id || order?._id}
          key={order._id}
          categoryName={order?.product?.category?.title}
          primaryImage={order?.product?.primary_image}
          name={order?.product?.name}
          price={
            order?.product_specification?.price?.value || order?.total_amount
          }
          size={order?.product_specification?.size}
          completionProcess={order?.completion_process}
          leatherType={order?.product_specification?.leather_id?.item_name}
          paymentStatus={order?.payment_status}
          orderId={order?.order_no}
          deliveryDate={order?.delivery_date}
          quantity={1}
          isInvoice={isInvoice}
        />
      ))}
    </Grid>
  );
}
