import AppImage from "@/components/AppImage";
import { IMockCollection } from "@/data/mock/collection";
import { Box, Center, StackProps, Text, VStack } from "@chakra-ui/react";
import React from "react";
import AnimatedCircle from "../AnimatedCircle";
import { AnimatePresence } from "framer-motion";
import { ICategory } from "@/resources/Category/interface";
import { attachWithS3BaseUrl } from "@/utils/misc";

interface IProps extends StackProps {
  collection: ICategory;
  isActive?: boolean;
}

const CollectionCard = ({ collection, isActive, ...rest }: IProps) => {
  return (
    <VStack {...rest}>
      <VStack
        width="6rem"
        height="6rem"
        rounded="100%"
        justify="center"
        align="center"
        overflow="hidden"
        position="relative"
      >
        <AnimatedCircle isActive={isActive || false} />

        <Center height="90%" width="90%" rounded="100%" overflow="hidden">
          <AppImage
            alt={collection.title}
            src={attachWithS3BaseUrl(collection.image)}
            height={500}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
            width={500}
          />
        </Center>
      </VStack>

      <Text
        textTransform="uppercase"
        fontSize="1.2rem"
        transitionDuration=".4s"
        fontWeight={isActive ? "bold" : "semibold"}
      >
        {" "}{collection.title}{" "}
      </Text>
    </VStack>
  );
};

export default CollectionCard;
