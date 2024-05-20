import React from "react";
import {
  Box,
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
} from "@chakra-ui/react";

import Wheel from "../Wheel/index";
import { appColor } from "@/theme/foundations/colors";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  heightOptions: () => string[];
}

export default function SizeModal({ isOpen, onClose, heightOptions }: IProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay bg={"rgba(0, 0, 0, 0.8)"} />
      <ModalContent
        h="fit-content"
        bg={appColor.dark_bg}
        boxShadow={"lg"}
        display={"grid"}
        placeItems={"center"}
        rounded={"4px"}
        m={4}
        border={"1px solid var(--text-primary)"}
      >
        <Box width={"80%"} my={8}>
          <Flex
            textColor={appColor.base}
            fontWeight={"500"}
            justifyContent={"space-between"}
          >
            <ModalHeader fontSize={"1.6rem"} flex="1" width={"full"}>
              Select Body Details
            </ModalHeader>
            <ModalCloseButton />
          </Flex>
          <ModalBody>
            <Flex mt={"4rem"} justifyContent={"space-between"}>
              <Box width={40} height={"20rem"}>
                <Wheel default={24} label="Age" loop length={200} width={40} />
              </Box>
              <Box width={40} height={"20rem"}>
                <Wheel
                  default={50}
                  label="Height"
                  loop
                  length={104}
                  width={40}
                  setValue={heightOptions()}
                />
              </Box>
              <Box width={40} height={"20rem"}>
                <Wheel
                  default={70}
                  label="Weight"
                  loop
                  length={200}
                  width={40}
                />
              </Box>
            </Flex>
          </ModalBody>
          <ModalFooter mt={"4rem"} mb={"2rem"} w={"full"} gap={"1rem"}>
            <Button
              padding={"1rem 2rem"}
              fontWeight={"bold"}
              fontSize={"1.4rem"}
              className="primary-button"
              w={"full"}
            >
              Submit
            </Button>
            <Button
              padding={"1rem 2rem"}
              fontWeight={"bold"}
              fontSize={"1.4rem"}
              color={appColor.base}
              className="outline-button"
              border={"1px solid var(--text-primary)"}
              w={"full"}
              onClick={onClose}
            >
              Cancel
            </Button>
          </ModalFooter>
        </Box>
      </ModalContent>
    </Modal>
  );
}
