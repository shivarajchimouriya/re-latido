"use client";
import React from "react";
import { Avatar, Box, HStack, Text } from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "aws-amplify/auth";
import { logger } from "@/utils/logger";
import { useRouter } from "next/navigation";
import { useFetchProfile } from "@/features/ProfilePage/data/useProfile";
import { IoLogInOutline } from "react-icons/io5";

export default function ProfileSection({ onClose }: { onClose: () => void }) {
  const { data: profileData, isLoading } = useFetchProfile();
  const data = profileData?.data;
  const router = useRouter();
  const handleLogout = () => {
    const logout = confirm("Are you sure, you want to Logout");
    if (logout) {
      try {
        signOut();
        onClose();
        location.replace("/");
      } catch (error) {
        logger.error(error);
      }
    }
  };
  const handleLogin = () => {
    onClose();
    router.push("/auth");
  };
  if (isLoading) {
    return (
      <HStack
        justify="space-between"
        bg="light-black"
        px="1rem"
        py="1rem"
        gap="2rem"
        height="6rem"
        rounded="full"
        width="full"
      ></HStack>
    );
  }
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
      <Link href={data?.name ? "/profile" : "/auth"}>
        <HStack gap="1rem" onClick={onClose}>
          <Avatar
            src={data?.profile_image ?? ""}
            name={data?.name}
            w="4rem"
            h="4rem"
            border="1px solid gray"
            rounded="100%"
            fontSize="3rem"
            color="gray.600"
          />
          {data ? (
            <Box color="base">
              <Text as="h3" fontSize="1.6rem" fontWeight="semibold">
                {data?.name}
              </Text>
              <Text fontSize="1rem">{data?.email}</Text>
            </Box>
          ) : (
            <Box color="base">
              <Text as="h3" fontSize="1.6rem" fontWeight="semibold">
                Login/Signup
              </Text>
            </Box>
          )}
        </HStack>
      </Link>
      {data ? (
        <Box pr="1.6rem" color="error" onClick={handleLogout}>
          <FiLogOut fontSize="1.6rem" />
        </Box>
      ) : (
        <Box pr="1.6rem" color="base" onClick={handleLogin}>
          <IoLogInOutline fontSize="3rem" />
        </Box>
      )}
    </HStack>
  );
}
