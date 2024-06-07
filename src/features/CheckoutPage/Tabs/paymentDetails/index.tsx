import { IOrderData } from "@/resources/Order/interface";
import {
  Box,
  Button,
  Flex,
  Table,
  TableCaption,
  TableContainer,
  Tbody,
  Td,
  Text,
  Tfoot,
  Th,
  Thead,
  Tr,
  VStack
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { usefetchPaymentLog } from "../OrderSummary/data/useFetchPaymentLog";
import dayjs from "dayjs";
import { env } from "@/config/environment";
import { useGetTokens } from "@/hooks/client/useGetToken";
import { logger } from "@/utils/logger";
import useHandleErrorToast from "@/hooks/client/useAppToast";


const PaymentDetails = () => {
  const handleErrorToast = useHandleErrorToast();
    const {mutateAsync, isPending}=   usefetchPaymentLog()
  const [data, setdata] = useState<IOrderData | null>(null);
 const {token}=  useGetTokens()
  useEffect(() => {
    const localData = localStorage.getItem("checkout");
    if (!localData) return;
    const parsed = JSON.parse(localData) as IOrderData;
    setdata(parsed);
  }, []);

  const keyVals = [
    { key: "product", val: data?.product.name },
    { key: "Amount", val: data?.product_specification.price.value},
    { key: "payment Method", val: data?.payment_mode }
  ];  
const handleProceed=async()=>{
  const ru = window.location.origin + '/checkout/response/';
  const checkoutRaw=localStorage.getItem("checkout");
  if(!checkoutRaw)return;
  const parsed=JSON.parse(checkoutRaw) as IOrderData
   
   const checkoutDataQuery: any = {
      RU: ru,
      PID: env.FONEPAY_PID,
      PRN: dayjs().unix(),
      AMT: parsed.total_amount || 100,
      CRN: 'NPR',
      DT: dayjs().format('MM/DD/YYYY'),
      R1: 'Payment for Jacket',
      R2: 'N/A',
      MD: 'P',
}
if(!token) return

try {
  const res=await mutateAsync({data:{checkout_id:parsed.checkout_id,order:parsed._id,paymentMeta:checkoutDataQuery},token});
  logger.log("res payment",res)
  if(res.data){
    const response=(Array.isArray(res.data.paymentMeta)?res.data.paymentMeta[0]:res.data.paymentMeta) as Record<string,any>
    const encodedUrl = new URLSearchParams(response).toString()
      window.location.href=env.FONEPAY_BASE_URL+encodedUrl
  }
  
} catch (error) {
  handleErrorToast(error)
}

}

  return (
    <VStack w="full" p="1rem">
      <Box textTransform="uppercase" fontSize="3xl" p="1rem" w="full">
        <Text> Payment </Text>
        <Text fontWeight="bold"> DEtails </Text>
      </Box>

      <VStack w="full" shadow="md" bg="white" fontSize="1.2rem" rounded="md">
        {keyVals.map(el => {
          console.log(
            "el: ", el
          )
          return (
            <Flex
              w="full"
              justify="space-between"
              p="1.2rem"
              _notLast={{ borderBottom: "1px solid", borderColor: "gray.400" }}
            >
              <Text>
                {" "}{el.key}{" "}
              </Text>
              <Text fontWeight="bold" textTransform="uppercase">
                {" "}{el.val}{" "}
              </Text>
            </Flex>
          );
        })}
      </VStack>
      <Button
        mt="3rem"
        p="1rem"
        w="100%"
        disabled={isPending ? true : false}
        opacity={isPending ? 0.6 : 1}
        textTransform="uppercase"
        border="1px solid black"
        rounded="md"
        fontWeight="bold"
        fontSize="1.4rem"
        bg="black"
        color="white"
        onClick={handleProceed}
      >
        Proceed payment
      </Button>
    </VStack>
  );
};

export default PaymentDetails;
