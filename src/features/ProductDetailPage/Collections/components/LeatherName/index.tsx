"use client";
import {
  Box,
  Center,
  HStack,
  StackProps,
  Text,
  useDisclosure
} from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { BiRightArrow } from "react-icons/bi";
import { text } from "stream/consumers";
import { HiOutlineArrowSmallRight } from "react-icons/hi2";
import LeatherModalblog from "../LeatherModalBlog";

interface IProps extends StackProps {
  text: string;
}

const LeatherName = ({ text, ...rest }: IProps) => {
  return (
    <>


      <HStack
        alignItems="center"
        gap=".5rem"
        h="2rem"
        w="fit-content"
        justify="center"
        position="relative"
        {...rest}
      >
        <AnimatePresence mode="wait">
          <Box
            key={text}
            as={motion.div}
            position="absolute"
            bottom="-.2rem"
            width="full"
            h="1px"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            exit={{ width: "0%" }}
            bg="black"
          />
        </AnimatePresence>
        <AnimatePresence mode="wait">
          <Text
            key={text}
            h="fit-content"
            py=".3rem"
            overflow="hidden"
            transition="all .4s"
            display="flex"
            alignItems="center"
            justifyContent="center"
            fontWeight="bold"
            position="relative"
          >
            {text.split("").map((char, index) => (
              <motion.span
                key={`${char}-${index}`}
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.3, delay: index * 0.05 }
                }}
                exit={{ opacity: 0 }}
              >
                {char}
              </motion.span>
            ))}
          </Text>
        </AnimatePresence>
      </HStack>
    </>
  );
};

export default LeatherName;
