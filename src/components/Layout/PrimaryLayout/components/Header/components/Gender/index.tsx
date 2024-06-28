"use client";
import {
  Box,
  Button,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMaleOutline, IoFemaleOutline } from "react-icons/io5";
import { getCookie, setCookie } from "cookies-next";

import { gender as GENDER } from "@/enums/index";
import { genderType } from "@/features/Homepage/ProductListings";
import { PiUserSwitch } from "react-icons/pi";

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
      <MenuButton as={Button}>
        <Box height="fit-content">
          <PiUserSwitch fontSize="1.8rem" />
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleMenuClick(GENDER.MALE)}>
          <IoMaleOutline fontSize="1.6rem" />
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
          <IoFemaleOutline fontSize="1.6rem" />
          <Text fontWeight={isFemale ? "semibold" : ""}>{GENDER.FEMALE}</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
