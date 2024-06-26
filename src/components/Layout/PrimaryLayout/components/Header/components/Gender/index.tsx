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
import React from "react";
import { IoMaleOutline, IoFemaleOutline } from "react-icons/io5";
import { getCookie, setCookie } from "cookies-next";
import { useRouter } from "next/navigation";

export default function Gender() {
  const currentCookie = getCookie("gender");
  const handleMenuClick = (gender: string) => {
    setCookie("gender", gender, {
      maxAge: 60 * 60 * 24 * 60 * 12,
    });
    window.location.reload();
  };
  return (
    <Menu>
      <MenuButton as={Button}>
        <Box height="fit-content">
          <IoMaleOutline fontSize="1.6rem" />
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={() => handleMenuClick("male")}>
          <IoMaleOutline fontSize="1.2rem" />
          <Text fontWeight={currentCookie === "male" ? "semibold" : ""}>
            Male
          </Text>
        </MenuItem>
        <MenuItem onClick={() => handleMenuClick("female")}>
          <IoFemaleOutline fontSize="1.2rem" />
          <Text fontWeight={currentCookie === "female" ? "semibold" : ""}>
            Female
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
