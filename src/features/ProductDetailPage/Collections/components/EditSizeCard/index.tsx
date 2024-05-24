import { RiEdit2Fill } from "react-icons/ri";
import { Box } from "@chakra-ui/react";
import React from "react";
import { appColor } from "@/theme/foundations/colors";

export default function EditSizeCard({ onOpen }: { onOpen: any }) {
  return (
    <Box
      fontSize={"1.8rem"}
      fontWeight="semibold"
      className={"edit-size-card"}
      onClick={onOpen}
    >
      <RiEdit2Fill color={appColor.base} />
    </Box>
  );
}
