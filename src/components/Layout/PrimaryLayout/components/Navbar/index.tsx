"use client";
import { Box, Circle, Flex, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import React, { ReactElement, ReactNode, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { HiChat } from "react-icons/hi";
import { HiHome } from "react-icons/hi2";
import { MdPerson } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { RxPerson } from "react-icons/rx";
import Appendix from "./components/Appendix";
import FilterBox from "./components/FIlterBox";

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
  const { isOpen, onClose, onOpen } = useDisclosure()

  const handleNavClick = (navName: string) => {
    setActiveNav(navName);
  };

  return (
    <>
    <AnimatePresence>
      <Flex
        position="fixed"
        bottom="1.2rem"
        zIndex={10}
        transform="translateX(-50%)"
        left="55%"
        fontSize="2.4rem"
        px="2rem"
        color="white"
        gap='1rem'
      >
        <Flex
          as={motion.div}

          bg="rgba(0,0,0,0.4)"
          rounded="4rem"
          backdropFilter="auto"
          backdropBlur="10px"
          transitionDuration='.4s'

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
        <AnimatePresence>
        <Appendix   
        
        
        onClick={onOpen}
        
        
        
        />

</AnimatePresence>

      </Flex>

      <AnimatePresence>

        {isOpen &&

          <>
            <Box
              as={motion.div}

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

              position='fixed' inset='0' zIndex={10000} width='100%' height='100%' bg='rgba(0,0,0,.1)' onClick={onClose} >


            </Box>

            <VStack position='fixed' zIndex={10000} bottom='0' width='100%' height='40rem' py='2rem' pb='1rem'  >
              <VStack w='90%' h='100%'
                as={motion.div}
                backdropFilter='auto' backdropBlur='10px'
                rounded='2rem'
                layoutId="b"
                layout='preserve-aspect'

                bg="white"

              >
<Box w='5rem' h='.7rem' mt='1rem' rounded='5rem' bg='whitesmoke'  />


                <FilterBox />

              </VStack>
            </VStack>
          </>






        }

      </AnimatePresence>
      </AnimatePresence>
    </>
  );
};

export default Navbar;
