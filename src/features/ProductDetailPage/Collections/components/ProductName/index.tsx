import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { IProductNameProps } from "./IProductNameProps";
import { IoIosShareAlt } from "react-icons/io";
import ShareButton from "../ShareButton";
import Link from "next/link";

export default function ProductName({
  productName,
  category,
  productId,
  categoryId,
}: IProductNameProps) {
  return (
    <HStack w="100%" justify="space-between" p={"2rem"}>
      <VStack alignItems="flex-start" spacing={0}>
        <Link href={`/category/${categoryId}`}>
          <Text
            as="h2"
            color="rgb(112, 117, 128)"
            textTransform="uppercase"
            fontSize="xl"
            fontWeight="semibold"
          >
            {category}
          </Text>
        </Link>
        <Text fontWeight="bold" as="h1" fontSize="1.4rem">
          {productName}
        </Text>
      </VStack>
      <ShareButton />
    </HStack>
  );
}
