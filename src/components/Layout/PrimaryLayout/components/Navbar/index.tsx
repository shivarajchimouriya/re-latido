"use client";
import { Box, Circle, Flex, HStack, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import React, { ReactElement, ReactNode, useState } from "react";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { GoPerson } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import Appendix from "./components/Appendix";
import FilterBox from "./components/FIlterBox";
import GenderCard from "./components/GenderCard";
import { BiMaleSign } from "react-icons/bi";

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
            // layoutId="b"
            exit={{ opacity: 0 }}

            initial={{y:400}}
            animate={{y:0}}
            bg="rgba(0,0,0,0.5)"
            rounded="4rem"
            backdropFilter="auto"
            backdropBlur="7px"
            transitionDuration='.4s'
            

          >
            {navItems.map(el => {
              const isActive = el.name === activeNav;
              return (
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
              );
            })}
          </Flex>
          <Appendix
            onClick={onOpen}
          />
        </Flex>


        <AnimatePresence> 
        {isOpen &&

          <>
            <Box
              as={motion.div}

              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}

              position='fixed' inset='0'

              zIndex={10000} width='100%' height='100%' bg='rgba(0,0,0,.1)' onClick={onClose} >


            </Box>

            <VStack
              as={motion.div}
              position='fixed'

              animate={{ transition: { duration: 2 } }}
              zIndex={10000} bottom='0' width='100%' height='45rem' py='2rem' pb='1rem'
              onPan={(e: PointerEvent, info: PanInfo) => {
                if (info.delta.y > 7 && info.delta.x === 0) {
                  onClose()
                }


              }}
            >
                             <VStack w='95%' h='100%'
                position='relative'
                overflow='hidden'
                as={motion.div}
                backdropFilter='auto' backdropBlur='15px'
                rounded='2rem'
                layoutId="b"
                initial={{ y: '100%' }}
                animate={{ y: 0, transition: { duration:.3, damping:4,  bounce: true } }}
                exit={{ y: '100%',transition:{duration:.4,  bounce:false,type:"just",} }}
                bg="rgba(0,0,0,.7)"


              >
                <Box w='3rem' h='.3rem' mt='1rem' rounded='5rem' bg='whitesmoke' />


                <FilterBox onClose={onClose}  />

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
