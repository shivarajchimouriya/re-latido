"use client";
import {
  Box,
  Flex,
  FlexProps,
  IconButton,
  Text,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { FaFilter } from "react-icons/fa";
import { IoFilterOutline } from "react-icons/io5";

interface IProps extends FlexProps {}

const Appendix = ({ ...rest }: IProps) => {
  return (
    <Flex
      align="center"
      left="1rem"
      {...rest}
      as={motion.div}
      layoutId="b"
      exit={{ y: -200 }}
    >
      <IconButton
        bg="rgba(0,0,0,0.4)"
        backdropFilter="auto"
        backdropBlur="10px"
        rounded="4rem"
        height="5.5rem"
        width="5.5rem"
        icon={<IoFilterOutline />}
        aria-label="filter"
      />
    </Flex>
  );
};

export default Appendix;
