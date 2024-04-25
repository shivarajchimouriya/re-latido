"use client";
import { Box, Circle, Flex, IconButton, VStack } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, ReactNode, useState } from "react";
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

  const [activeNav, setActiveNav] = useState<string>("home");

  const handleNavClick = (navName: string) => {
    setActiveNav(navName);
  };

  return (
    <Flex
      position="fixed"
      bottom="1.2rem"
      backdropFilter="auto"
      color="white"
      backdropBlur="10px"
      bg="rgba(0,0,0,0.4)"
      zIndex={10}
      transform="translateX(-50%)"
      left="50%"
      fontSize="2.4rem"
      px="2rem"
      rounded="4rem"
    >
      {navItems.map(el => {
        const isActive = el.name === activeNav;

        return (
          <AnimatePresence>
            <VStack
              as={motion.div}
              position="relative"
              w="7rem"
              height="6rem"
              align="center"
              justify="center"
              onClick={() => handleNavClick(el.name)}
              transitionDuration=".3s"
              transform={`translateY(${isActive ? 40 : 0})`}
            >
              <IconButton
                as={motion.button}
                aria-label={el.name}
                icon={el.icon}
                transitionDuration=".3s"
                fontWeight={isActive ? "bold" : "normal"}
              />
              {isActive &&
                <Circle
                  layoutId="nav_indicator"
                  as={motion.div}
                  size=".2rem"
                  left="50%"
                  position="absolute"
                  bottom="25%"
                  transform="translateX(-50%)"
                  bg="white"
                />}
            </VStack>
          </AnimatePresence>
        );
      })}
    </Flex>
  );
};

export default Navbar;
