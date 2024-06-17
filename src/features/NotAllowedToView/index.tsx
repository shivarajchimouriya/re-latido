import Lottie from "lottie-react";
import React from "react";
import animationData from "../../../public/rotate-phone.json";
import animationDataPhone from "../../../public/phone.json";
import { Box, Grid, Text } from "@chakra-ui/react";

interface IProps {
  landscape?: boolean;
}

export default function NotAllowedToView({ landscape }: IProps) {
  return (
    <Grid
      height="100vh"
      overflow="hidden"
      width="full"
      bg="black"
      placeItems="center"
      textAlign="center"
    >
      {landscape ? (
        <Grid placeItems="center">
          <Text color="white" width="50%" textAlign="center">
            <Grid placeItems="center">
              <Box width="50%" mx="auto" objectFit="contain">
                <Lottie animationData={animationData} />
              </Box>
            </Grid>
            This is a Customer Portal of Latido, Designed for{" "}
            <Text as="span" style={{ color: "#04a2dc" }}>
              Mobile
            </Text>{" "}
            devices only with support for portrait mode. Please rotate your
            device to access the site.
          </Text>
        </Grid>
      ) : (
        <Text color="white" textAlign="center" width="50%">
          <Grid placeItems="center">
            <Box width="90%" mx="auto" objectFit="contain">
              <Lottie animationData={animationDataPhone} />
            </Box>
          </Grid>
          This is a Customer Portal of Latido, Designed for{" "}
          <Text as="span" style={{ color: "#04a2dc" }}>
            Mobile
          </Text>{" "}
          devices only. Please access it from another device.
        </Text>
      )}
    </Grid>
  );
}
