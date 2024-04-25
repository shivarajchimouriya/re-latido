import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import React from 'react';
import Image from 'next/image';
import { IProductNameProps } from './IProductNameProps';
import { IoIosShareAlt } from "react-icons/io";


export default function ProductName({ productName, category, productId }: IProductNameProps) {
  return (
    <HStack w="100%" justify="space-between" p={16}>
      <VStack alignItems="flex-start" spacing={0}>
        <Text textTransform="uppercase">{category}</Text>
        <Text fontWeight="bold" variant="h1" fontSize="1.4rem">{productName}</Text>
      </VStack>
      <VStack>
        <Button>
          <IoIosShareAlt fontSize="2.5rem" />
        </Button>
      </VStack>
    </HStack>
  );
}
