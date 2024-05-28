"use client";
import LogoIcon from "@/components/Icons/Logo";
import { Box } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Logo = () => {
  const router = useRouter();
  const pathName = usePathname();
  const key = pathName + "_depth";
  const clearSession = () => {
    sessionStorage.setItem(key, "0");
    sessionStorage.setItem(`/_depth`, "0");

    router.refresh();
  };

  return (
    <Link href="/">
      <Box onClick={clearSession}>
        <LogoIcon />
      </Box>
    </Link>
  );
};

export default Logo;
