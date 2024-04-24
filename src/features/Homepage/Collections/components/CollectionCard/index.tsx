import AppImage from "@/components/AppImage";
import { IMockCollection } from "@/data/mock/collection";
import { Box, Center, Text, VStack } from "@chakra-ui/react";
import React from "react";
import AnimatedCircle from "../AnimatedCircle";

interface IProps {
  collection: IMockCollection;
}

const CollectionCard = ({ collection }: IProps) => {
  return (
    <VStack>
      <VStack
        width="6rem"
        height="6rem"
        rounded="100%"
        justify="center"
        align="center"
        overflow="hidden"
        position="relative"
      >
        <AnimatedCircle />

        <Center height="100%" width="100%" overflow="hidden">
          <AppImage
            alt={collection.name}
            src={collection.image}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            width={500}
          />
        </Center>
      </VStack>

      <Text textTransform="uppercase" fontSize="1.2rem" fontWeight="semibold">
        {" "}{collection.name}{" "}
      </Text>
    </VStack>
  );
};

export default CollectionCard;
