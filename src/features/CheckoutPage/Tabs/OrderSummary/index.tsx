"use client";
import Done from "@/components/Icons/Done";
import { Box, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usefetchPaymentLog } from "./data/useFetchPaymentLog";
import { IPaymentLog } from "@/resources/Payment/interface";
import { logger } from "@/utils/logger";
import { useGetTokens } from "@/hooks/client/useGetToken";
import OrderCard from "@/components/OrderCard";
import { useRouter, useSearchParams } from "next/navigation";
import { useFetchOrders } from "@/features/OrdersPage/data/useFetchOrders";
import { useFetchOrderById } from "./data/useFetchOrderById";

const OrderSummary = () => {
  const { mutateAsync } = usefetchPaymentLog();
  const { token } = useGetTokens();
  const router = useRouter();
  const searchParams = useSearchParams();
  const orderId = searchParams.get("order") as string;
  const { data: OrderData } = useFetchOrderById(orderId);
  useEffect(() => {
    const fetchPayentLog = async () => {
      try {
        const res = await mutateAsync({
          token,
          data: {
            checkout_id: "25a79e16-49e8-44f6-b35f-0dbdfd43fc08",
            order: "665047601817740008b79a4e",
            serverResponse: {
              PRN: "1716537293",
              PID: "fonepay123",
              PS: "true",
              RC: "successful",
              DV: "E048ED0EEFABDC6FE85A73CA5E70BD068802E57D986CB169CD4D873445D184B61FD4B28F2819BBD46F49D39C85E16CE74B278080B5F5990C11A8EA66434763CD",
              UID: "66212",
              BC: "GLBBNPKA",
              INI: "9800000000",
              P_AMT: "28000.0",
              R_AMT: "28000",
            },
          },
        });
      } catch (error) {
        router.push("/checkout?tab=shipping");
        logger.log("error", error);
      }
    };
    if (token) fetchPayentLog();
  }, [token]);

  return (
    <VStack w="full">
      <Box>
        <Done />
      </Box>
      <Text
        mt="2rem"
        textTransform="capitalize"
        color="gray.500"
        fontSize="3rem"
        fontWeight="bold"
      >
        payment confirmed
      </Text>

      <VStack w="full" p="1rem" mt="1rem">
        <Text
          textAlign="left"
          w="full"
          color="gray.700"
          fontSize="1.4rem"
          textTransform="uppercase"
          fontWeight="bold"
        >
          Order summary
        </Text>
        {OrderData?.data?.orderDetail && (
          <OrderCard
            categoryName={OrderData?.data?.orderDetail?.product?.category?.title}
            primaryImage={OrderData?.data?.orderDetail?.product?.primary_image}
            name={OrderData?.data?.orderDetail?.product?.name}
            price={
              OrderData?.data?.orderDetail?.product_specification?.price?.value ||
              OrderData?.data?.orderDetail?.total_amount
            }
            size={OrderData?.data?.orderDetail?.product_specification?.size}
            completionProcess={OrderData?.data?.orderDetail?.completion_process}
            leatherType={
              OrderData?.data?.orderDetail?.product_specification?.leather_id?.item_name
            }
            paymentStatus={OrderData?.data?.orderDetail?.payment_status}
            orderId={String(OrderData?.data?.orderDetail?.order_no)}
            deliveryDate={OrderData?.data?.orderDetail?.delivery_date}
            quantity={1}
          />
        )}
      </VStack>
    </VStack>
  );
};

export default OrderSummary;
