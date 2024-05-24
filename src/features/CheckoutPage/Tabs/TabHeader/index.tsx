"use client";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { ICheckoutTabs, tabNameTypes } from "../../CheckoutContainer";




const TabHeader = () => {
const tabs:ICheckoutTabs[] = [
  { name: "shipping details", tab: "shipping"},
  { name: "payment \n details", tab: "payment"},
  { name: "order summary", tab: "summary" }
];
  const router = useRouter();
  const onTabClick = (tab: string) => {
    router.push(`?tab=${tab}`);
  };
const searchParams=useSearchParams();
const activeTab=searchParams.get("tab") as tabNameTypes || "shipping"
const width=activeTab==='shipping'||""?"33.3%":activeTab==='payment'?"66.6%":"100%"
  return (
    <Box w='full' >
      <Flex  height='.5rem'  bg='gray.400'  transitionDuration='.4s'  width={width}     />
    <Flex w="full" justify="space-between" p="1rem" textTransform="uppercase">
      {tabs?.map((el, i) => {

const isActive=el.tab===activeTab

        return (
          <VStack key={i} p="1rem" onClick={() => onTabClick(el.tab)}>
            <Text fontWeight="extrabold" fontSize="1.4rem">
              {i + 1}
            </Text>
            <Text
              fontSize="1.1rem"
              whiteSpace="wrap"
              color={isActive?"black":"gray.500"}
              textAlign="center"
              fontWeight={isActive?"bold":"medium"}
              w="min-content"
            >
              {el.name}
            </Text>
          </VStack>
        );
      })}
    </Flex>
    </Box>
  );
};

export default TabHeader;
