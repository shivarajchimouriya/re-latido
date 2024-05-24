"use client";
import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { RiChat1Line } from "react-icons/ri";

const Chat = () => {
  const onClick = () => {
    window.open("https://wa.me/9779801154484", "_blank");
  };

  return (
    <Box>
      <IconButton
        icon={<RiChat1Line />}
        onClick={onClick}
        aria-label="chat"
        fontSize="2rem"
      />
    </Box>
  );
};

export default Chat;
