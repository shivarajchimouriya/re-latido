"use client";
import { setGender } from "@/serverActions";
import { logger } from "@/utils/logger";
import { Box, Button, Flex } from "@chakra-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { cookies } from "next/headers";
import { useParams, usePathname, useRouter } from "next/navigation";
import React from "react";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";

const GenderSwitcher = () => {
  const genders = [
    {
      name: "male",
      icon: <BiMaleSign />
    },
    {
      name: "female",
      icon: <BiFemaleSign />
    }
  ];

  const params = usePathname();
  const isFemale = params.includes("female");
  const activeGender = isFemale ? "female" : "male";
  const router = useRouter();

  const changeTab = (gender: string) => {
    localStorage.setItem("gender", gender);
    router.push(`/gender/${gender}`);
  };
  return (
    <Box w="full" px="2rem">
      <Flex
        w="full"
        justify="center"
        gap="1rem"
        my="2rem"
        border="1px solid "
        shadow="md"
        borderColor="gray.200"
        rounded="full"
        p=".4rem"
      >
        <AnimatePresence>
          {genders.map(el => {
            const isActive = activeGender === el.name;
            return (
              <Box position="relative" w="full">
                <Button
                  fontSize="1.3rem"
                  textTransform="uppercase"
                  leftIcon={el.icon}
                  fontWeight="bold"
                  iconSpacing="1rem"
                  p="2rem"
                  w="full"
                  onClick={() => changeTab(el.name)}
                  color={isActive ? "white" : "black"}
                >
                  {el.name}
                </Button>
                {isActive &&
                  <Box
                    as={motion.div}
                    zIndex="-1"
                    position="absolute"
                    layoutId="gender_switcher"
                    inset="0"
                    w="full"
                    rounded="full"
                    m=".1rem"
                    bg="black"
                  />}
              </Box>
            );
          })}
        </AnimatePresence>
      </Flex>
    </Box>
  );
};

export default GenderSwitcher;
