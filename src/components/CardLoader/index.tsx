import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface IProps extends BoxProps {}

const CardLoader = ({ ...rest }: IProps) => {
  return (
    <Box h="63vh" w="full" className="skeleton" {...rest} position="relative">
      <Box
        h="4rem"
        w="16rem"
        zIndex="100"
        position="absolute"
        left="1rem"
        bottom="1rem"
        bg="gray.200"
        rounded="full"
      />
    </Box>
  );
};

export default CardLoader;
