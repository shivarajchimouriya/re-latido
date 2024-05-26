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
  const searchParams=useSearchParams();
  const orderId=searchParams.get("order") as  string;
  const {data:OrderData}=useFetchOrderById(orderId)
  const order = OrderData;
  useEffect(
    () => {
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
                DV:
                  "E048ED0EEFABDC6FE85A73CA5E70BD068802E57D986CB169CD4D873445D184B61FD4B28F2819BBD46F49D39C85E16CE74B278080B5F5990C11A8EA66434763CD",
                UID: "66212",
                BC: "GLBBNPKA",
                INI: "9800000000",
                P_AMT: "28000.0",
                R_AMT: "28000"
              }
            }
          });
        } catch (error) {
          router.push("/checkout?tab=shipping");
          logger.log("error", error);
        }
      };
      if (token) fetchPayentLog();
    },
    [token]
  );

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
        { order && <OrderCard
 categoryName={order?.product?.category?.title}
          primaryImage={order?.product?.primary_image}
                name={order?.product?.name}
                price={order?.product_specification?.price?.value || order?.total_amount}
                size={order?.product_specification?.size}
                completionProcess={order?.completion_process}
                leatherType={order?.product_specification?.leather_id?.item_name}
                paymentStatus={order?.payment_status}
                orderId={String(order?.order_no)}
                deliveryDate={order?.delivery_date}
                quantity={1}
            />}
      </VStack>
    </VStack>
  );
};

export default OrderSummary;
