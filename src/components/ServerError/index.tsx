"use client";
import React from "react";
import Lottie from "lottie-react";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import animationData from "../../../public/server-error.json";
import Link from "next/link";
import { IoChevronBackOutline, IoReload } from "react-icons/io5";
import { useRouter } from "next/navigation";

export default function ServerError() {
  const router = useRouter();
  const handleRefresh = () => {
    router.refresh();
  };
  return (
    <Container minH="75vh" display="grid" placeItems="center">
      <Box mt="10%" alignItems="center" justifyContent="center">
        <VStack width="70vw">
          <Box minH="20rem">
            <Lottie animationData={animationData} loop />
          </Box>
          <Text
            mt="2rem"
            as="h2"
            fontSize="2rem"
            fontWeight="black"
            textTransform="uppercase"
          >
            Server Error
          </Text>
          <Text fontSize="1.3rem" mb="2rem" textAlign="center">
            Our server is having a little meltdown. It's not you, it's us. We're
            on it!
          </Text>
          <Link href="/">
            <Button
              display="flex"
              alignItems="center"
              width="50vw"
              className="primary-button"
              rounded="full"
              leftIcon={<IoChevronBackOutline fontSize="2rem" />}
            >
              <Text mt=".2rem" mr=".5rem">
                Return Home
              </Text>
            </Button>
          </Link>
          <Button
            display="flex"
            alignItems="center"
            mt="2rem"
            width="50vw"
            className="primary-button"
            rounded="full"
            onClick={handleRefresh}
            leftIcon={<IoReload fontSize="2rem" />}
          >
            <Text mt=".2rem" mr=".5rem">
              Refresh
            </Text>
          </Button>
        </VStack>
      </Box>
    </Container>
  );
}
