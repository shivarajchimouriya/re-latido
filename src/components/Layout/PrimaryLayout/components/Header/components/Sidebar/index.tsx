import { Box, Container, Grid, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import NavItem from "../Hamburger/components/NavItem";
import LogoWithSearch from "../LogoWithSearch";
import Menus from "../Menu";
import ProfileSection from "../ProfileSection";

interface IProps {
  onClose: () => void;
}

export default function Sidebar({ onClose }: IProps) {
  return (
    <Grid placeItems="center">
      <VStack alignItems="start" justifyContent="space-between" gap="6rem">
        <LogoWithSearch onClose={onClose} />
        <Menus onClose={onClose} />
        <ProfileSection onClose={onClose} />
      </VStack>
    </Grid>
  );
}
