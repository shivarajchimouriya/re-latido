import { Button, HStack, IconButton, Text, VStack } from "@chakra-ui/react";
import React from "react";
import Image from "next/image";
import { IProductNameProps } from "./IProductNameProps";
import { IoIosShareAlt } from "react-icons/io";
import ShareButton from "../ShareButton";
import Link from "next/link";
import { MdOutlineChevronLeft } from "react-icons/md";
import Logo from "@/components/Layout/PrimaryLayout/components/Header/components/Logo";
import AppImage from "@/components/AppImage";
export default function ProductName({
  productName,
  category,
  productId,
  categoryId
}: IProductNameProps) {
  return (
    <HStack
      w="100%"
      justify="space-between"
      p={"2rem"}
      py=".6rem"
      borderBottom="1px solid"
      borderColor="#ebebeb"
    >
      <Text fontWeight="bold" w="fit-content" as="h1" fontSize="1.4rem">
        {productName}
      </Text>

      <Link href="/">
        <Logo />
      </Link>
      <ShareButton />
    </HStack>
  );
}
