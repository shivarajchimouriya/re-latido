import { Flex } from "@chakra-ui/react";
import React from "react";
import Logo from "./components/Logo";
import HamburgerMenu from "./components/Hamburger";
import Gender from "./components/Gender";
const Header = () => {
  return (
    <Flex
      className="header"
      w="100%"
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
      <Gender />
    </Flex>
  );
};

export default Header;
