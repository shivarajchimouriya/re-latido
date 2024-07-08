"use client";
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text
} from "@chakra-ui/react";

import Wheel from "../Wheel/index";
import { appColor } from "@/theme/foundations/colors";
import { ISizeDetails } from "../SizeModuleSection";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { BiCloset } from "react-icons/bi";
import { CgClose } from "react-icons/cg";

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

interface ISizingData {
  height: string;
  age: string;
  weight: string;
}

export default function SizeModal({
  isOpen,
  onClose,
  heightOptions,
  sizeDetailSubmit
}: IProps) {
  const searchParams = useSearchParams();

  const [localStorageData, setLocalStorageData] = useState<ISizingData | null>(
    () => {
      const sizing = localStorage?.getItem("sizing");
      return sizing ? (JSON.parse(sizing) as ISizingData) : null;
    }
  );
  const urlAge = searchParams.get("age");
  const urlHeight = searchParams.get("height");
  const urlWeight = searchParams.get("weight");

  const [height, setHeight] = useState<string | null>(
    urlHeight || localStorageData?.height || null
  );
  const [weight, setWeight] = useState<string | null>(
    urlWeight || localStorageData?.weight || null
  );
  const [age, setAge] = useState<string | null>(
    urlAge || localStorageData?.age || null
  );

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

    localStorage?.setItem(
      "sizing",
      JSON.stringify({
        height: height,
        weight: weight,
        age: age
      })
    );
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <Box
              position="absolute"
              inset="0"
              bg='rgba(0,0,0,0.8)'
              backdropFilter="auto"
              // backdropBlur="2px"
              zIndex="10"
              onClick={onClose}
              as={motion.div}
              initial={{
                opacity:0,
              }}


              animate={{
                opacity:1,

              }}
              exit={{
                opacity:0

              }}
            />

            <Center
              position="fixed"
              inset="0"
              zIndex="100000"
              onClick={(e) => {
                e.stopPropagation();
                onClose();
              }}
            >
              <Box
              as={motion.div}


              initial={{
                x:"-100%",
                // scale:0
              
              }}
              animate={{
                x:"0%",
                transition:{
                  bounce:false,
                  duration:.5
                }
                
                
              }}
              exit={{
                x:"100%",
                transition:{
                  bounce:false
                }
              }}
                h="fit-content"
                bg={"rgba(0,0,0,0.6)"}
                boxShadow={"lg"}
                display={"grid"}
                backdropFilter='auto'
                placeItems={"center"}
                rounded={"1rem"}
                m={4}
                mx="auto"
                w="95%"
                border={"1px solid var(--text-primary)"}
                maxW="500px"
                 onClick={(e) => {
                e.stopPropagation();
              }}
              >
                <Box width={"97%"} my={8}>
                  <Flex
                    w="full"
                    px="1rem"
                    alignItems="center"
                    fontWeight={"500"}
                    justifyContent={"space-between"}
                  >
                    <Text
                      w="full"
                      fontWeight="bold"
                      fontSize={"1.6rem"}
                      color="white"
                      flex="1"
                    >
                      Select Body Details
                    </Text>
                    <IconButton
                      onClick={onClose}
                      p=".5rem"
                      rounded="full"
                      bg="rgba(0,0,0,0.4)"
                      fontSize="2rem"
                      textColor="white"
                      icon={<CgClose />}
                      aria-label="close"
                    />
                  </Flex>
                  <Box>
                    <Flex
                      mt={"4rem"}
                      w={"full"}
                      justifyContent={"space-evenly"}
                    >
                      <Box width={40} height={"25rem"}>
                        <Wheel
                          onChange={onAgeChange}
                          default={Number(age) || 24}
                          label="Age"
                          length={200}
                          width={40}
                        />
                      </Box>
                      <Box width={40} height={"25rem"}>
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
                      <Box width={40} height={"25rem"}>
                        <Wheel
                          default={Number(weight) || 70}
                          label="Weight"
                          onChange={onWeightChange}
                          length={200}
                          width={40}
                        />
                      </Box>
                    </Flex>
                  </Box>
                  <HStack mt={"6rem"}  w={"full"} gap={"1rem"}>
                    <Button
                      padding={"1.4rem 2rem"}
                      fontWeight={"bold"}
                      fontSize={"1.4rem"}
                      bg="white"
                      rounded="full"
                      // className="primary-button"
                      w={"full"}
                      type="submit"
                      onClick={handleSizeSubmit}
                    >
                      Submit
                    </Button>
                    <Button
                      fontWeight={"bold"}
                      fontSize={"1.4rem"}
                      py='1.4rem'
                      px='2rem'
                      color={appColor.base}
                      rounded="full"
                      // className="outline-button"
                      border={"1px solid var(--text-primary)"}
                      w={"full"}
                      onClick={onClose}
                    >
                      Cancel
                    </Button>
                  </HStack>
                </Box>
              </Box>
            </Center>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
