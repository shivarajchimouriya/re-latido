"use client";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import ShareBlock from "@/features/ShareBlock";
import { PiPaperPlaneTilt, PiShareFat, PiShareFatLight } from "react-icons/pi";
import { AiOutlineShareAlt } from "react-icons/ai";

const ShareButton = () => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  const [url, seturl] = useState<string>("");
  useEffect(() => {
    const shareURL = window.location.href;
    seturl(shareURL);
  }, []);

  return (
    <>
      <IconButton
      w='33%'
        aria-label="share"
        display='flex'
        justifyContent='end'
        icon={<PiShareFatLight fontSize="2.5rem" onClick={onOpen} />}
      />
      <ShareBlock isOpen={isOpen} onClose={onClose} url={url} />
    </>
  );
};

export default ShareButton;
