import LogoIcon from "@/components/Icons/Logo";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <Box>
        <LogoIcon />
      </Box>
    </Link>
  );
};

export default Logo;
