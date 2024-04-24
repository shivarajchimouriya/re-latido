import { IconButton } from "@chakra-ui/react";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";

const BackButton = () => {
  return (
    <IconButton
      icon={<IoIosArrowBack />}
      opacity="0"
      aria-label="back"
      disabled
    >
      BackButton
    </IconButton>
  );
};

export default BackButton;
