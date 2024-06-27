import { Flex } from "@chakra-ui/react";
import React from "react";
import BackButton from "./components/BackButton";
import Logo from "./components/Logo";
import Search from "./components/Search";
import Chat from "./components/Chat";
import HamburgerMenu from "./components/Hamburger";
import Gender from "./components/Gender";

import { getCookies } from "cookies-next";
import { cookies } from "next/headers";
import { gender as GENDER } from "@/enums/index";

const Header = () => {
  const ck: any = getCookies({ cookies });
  let gender;
  if (ck) {
    gender = ck.gender;
    if (gender !== GENDER.MALE && gender !== GENDER.FEMALE) {
      gender = GENDER.MALE;
    }
  }
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
      position="sticky"
      top="0"
    >
      {/* <BackButton /> */}
      <HamburgerMenu />
      <Logo />
      <Gender gender={gender} />
    </Flex>
  );
};

export default Header;
