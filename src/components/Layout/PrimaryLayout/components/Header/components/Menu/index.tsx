"use client"
import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { MdInfoOutline, MdOutlinePolicy } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";
import { Box, Container, Grid, Text } from "@chakra-ui/react";
import NavItem from "../Hamburger/components/NavItem";

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
      name: "contact us",
      link: "/contact",
      icon: <HiOutlinePhone />,
    },
    {
      name: "about us",
      link: "/about",
      icon: <MdInfoOutline />,
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
              <NavItem name={el.name} link={el.link} icon={el.icon} />{" "}
            </Box>
          );
        })}
      </Box>
    </Grid>
  );
}
