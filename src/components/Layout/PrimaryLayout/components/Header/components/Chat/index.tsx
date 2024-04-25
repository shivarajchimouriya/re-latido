import { Box, IconButton } from "@chakra-ui/react";
import React from "react";
import { RiChat1Line } from "react-icons/ri";

const Chat = () => {
  return (
    <Box>
      <IconButton icon={<RiChat1Line />} aria-label="chat" fontSize="2rem" />
    </Box>
  );
};

export default Chat;
