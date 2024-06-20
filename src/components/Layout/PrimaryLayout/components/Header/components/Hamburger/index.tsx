"use client";
import {
  Box,
  Center,
  IconButton,
  Text,
  VStack,
  useDisclosure,
} from "@chakra-ui/react";
import { AnimatePresence, PanInfo, motion } from "framer-motion";
import React, { useEffect } from "react";
import { RiMenu2Line, RiMenu4Fill } from "react-icons/ri";
import NavItems from "./components/NavItem";
import NavItem from "./components/NavItem";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlinePolicy } from "react-icons/md";
import { TiInfoLarge, TiPhoneOutline } from "react-icons/ti";
import { HiOutlinePhone } from "react-icons/hi";
import { TbSmartHome } from "react-icons/tb";
import LatidoHeader from "../LatidoHeader";
import Sidebar from "../Sidebar";

const HamburgerMenu = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <>
      <Box
        h="100%"
        py="1rem"
        as={motion.div}
        onPan={(e: PointerEvent, info: PanInfo) => {
          if ((info.delta.x > 3 && info.velocity.x > 30) || info.delta.x > 30) {
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
          pl="2rem"
        />
      </Box>
      <AnimatePresence>
        {isOpen && (
          <Box
            as={motion.div}
            position="fixed"
            inset="0"
            zIndex={100}
            bg="rgba(0,0,0,0.4)"
            w="100%"
            h="100dvh"
            initial={{ opacity: 0 }}
            exit={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            transitionDuration=".4s"
            onPan={(e: PointerEvent, info: PanInfo) => {
              if (
                (info.delta.x < -3 && info.velocity.x < -30) ||
                info.delta.x < -80
              ) {
                onClose();
              }
            }}
          />
        )}
      </AnimatePresence>
      <Box
        as={motion.div}
        transform={`translateX(${isOpen ? "0%" : "-100%"})`}
        position="fixed"
        transitionDuration=".4s"
        onPan={(e: PointerEvent, info: PanInfo) => {
          if (
            (info.delta.x < -3 && info.velocity.x < -30) ||
            info.delta.x < -80
          ) {
            onClose();
          }
        }}
        inset="0"
        zIndex={1000}
        w="70%"
        h="100dvh"
        bg="black"
        backdropFilter="auto"
        backdropBlur="5px"
      >
        <Center h="100%" w="100%">
          <Sidebar onClose={onClose} />
        </Center>
      </Box>
    </>
  );
};

export default HamburgerMenu;
