"use client";
import {
  Box,
  ButtonProps,
  Flex,
  FlexProps,
  IconButton,
  Text,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import { AnimatePresence, motion, useDragControls } from "framer-motion";
import React, { useRef } from "react";
import { FaFilter } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";
import { TbFilterCog } from "react-icons/tb";

interface IProps extends ButtonProps {}

const Appendix = ({ ...rest }: IProps) => {
  const controls = useDragControls();
  const containerref = useRef<HTMLDivElement | null>(null);

  return (
    <>
    <Box as={motion.div}  ref={containerref} w="fit-content" h="fit-content"
    
    rounded="full"
        position="fixed"
        right="3rem"
        bottom="3rem"
        fontSize="2rem"
        height="5.5rem"
        width="5.5rem"
    >
    </Box>

      <IconButton
        as={motion.button}
        dragConstraints={document.getElementById("body")}
        drag
        rounded="full"
        position="fixed"
        right="3rem"
        bottom="3rem"
        fontSize="2rem"
        height="5.5rem"
        width="5.5rem"
        bg="rgba(255,255,255,.5)"
        shadow='sm'
        backdropFilter='auto'
        
        backdropBlur='7px'
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
