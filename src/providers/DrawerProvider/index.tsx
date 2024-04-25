"use client";
import { Box, Text, VStack } from "@chakra-ui/react";
import { motion, useMotionValue } from "framer-motion";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const DrawerProvider = ({ children }: IProps) => {
  const val = useMotionValue(0);

  return (
    <Box sx={{ touchAction: "pan-y" }} as={motion.div}>
      {children}
    </Box>
  );
};

export default DrawerProvider;
