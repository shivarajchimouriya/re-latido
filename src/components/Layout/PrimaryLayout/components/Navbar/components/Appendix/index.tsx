"use client";
import { Box, ButtonProps, IconButton } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import { usePathname } from "next/navigation";
import React, { useRef } from "react";
import { TbFilterCog } from "react-icons/tb";

interface IProps extends ButtonProps {}

const Appendix = ({ ...rest }: IProps) => {
  const pathName = usePathname();
  const containerref = useRef<HTMLDivElement | null>(null);

  if (pathName.startsWith("/product")) return null;

  return (
    <>
      <Box
        as={motion.div}
        ref={containerref}
        w="fit-content"
        h="fit-content"
        rounded="full"
        position="fixed"
        right="3rem"
        bottom="3rem"
        fontSize="2rem"
        height="5.5rem"
        width="5.5rem"
      ></Box>

      <IconButton
        as={motion.button}
        dragConstraints={containerref}
        drag
        rounded="full"
        position="fixed"
        right="3rem"
        bottom="3rem"
        fontSize="2rem"
        height="5.5rem"
        width="5.5rem"
        bg="rgba(255,255,255,.5)"
        shadow="sm"
        backdropFilter="auto"
        zIndex="10"
        backdropBlur="7px"
        icon={
          <TbFilterCog /> // backdropBlur="10px" // backdropFilter="auto" // bg="rgba(0,0,0,0.5)"
        }
        aria-label="filter"
        {...rest}
      />
    </>
  );
};

export default Appendix;
