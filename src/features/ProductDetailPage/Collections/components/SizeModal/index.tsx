"use client";
import React, { useState } from "react";
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
} from "@chakra-ui/react";

import Wheel from "../Wheel/index";
import { appColor } from "@/theme/foundations/colors";
import { ISizeDetails } from "../SizeModuleSection";
import { useSearchParams } from "next/navigation";

interface IProps {
  isOpen: boolean;
  onClose: () => void;
  heightOptions: string[];
  sizeDetailSubmit: (height: string, weight: string, age: string) => void;
}

interface IScrollValues {
  abs: number;
  length: number;
  max: number;
  maxIdx: number;
  min: number;
  minIdx: number;
  position: number;
  progress: number;
  rel: number;
  slides: any;
  slidesLength: number;
}

export interface FitOptionsProps {
  label?: any;
  back?: any;
  front?: any;
}

export default function SizeModal({
  isOpen,
  onClose,
  heightOptions,
  sizeDetailSubmit,
}: IProps) {
  const searchParams = useSearchParams();

  const urlAge = searchParams.get("age");
  const urlHeight = searchParams.get("height");
  const urlWeight = searchParams.get("weight");

  const [height, setHeight] = useState<string | null>(urlHeight || null);
  const [weight, setWeight] = useState<string | null>(urlWeight || null);
  const [age, setAge] = useState<string | null>(urlAge || null);

  const onAgeChange = (val: any) => {
    setAge(val.abs.toString());
  };
  const onHeightChange = (val: any) => {
    const height = heightOptions[val.abs];
    const formattedHeight = height.replace(/[d']/g, ".").replace(/[d"]/g, "");
    setHeight(formattedHeight.toString());
  };
  const onWeightChange = (val: any) => {
    setWeight(val.abs.toString());
  };

  const handleSizeSubmit = () => {
    if (!height || !weight || !age) {
      return null;
    }
    sizeDetailSubmit(height, weight, age);
  };

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
            <Flex mt={"4rem"} w={"full"} justifyContent={"space-evenly"}>
              <Box width={40} height={"20rem"}>
                <Wheel
                  onChange={onAgeChange}
                  default={Number(age) || 24}
                  label="Age"
                  length={200}
                  width={40}
                />
              </Box>
              <Box width={40} height={"20rem"}>
                <Wheel
                  default={
                    (height &&
                      heightOptions.indexOf(
                        height.split(".").join("'") + '"' || `5'5"`
                      )) ||
                    50
                  }
                  label="Height"
                  length={104}
                  width={40}
                  onChange={onHeightChange}
                  setValue={heightOptions}
                />
              </Box>
              <Box width={40} height={"20rem"}>
                <Wheel
                  default={Number(weight) || 70}
                  label="Weight"
                  onChange={onWeightChange}
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
              type="submit"
              onClick={handleSizeSubmit}
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
