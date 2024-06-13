"use client";
import { Box, Center, IconButton, Text, VStack, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import React, { useEffect } from "react";
import { RiMenu2Line, RiMenu4Fill } from "react-icons/ri";
import NavItems from "./components/NavItem";
import NavItem from "./components/NavItem";

const HamburgerMenu = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(
    () => {
      if (isOpen) {
        document.body.style.overflowY = "hidden";
      } else {
        document.body.style.overflowY = "auto";
      }

      return () => {
        document.body.style.overflowY = "auto";
      };
    },
    [isOpen]
  );


const links=[
{
  name:'home',
  link:"/"
},
{
  name:'policy',
  link:"/policy"
},
{
  name:'contact us',
  link:"/contact"
},
{
  name:'about us',
  link:"/about"
}

]

  return (
    <>
    <Box
    h='100%'
    py='1rem'
    as={motion.div}
       onPan={(e:PointerEvent, info:PanInfo) => {
          if ((
            info.delta.x > 3 && info.velocity.x >30 ||
            info.delta.x > 30)
          ) {
            onOpen();
          }
        }}
    >
      <IconButton
      as={motion.button}
        icon={<RiMenu2Line />}
        aria-label="chat"
        fontSize="2rem"
        onClick={onOpen}
        pl='2rem'
         

      />
    </Box>

      <AnimatePresence>
        {isOpen &&
          <Box
            as={motion.div}
            position="fixed"
            inset="0"
            zIndex={100}
            bg="rgba(0,0,0,0.4)"
            w="100%"
            h="100dvh"
            initial={{opacity:0}}
            exit={{opacity:0}}

            animate={{opacity:1}}
            onClick={onClose}
            transitionDuration=".4s"
                 onPan={(e:PointerEvent, info:PanInfo) => {
          if (
            info.delta.x < -3 && info.velocity.x < -30 ||
            info.delta.x < -80
          ) {
            onClose();
          }
        }}
          />}
      </AnimatePresence>
      <Box
        as={motion.div}
        transform={`translateX(${isOpen ? "0%" : "-100%"})`}
        position="fixed"
        transitionDuration=".4s"
        onPan={(e:PointerEvent, info:PanInfo) => {
          if ((
            info.delta.x < -3 && info.velocity.x < -30 ||
            info.delta.x < -80)
          ) {
            onClose();
          }
        }}
        inset="0"
        zIndex={1000}
        w="70%"
        h="100dvh"
        bg='rgba(255,255,255,1)'
      >
        <Center h='100%'  w='100%' >
          <VStack  align='start'  w='100%'  pl='2rem'  gap='2rem' >
            {links.map((el)=>{


return <Box key={el.name}  onClick={onClose} > <NavItem name={el.name} link={el.link} />   </Box>

            })}
</VStack>
        </Center>
      </Box>
      </>
  );
};

export default HamburgerMenu;
