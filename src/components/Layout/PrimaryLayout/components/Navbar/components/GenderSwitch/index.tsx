"use client";
import { Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BiFemaleSign, BiMale, BiMaleSign } from "react-icons/bi";
import { PiSpinnerGap } from "react-icons/pi";
type GenderTypes = "male" | "female";
const GenderSwitch = () => {
  const [activeGender, setActiveGender] = useState<GenderTypes | null>(null);
  const storedItem =
    typeof window === "undefined"
      ? null
      : (localStorage.getItem("gender") as GenderTypes) || "male";
  useEffect(
    () => {
      setActiveGender(storedItem);
    },
    [storedItem]
  );
  const router = useRouter();
  const handleGenderSwitch = () => {
    router.push(`/gender/${activeGender}}`);
  };
  const icon = activeGender === "female" ? <BiFemaleSign /> : <BiMaleSign />;
  return (
    <Flex
      align="center"
      direction="column"
      position="relative"
      as={motion.div}
      _hover={{ scale: 1.1 } // exit={{ y: 200 }} // animate={{ y: 0, transition: { bounce: false, duration: 0.4 } }} // initial={{ y: 200 }}
      }
      bg="rgba(0,0,0,0.5)"
      backdropFilter="auto"
      backdropBlur="10px"
      rounded="2rem"
      onClick={handleGenderSwitch}
    >
      {activeGender
        ? <IconButton
            height="5.5rem"
            width="5.5rem"
            icon={icon}
            aria-label="female"
          />
        : <IconButton
            height="5.5rem"
            className="spinner"
            width="5.5rem"
            icon={<PiSpinnerGap />}
            aria-label="female"
          />}
    </Flex>
  );
};

export default GenderSwitch;
