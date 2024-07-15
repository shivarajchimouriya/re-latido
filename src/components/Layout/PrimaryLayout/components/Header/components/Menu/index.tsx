"use client";
import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { MdInfoOutline, MdOutlinePolicy } from "react-icons/md";
import { HiOutlinePhone, HiOutlineShoppingBag } from "react-icons/hi";
import { Box, Container, Grid, Text } from "@chakra-ui/react";
import NavItem from "../Hamburger/components/NavItem";
import { FaWhatsapp } from "react-icons/fa";
import { useFetchProfile } from "@/features/ProfilePage/data/useProfile";

export default function Menus({ onClose }: { onClose: () => void }) {
  const { data: profileData, isLoading } = useFetchProfile();
  const isLoggedIn = profileData?.data;

  const links = [
    { name: "home", link: "/", icon: <TbSmartHome /> },
    { name: "policy", link: "/policy", icon: <MdOutlinePolicy /> },
    { name: "about us", link: "/about", icon: <MdInfoOutline /> },
    { name: "contact us", link: "/contact", icon: <HiOutlinePhone /> },
    {
      name: "message us",
      link: "https://wa.me/9779801154484",
      icon: <FaWhatsapp />,
      isExternal: true
    }
  ];

  const orders = {
    name: "my orders",
    link: "/orders",
    icon: <HiOutlineShoppingBag />,
    isExternal: true
  };

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
      {isLoggedIn  && (
        <Box onClick={onClose} mb="1.6rem">
          <NavItem
            name={orders.name}
            link={orders.link}
            icon={orders.icon}
            isExternal={orders.isExternal}
          />
        </Box>
      )}
      </Box>
    </Grid>
  );
}
