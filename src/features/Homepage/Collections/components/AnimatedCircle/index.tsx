import { Box } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
const AnimatedCircle = () => {
  return (
    <Box
      className="circle"
      position="absolute"
      width="120%"
      height="120%"
      zIndex={-10}
      isolation="isolate"
    >
      <motion.svg
        fill="none"
        strokeWidth=".6rem"
        stroke="red"
        className="jss1155"
        viewBox="0 0 192  192"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="96" cy="96" r="80" />
      </motion.svg>
    </Box>
  );
};

export default AnimatedCircle;
