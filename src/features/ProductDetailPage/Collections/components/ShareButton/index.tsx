"use client";
import { IconButton, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoShareSocialOutline } from "react-icons/io5";
import ShareBlock from "@/features/ShareBlock";

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
        aria-label="share"
        icon={<IoShareSocialOutline fontSize="2.5rem" onClick={onOpen} />}
      />
      <ShareBlock isOpen={isOpen} onClose={onClose} url={url} />
    </>
  );
};

export default ShareButton;
