import { Flex } from "@chakra-ui/react";
import React from "react";
import BackButton from "./components/BackButton";
import Logo from "./components/Logo";
import Search from "./components/Search";

const Header = () => {
  return (
    <Flex
      w="100%"
      justify="space-between"
      align="center"
      p="2rem"
      position={"sticky"}
      top="0"
      backdropFilter="auto"
      backdropBlur="10px"
      py="1rem"
      shadow="xl"
      bg="rgba(255,255,255,0.3)"
      zIndex={100}
      borderBottom="1px solid gray"
    >
      <BackButton />
      <Logo />
      <Search />
    </Flex>
  );
};

export default Header;
