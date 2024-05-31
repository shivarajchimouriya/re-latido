"use client";
import React from "react";
import Lottie from "lottie-react";
import { Box, Button, Container, Text, VStack } from "@chakra-ui/react";
import animationData from "../../../public/not-found.json";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";

export default function NotFound() {
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
            Page not found
          </Text>
          <Text fontSize="1.3rem" mb="2rem" textAlign="center">
            The page you’re looking for is on vacation. We’ll send a postcard
            when it’s back!
          </Text>
          <Link href="/">
            <Button
              display="flex"
              alignItems="center"
              px="3rem"
              className="primary-button"
              rounded="full"
              leftIcon={<IoChevronBackOutline fontSize="2rem" />}
            >
              <Text mt=".2rem" mr=".5rem">
                {" "}
                Return Home{" "}
              </Text>
            </Button>
          </Link>
        </VStack>
      </Box>
    </Container>
  );
}
