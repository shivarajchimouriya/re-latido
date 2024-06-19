import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface IProps extends BoxProps {
  recommendedSize?: number;
  selected?: boolean;
}

export default function SizeCard({
  recommendedSize,
  selected,
  ...rest
}: IProps) {
  return (
    <Box
      fontSize={"1.6rem"}
      h="5rem"
      w="5rem"
      fontWeight="semibold"
      className={selected ? "size-card-selected" : "size-card"}
      {...rest}
    >
      {recommendedSize}
    </Box>
  );
}
