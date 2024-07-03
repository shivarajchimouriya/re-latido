"use client"
import React from "react";
import { Container } from "@chakra-ui/react";

import animationData from "../../../public/search-not-found.json";
import Lottie from "lottie-react";

export default function DataNotFound() {
  return (
    <Container mt="12rem">
      <Lottie animationData={animationData} loop />
    </Container>
  );
}
