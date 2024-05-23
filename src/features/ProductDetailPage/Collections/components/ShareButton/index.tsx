"use client";
import { Box, Button, Center, Flex, Grid, GridItem, IconButton, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaFacebook, FaFacebookMessenger, FaLinkedinIn, FaRedditAlien, FaTelegramPlane, FaViber, FaWhatsapp } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";
import ShareIcon from "../ShareIcon";
import { IoCopyOutline } from "react-icons/io5";
import { AnimatePresence, motion } from "framer-motion";
import { MdDoneAll } from "react-icons/md";
import ShareBlock from "@/features/ShareBlock";


const ShareButton = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
  const shareURL=window.location.href
    return (
        <>    <IconButton aria-label="share" icon={<IoIosShareAlt fontSize="2.5rem" onClick={onOpen} />} />

<ShareBlock  isOpen={isOpen}  onClose={onClose} url={shareURL}  />

        </>


    );
};

export default ShareButton;
