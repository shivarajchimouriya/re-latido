"use client";
import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { MdInfoOutline, MdOutlinePolicy } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { Box, Container, Grid, Text } from "@chakra-ui/react";
import NavItem from "../Hamburger/components/NavItem";
import { FaWhatsapp } from "react-icons/fa";

export default function Menus({ onClose }: { onClose: () => void }) {
  const links = [
    {
      name: "home",
      link: "/",
      icon: <TbSmartHome />,
    },
    {
      name: "policy",
      link: "/policy",
      icon: <MdOutlinePolicy />,
    },
    {
      name: "about us",
      link: "/about",
      icon: <MdInfoOutline />,
    },
    {
      name: "contact us",
      link: "/contact",
      icon: <HiOutlinePhone />,
    },
    {
      name: "message us",
      link: "https://wa.me/9779801154484",
      icon: <FaWhatsapp />,
      isExternal: true,
    },
  ];

  return (
    <Grid gap="2rem">
      <Text as="h2" color="base" fontSize="1.6rem" fontWeight="bold">
        Menu
      </Text>
      <Box ml="2rem">
        {links.map((el) => {
          return (
            <Box key={el.name} onClick={onClose} mb="1.6rem">
              <NavItem
                name={el.name}
                link={el.link}
                icon={el.icon}
                isExternal={el.isExternal}
              />
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}
