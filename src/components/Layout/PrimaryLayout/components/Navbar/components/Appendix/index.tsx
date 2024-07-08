"use client";
import  assist  from "../../../../../../../../public/assist.json";
import { Box, Button, ButtonProps, IconButton } from "@chakra-ui/react";
import { motion, useDragControls } from "framer-motion";
import { duration } from "html2canvas/dist/types/css/property-descriptors/duration";
import Lottie from "lottie-react";
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
        height="7rem"
        width="7rem"
      ></Box>

      <Button
        as={motion.button}
        dragConstraints={containerref}
        drag
        rounded="full"

        
        position="fixed"
        right="3rem"
        bottom="3rem"
        fontSize="2rem"
        height="5.8rem"
        width="5.8rem"
        bg="rgba(255,255,255,.1)"
        shadow="sm"
        backdropFilter="auto"
        zIndex="10"
        backdropBlur="7px"
        
        aria-label="filter"
        {...rest}
      >

      <Lottie animationData={assist} loop />


      </Button>
    </>
  );
};

export default Appendix;
