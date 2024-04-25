"use client";
import { Box, Center, IconButton, Text, useDisclosure } from "@chakra-ui/react";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import React, { useEffect } from "react";
import { RiMenu4Fill } from "react-icons/ri";

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

  return (
    <>
    <Box
    as={motion.div}
       onPan={(e:PointerEvent, info:PanInfo) => {
          console.log("info", info);
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
        icon={<RiMenu4Fill />}
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
          console.log("info", info);
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
        transform={`translateX(${isOpen ? "-25%" : "-100%"})`}
        position="fixed"
        transitionDuration=".4s"
        onPan={(e:PointerEvent, info:PanInfo) => {
          console.log("info", info);
          if ((
            info.delta.x < -3 && info.velocity.x < -30 ||
            info.delta.x < -80)
          ) {
            onClose();
          }
        }}
        inset="0"
        zIndex={1000}
        w="100%"
        h="100dvh"
        bg='rgba(255,255,255,1)'
      >
        <Center>
          <Text>HEllo</Text>
        </Center>
      </Box>
      </>
  );
};

export default HamburgerMenu;
