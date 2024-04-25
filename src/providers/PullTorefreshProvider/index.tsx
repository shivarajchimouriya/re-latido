"use client";
import { Box } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const PullToRefreshProvider = ({ children }: IProps) => {
  const controls = useDragControls();
  return (
    <Box as={motion.div}>
      {" "}{children}{" "}
    </Box>
  );
};

export default PullToRefreshProvider;
