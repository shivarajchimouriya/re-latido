"use client"
import React from "react";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "aws-amplify/auth";
import { logger } from "@/utils/logger";
import { useRouter } from "next/navigation";
import useProfile from "@/hooks/client/useProfile";

export default function ProfileSection({ onClose }: { onClose: () => void }) {
  const res = useProfile();
  console.log("response: ", res);
  const router = useRouter();
  const handleLogout = () => {
    const logout = confirm("Are you sure, you want to Logout");
    if (logout) {
      try {
        signOut();
        onClose();
        router.replace("/");
      } catch (error) {
        logger.error(error);
      }
    }
  };
  return (
    <HStack
      justify="space-between"
      bg="light-black"
      px="1rem"
      py="1rem"
      gap="2rem"
      rounded="full"
      width="full"
    >
      <Link href="/profile">
        <HStack gap="1rem" onClick={onClose}>
          <Avatar
            src="https://l-inventory-test-vikash.s3.ap-south-1.amazonaws.com/public/profile/userProfile/1718793266735"
            w="4rem"
            h="4rem"
            border="1px solid gray"
            rounded="100%"
            fontSize="3rem"
            color="gray.600"
          />
          <Box color="base">
            <Text as="h3" fontSize="1.6rem" fontWeight="semibold">
              Ankit bh
            </Text>
            <Text fontSize="1rem">ankitbhusal59@gmail.com</Text>
          </Box>
        </HStack>
      </Link>
      <Box pr="1.6rem" color="error" onClick={handleLogout}>
        <FiLogOut fontSize="1.6rem" />
      </Box>
    </HStack>
  );
}
