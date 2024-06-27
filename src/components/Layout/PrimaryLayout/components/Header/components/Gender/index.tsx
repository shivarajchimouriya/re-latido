"use client";
import {
  Box,
  Button,
  Center,
  Divider,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IoMaleOutline, IoFemaleOutline } from "react-icons/io5";
import { getCookie, setCookie } from "cookies-next";

import { gender as GENDER } from "@/enums/index";
import { genderType } from "@/features/Homepage/ProductListings";

interface IProps {
  gender: string;
}

export default function Gender({ gender }: IProps) {
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
          {gender === GENDER.FEMALE ? (
            <IoFemaleOutline fontSize="1.6rem" />
          ) : (
            <IoMaleOutline fontSize="1.6rem" />
          )}
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
