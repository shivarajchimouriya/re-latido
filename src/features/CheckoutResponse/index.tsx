"use client";
import React, { useEffect, useState } from "react";
import { usefetchPaymentLog } from "../CheckoutPage/Tabs/OrderSummary/data/useFetchPaymentLog";
import { useGetTokens } from "@/hooks/client/useGetToken";
import { useRouter } from "next/navigation";
import { IServerResponse } from "../CheckoutPage/Tabs/OrderSummary/DTO";
import { Text } from "@chakra-ui/react";
import { logger } from "@/utils/logger";
import { IOrderData } from "@/resources/Order/interface";

interface IProps {
  serverResponse: IServerResponse;
}

const CheckoutResponse = ({ serverResponse }: IProps) => {
  const { mutateAsync, isPending } = usefetchPaymentLog();
  const { token } = useGetTokens();
  const router = useRouter();
  useEffect(
    () => {
      const checkout = localStorage.getItem("checkout");
      if (!checkout) return;
      const parsed = JSON.parse(checkout) as IOrderData;
      const fetchPayentLog = async () => {
        try {
          const res = await mutateAsync({
            token,
            data: {
              serverResponse,
              order: parsed._id,
              checkout_id: parsed.checkout_id
            }
          });
          localStorage.removeItem("checkout");
          localStorage.removeItem("selected");
          router.push(`/checkout?tab=summary&order=${parsed._id}`);
        } catch (error) {
          router.push("/checkout?tab=shipping");
          logger.log("error", error);
        }
      };
      if (token) fetchPayentLog();
    },
    [token]
  );

  return <Text> loading </Text>;
};

export default CheckoutResponse;
