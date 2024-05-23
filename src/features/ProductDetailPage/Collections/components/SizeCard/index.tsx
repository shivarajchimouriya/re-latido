import { Box } from "@chakra-ui/react";
import React from "react";

export default function SizeCard({
  recommendedSize,
  selected
}: {
    recommendedSize: number;
    selected: boolean;
}) {
  return (
    <Box fontSize={"1.6rem"} fontWeight="semibold" className={selected ? "size-card-selected" : "size-card"}>
      {recommendedSize}
    </Box>
  );
}
