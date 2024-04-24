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
      py="1rem"
      shadow="xl"
      borderBottom="1px solid red"
    >
      <BackButton />
      <Logo />
      <Search />
    </Flex>
  );
};

export default Header;
