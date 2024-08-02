"use client";
import { Center, Flex } from "@chakra-ui/react";
import React from "react";
import HamburgerMenu from "../Header/components/Hamburger";
import Logo from "../Header/components/Logo";
import { IoIosArrowBack } from "react-icons/io";
import { useRouter } from "next/navigation";

const SecondaryHeader = () => {
  const router = useRouter();
  const handleBackPress = () => {
    router.back();
  };
  return (
    <Flex
      className="header"
      width="full"
      maxW="500px"
      justify="space-between"
      align="center"
      pr="2rem"
      backdropFilter="auto"
      // backdropBlur="10px"
      py=".3rem"
      shadow="xl"
      // bg="rgba(255,255,255,0.3)"
      bg="base"
      zIndex={100}
      borderBottom="1px solid rgba(0,0,0,0.2)"
      height="5rem"
      position="fixed"
      top="0"
    >
      {/* <BackButton /> */}
      <HamburgerMenu />
      <Logo />
      <Center fontSize="1.6rem" onClick={handleBackPress}>
        <IoIosArrowBack />
      </Center>
    </Flex>
  );
};

export default SecondaryHeader;
