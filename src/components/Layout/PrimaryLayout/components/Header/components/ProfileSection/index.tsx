"use client";
import React, { MouseEvent, useEffect } from "react";
import {
  Avatar,
  Box,
  Button,
  ButtonGroup,
  Center,
  Container,
  HStack,
  Modal,
  ModalBody,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { FiLogOut } from "react-icons/fi";
import Link from "next/link";
import { signOut } from "aws-amplify/auth";
import { logger } from "@/utils/logger";
import { useRouter } from "next/navigation";
import { useFetchProfile } from "@/features/ProfilePage/data/useProfile";
import { IoLogInOutline } from "react-icons/io5";
import { LuUser2 } from "react-icons/lu";
import Toast from "@/components/Toast";
import useHandleErrorToast from "@/hooks/client/useAppToast";

export default function ProfileSection({ onClose }: { onClose: () => void }) {
  const { isOpen, onOpen, onClose: onCloseDialog } = useDisclosure();
  const toast = useToast();
  const handleErrorToast = useHandleErrorToast();
  const { data: profileData, isLoading } = useFetchProfile();
  const data = profileData?.data;
  const router = useRouter();
  const handleLogout = () => {
    try {
      signOut();
      onClose();
      onCloseDialog();
      toast({
        position: "top",
        duration: 3000,
        render: ({ onClose }) => {
          return (
            <Toast
              status="success"
              onClose={onClose}
              message={"Logout successful."}
            />
          );
        },
      });
      location.replace("/");
    } catch (error) {
      logger.error(error);
      handleErrorToast(error);
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
  const logoutClick = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    onOpen();
    onClose();
  };
  return (
    <>
      <Modal isCentered onClose={onCloseDialog} size={"xl"} isOpen={isOpen}>
        <ModalOverlay bg="rgba(0,0,0,0.3)" />
        <ModalContent>
          <ModalBody>
            <Center>
              <VStack
                gap="2rem"
                rounded="md"
                bg="white"
                boxShadow="2xl"
                w="90%"
                p="2rem"
              >
                <Text fontSize="2rem" fontWeight="bold" textAlign="center">
                  Are you sure you want to logout ?
                </Text>

                <ButtonGroup
                  fontWeight="bold"
                  fontSize="1.8rem"
                  w="80%"
                  gap="1rem"
                >
                  <Button w="full" onClick={onCloseDialog}>
                    cancel
                  </Button>
                  <Button
                    w="full"
                    rounded="md"
                    p=".8rem"
                    border="1px solid black"
                    onClick={handleLogout}
                  >
                    Ok
                  </Button>
                </ButtonGroup>
              </VStack>
            </Center>
          </ModalBody>
        </ModalContent>
      </Modal>

      <HStack
        justify="space-between"
        bg="light-black"
        px="1rem"
        py="1rem"
        rounded="full"
        width="96%"
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
              fontSize="2rem"
              lineHeight="0"
              color="gray.600"
              display="grid"
              placeItems="center"
              textColor="base"
              icon={<LuUser2 />}
            />
            {data ? (
              <Box color="base" w="60%">
                <Text
                  as="h3"
                  fontSize="1.6rem"
                  noOfLines={1}
                  fontWeight="semibold"
                >
                  {data?.name}
                </Text>
                <Text fontSize="1rem" noOfLines={1}>
                  {data?.email}
                </Text>
              </Box>
            ) : (
              <Box color="base" minW="60%">
                <Text
                  as="h3"
                  noOfLines={1}
                  fontSize="1.6rem"
                  fontWeight="semibold"
                >
                  Login/Signup
                </Text>
              </Box>
            )}
          </HStack>
        </Link>
        {data ? (
          <Box pr="1.6rem">
            <Box color="error" onClick={logoutClick}>
              <FiLogOut fontSize="2.4rem" />
            </Box>
          </Box>
        ) : (
          <Box pr="1.6rem" color="base" onClick={handleLogin}>
            <IoLogInOutline fontSize="3rem" />
          </Box>
        )}
      </HStack>
    </>
  );
}
