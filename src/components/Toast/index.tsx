import React from "react";
import { HStack, Text } from "@chakra-ui/react";

interface IProps {
  icon?: React.ReactNode;
  message: string;
}

export default function Toast({ icon, message }: IProps) {
  return (
    <HStack
      h="4rem"
      shadow="2xl"
      justify="center"
      border="thin"
      bg="rgba(255, 69, 69, 0.5)"
      backdropFilter={"auto"}
      backdropBlur={"4px"}
      rounded={"1rem"}
      fontSize={"1.6rem"}
      mx={4}
      px={6}
      py={4}
      color={"white"}
    >
      <Text fontSize="1.3rem" fontWeight="normal">
        {message}
      </Text>
      {icon ? icon : null}
    </HStack>
  );
}
