import { Flex, IconButton } from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { HiChat } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";

const Navbar = () => {
  interface INavItem {
    icon: ReactElement;
    name: string;
    link: string;
  }

  const navItems: INavItem[] = [
    { icon: <AiOutlineThunderbolt />, link: "/home", name: "home" },
    { icon: <RiSearch2Line />, link: "/search", name: "search" },
    { icon: <GoPerson />, link: "/account", name: "account" }
  ];

  return (
    <Flex
      position="fixed"
      bottom="2rem"
      backdropFilter="auto"
      color="white"
      backdropBlur="10px"
      bg="rgba(0,0,0,0.4)"
      zIndex={100}
      transform="translateX(-50%)"
      left="50%"
      fontSize="2.4rem"
      p="1.5rem"
      px="2rem"
      rounded="4rem"
      gap="3rem"
    >
      {navItems.map(el => {
        return <IconButton aria-label={el.name} icon={el.icon} />;
      })}
    </Flex>
  );
};

export default Navbar;
