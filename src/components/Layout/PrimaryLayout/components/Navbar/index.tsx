"use client";
import { Box, Circle, Flex, HStack, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import React, { ReactElement, ReactNode, useState } from "react";
import { AiOutlineHome, AiOutlineThunderbolt } from "react-icons/ai";
import { GoHome, GoPerson } from "react-icons/go";
import { RiSearch2Line } from "react-icons/ri";
import Appendix from "./components/Appendix";
import GenderCard from "./components/GenderCard";
import { BiMaleSign } from "react-icons/bi";
import Link from "next/link";
import { logger } from "@/utils/logger";
import { useCategories } from "@/hooks/server/useCategories";
import GenderSwitch from "./components/GenderSwitch";
import { usePathname } from "next/navigation";
import dynamic from "next/dynamic";
import CardLoader from "@/components/CardLoader";
import FilterBox from './components/FIlterBox'

const Navbar = () => {
  interface INavItem {
    icon: ReactElement;
    name: string;
    link: string;
  }

  const navItems: INavItem[] = [
    { icon: <GoHome    />, link: "/", name: "" },
    { icon: <RiSearch2Line />, link: "/search", name: "search" },
    { icon: <GoPerson />, link: "/profile", name: "account" }
  ];

const  pathName=  usePathname();


  const { isOpen, onClose, onOpen } = useDisclosure()
  
  useCategories();
  

  return (
    <>
        <Flex
          position="fixed"
          bottom=".3rem"
          zIndex={10}
          transform="translateX(-50%)"
          left="50%"
          w='97vw'
          fontSize="2.4rem"
          px="2rem"
          alignItems='end'
          color="white"
          gap='1rem'
            rounded=".5rem"
            roundedBottom='2rem'
            bg="rgba(0,0,0,0.6)"
            backdropFilter="auto"
            backdropBlur="7px"
        >
          <GenderSwitch/>
          <Flex
            as={motion.div}
            // layoutId="b"
            exit={{ opacity: 0 }}

            // initial={{y:400}}
            // animate={{y:0}}
          
            transitionDuration='.4s'
            

          >
            {navItems.map(el => {
              const isActive = pathName.includes (el.name)
              return (
                <Link
                href={el.link}
                key={el.name}
                >
                <VStack
                  as={motion.div}
                  position="relative"
                  w="7rem"
                  height="6rem"
                  align="center"
                  justify="center"
                  transitionDuration=".3s"
                  transform={`translateY(${isActive ? 40 : 0})`}
                >
                  <IconButton
                    as={motion.button}
                    aria-label={el.name|| "home" }
                    icon={el.icon}
                    transitionDuration=".3s"
                    fontWeight={isActive ? "bold" : "normal"}
                  />
               <AnimatePresence>   {isActive &&
                    <Circle
                      layoutId="nav_indicator"
                      as={motion.div}
                      size=".3rem"
                      left="50%"
                      position="absolute"
                      bottom="20%"
                      transform="translateX(-50%)"
                      bg="white"
                    />}
                    </AnimatePresence>
                </VStack>
                </Link>
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

              zIndex={10000} bottom='0' width='100%' height='45rem' py='2rem' pb='1rem'
              onPan={(e: PointerEvent, info: PanInfo) => {
                logger.log("info",info)
                if ((info.delta.y > 2 || info.velocity.y>40 ) && info.delta.x === 0   ) {
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
                animate={{ y: 0, transition: { duration:.1, damping:4,  bounce: true } }}
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

    </>
  );
};

export default Navbar;
