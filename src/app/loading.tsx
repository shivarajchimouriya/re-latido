import AppImage from "@/components/AppImage";
import LogoIcon from "@/components/Icons/Logo";
import { Center } from "@chakra-ui/react";
import CardLoader from "@/components/CardLoader";
import PrimaryLayout from "@/components/Layout/PrimaryLayout";
import LoaderSkeleton from "@/components/LoaderSkeleton";
import NavLoader from "@/components/NavLoader";
import { Flex, Skeleton, Stack, VStack } from "@chakra-ui/react";
import React, { ReactNode } from "react";

const Loading = () => {
  const dummyCat = [1, 2, 3, 4, 5];

  return (
    <VStack h="full">
      <LoaderSkeleton h="5rem" w="full" />

      <Flex gap="1rem" p="1rem" justify="center" overflow="auto">
        {dummyCat.map(el => {
          return <LoaderSkeleton rounded="full" h="6.4rem" w="6.4rem" />;
        })}
      </Flex>

      <CardLoader w="99vw" />

      <VStack position="fixed" bottom=".2rem" w="full">
        <NavLoader />
      </VStack>
    </VStack>
  );
};

export default Loading;
