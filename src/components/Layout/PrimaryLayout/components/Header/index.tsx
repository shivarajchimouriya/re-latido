import { Flex } from "@chakra-ui/react";
import React from "react";
import BackButton from "./components/BackButton";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Chat from "./components/Chat";
import HamburgerMenu from "./components/Hamburger";

const Header = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      position={"sticky"}
      pr="2rem"
      top="0"
      backdropFilter="auto"
      backdropBlur="10px"
      py="1rem"
      shadow="xl"
      bg="rgba(255,255,255,0.3)"
      zIndex={100}
      borderBottom="1px solid rgba(0,0,0,0.2)"
    >
      {/* <BackButton /> */}
      <HamburgerMenu />
      <Logo />
      <Chat />
    </Flex>
  );
};

export default Header;
