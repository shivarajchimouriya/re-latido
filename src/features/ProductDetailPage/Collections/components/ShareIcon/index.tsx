import { Button, Center } from "@chakra-ui/react";
import React, { ReactElement } from "react";
interface IShare {
  color: string;
  shareUrl: string;
  icon: ReactElement;
}

const ShareIcon = ({ color, icon, shareUrl }: IShare) => {
  const onShare = (url: string) => {
    window.open(url, "_blank", "height=500,width=800");
  };

  return (
    <Center position="relative" h="7rem" w="7rem" role="group">
      <Button
        fontSize="1.8rem"
        p=".7rem"
        backdropFilter="auto"
        backdropBlur="10px"
        w="full"
        h="full"
        rounded="1rem"
        color="white"
        transitionDuration=".4s"
        border="thin"
        bg={color}
        onClick={() => onShare(shareUrl)}
      >
        {icon}
      </Button>
    </Center>
  );
};

export default ShareIcon;
