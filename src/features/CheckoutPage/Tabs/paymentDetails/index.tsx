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
import React from "react";

const PaymentDetails = () => {
  const keyVals = [
    { key: "product", val: "farooq" },
    { key: "Amount", val: "NRS 30000" },
    { key: "payment Method", val: "fonepay" }
  ];

  return (
    <VStack w="full" p="1rem">
      <Box textTransform="uppercase" fontSize="3xl" p="1rem" w="full">
        <Text> Payment </Text>
        <Text fontWeight="bold"> DEtails </Text>
      </Box>

      <VStack w="full" shadow="md" bg="white" fontSize="1.2rem" rounded="md">
        {keyVals.map(el => {
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
        textTransform="uppercase"
        border="1px solid black"
        rounded="md"
        fontWeight="bold"
        fontSize="1.4rem"
        bg="black"
        color="white"
      >
        Proceed payment
      </Button>
    </VStack>
  );
};

export default PaymentDetails;
