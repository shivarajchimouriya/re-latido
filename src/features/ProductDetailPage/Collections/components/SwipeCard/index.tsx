import AppImage from "@/components/AppImage";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import React from "react";
import { appColor } from "@/theme/foundations/colors";

export default function SwipeCard({ fit, selectedOne }: { fit: any, selectedOne: boolean }) {
  return (
    <Box className={selectedOne ? "highlighted-card" : "normal-card"}>
      <AppImage rounded="0.4rem 0.4rem 0 0 " height={307} width={144} alt="fit" src={fit?.front} />
      <Flex
        placeItems="center"
        justify="center"
        gap={16}
        py={16}
        borderRadius="0 0 0.4rem 0.4rem"
      >
        <Text textTransform="uppercase" fontSize="1.2rem" fontWeight="bold">
          {fit?.label}
        </Text>
        <Button>
          <MdOutlineFlipCameraAndroid color={!selectedOne ? appColor.black : ''} fontSize="1.6rem" />
        </Button>
      </Flex>
    </Box>
  );
}
