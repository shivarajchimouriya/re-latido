import { Box } from "@chakra-ui/react";
import Lottie from "lottie-react";
import React from "react";
import animationData from "../../../../public/search-not-found.json";

export default function SearchNotFound() {
  return (
    <Box mt="16vh">
      <Lottie animationData={animationData} loop />
    </Box>
  );
}
