"use client";
import { useActiveLeather } from "@/features/ProductDetailPage/Context/LeatherContext";
import { Box } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface IProps {
  children: ReactNode;
}

const ImageLeatherWrapper = ({ children }: IProps) => {
  const leather = useActiveLeather();

  const appMode=leather?.leatherMode;
  const bg=appMode==='dark'?"radial-gradient(circle at center, #1a1a1a 0%, #141414 50%, #0a0a0a 100%)":"white"
  return (
    <Box
      w="full"
      bgGradient={bg}
    >
      {children}
    </Box>
  );
};

export default ImageLeatherWrapper;
