import AppImage from "@/components/AppImage";
import { MdOutlineFlipCameraAndroid } from "react-icons/md";
import {
  Box,
  Button,
  Flex,
  HStack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { appColor } from "@/theme/foundations/colors";
import { IFit } from "../FittingSwiper";
import { BsInfoCircle } from "react-icons/bs";
import FitBlogModal from "../FitBlogModal";

export default function SwipeCard({
  fit,
  selectedIdx,
}: {
  fit: IFit;
  selectedIdx: boolean;
}) {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <>
      <FitBlogModal blog="" isOpen={isOpen} onClose={onClose} />
      <Box className={selectedIdx ? "highlighted-card" : "normal-card"}>
        <AppImage
          rounded="0.4rem 0.4rem 0 0 "
          height={307}
          width={144}
          alt="fit"
          src={fit?.front}
        />
        <Flex
          placeItems="center"
          justify="space-between"
          py={6}
          px=".6rem"
          borderRadius="0 0 0.4rem 0.4rem"
        >
          <HStack
            w="full"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              onOpen();
            }}
          >
            <Text textTransform="uppercase" fontSize="1.2rem" fontWeight="bold">
              {fit?.label}
            </Text>
            <BsInfoCircle fontSize="1.3rem" />
          </HStack>
          {/* <Button>

          <MdOutlineFlipCameraAndroid
            color={!selectedIdx ? appColor.black : ""}
            fontSize="1.6rem"
          />
        </Button> */}
        </Flex>
      </Box>
    </>
  );
}
