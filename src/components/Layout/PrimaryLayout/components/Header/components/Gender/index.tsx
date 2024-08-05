"use client";
import {
  Box,
  Button,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import {
  IoMaleOutline,
  IoFemaleOutline,
  IoMale,
  IoFemale,
} from "react-icons/io5";
import { getCookie, setCookie } from "cookies-next";

import { gender as GENDER } from "@/enums/index";
import { genderType } from "@/features/Homepage/ProductListings";
import { PiUserSwitch } from "react-icons/pi";
import { TbSwitchVertical } from "react-icons/tb";
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Gender() {
  const [currentGender, setCurrentGender] = useState<genderType | null>(null);

  const currentCookie = getCookie("gender") as genderType;
  const handleMenuClick = (gender: string) => {
    if (currentGender !== gender) {
      setCookie("gender", gender, {
        maxAge: 60 * 60 * 24 * 60 * 12,
      });
      window.location.reload();
    }
  };

  useEffect(() => {
    setCurrentGender(currentCookie);
  }, [currentCookie]);

  const isMale = currentGender === GENDER.MALE;
  const isFemale = currentGender === GENDER.FEMALE;

  return (
    <Menu>
      <MenuButton as={Button} rounded="xl">
        <HStack height="fit-content">
          <Text fontSize="1.6rem">{isMale ? <IoMale /> : <IoFemale />}</Text>
        </HStack>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleMenuClick(GENDER.MALE)}>
          <IoMale fontSize="1.6rem" />
          <Text
            fontWeight={isMale ? "semibold" : ""}
            textTransform="capitalize"
          >
            {GENDER.MALE}
          </Text>
        </MenuItem>
        <MenuItem
          onClick={() => handleMenuClick(GENDER.FEMALE)}
          textTransform="capitalize"
        >
          <IoFemale fontSize="1.6rem" />
          <Text fontWeight={isFemale ? "semibold" : ""}>{GENDER.FEMALE}</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
