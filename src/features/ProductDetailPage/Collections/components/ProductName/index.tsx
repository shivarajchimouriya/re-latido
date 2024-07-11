import { Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { IProductNameProps } from "./IProductNameProps";
import { IoIosShareAlt } from "react-icons/io";
import ShareButton from "../ShareButton";
import Link from "next/link";
import { MdOutlineChevronLeft } from "react-icons/md";

export default function ProductName({
  productName,
  category,
  productId,
  categoryId
}: IProductNameProps) {
  return (
    <HStack w="100%" justify="space-between" p={"2rem"} py="1rem">
      <Link href="/">
        <IconButton
          bg="gray.100"
          rounded="full"
          p=".3rem"
          fontSize="2.5rem"
          icon={<MdOutlineChevronLeft />}
          aria-label="previous"
        />
      </Link>

      <VStack alignItems="flex-start" spacing={0}>
        {/* <Link href={`/category/${categoryId}`}>
          <Text
            as="h2"
            color="rgb(112, 117, 128)"
            textTransform="uppercase"
            fontSize="xl"
            fontWeight="semibold"
          >
            {category}
          </Text>
        </Link> */}
        <Text fontWeight="bold" as="h1" fontSize="1.4rem">
          {productName}
        </Text>
      </VStack>
      <ShareButton />
    </HStack>
  );
}
