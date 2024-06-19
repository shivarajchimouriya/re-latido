import React from "react";
import { socialUrls } from "@/constants/links";
import { appColor } from "@/theme/foundations/colors";
import { Box, Icon, Text } from "@chakra-ui/react";
import Link from "next/link";
import { MdOutlineWhatsapp } from "react-icons/md";

export default function SizeRecommendationNotFound() {
  return (
    <Box my={8} mx={8} color={appColor.base} fontSize={"1.4rem"}>
      <Text textAlign={"center"}>
        Can't find your size? No worries! Reach out to our Customer Care on
        <Link href={socialUrls.whatsapp} target="_blank">
          <Icon
            mx={"0.5rem"}
            fontSize={"2.4rem"}
            as={MdOutlineWhatsapp}
            mb={-2}
            color="whatsapp"
          />
        </Link>
      </Text>
    </Box>
  );
}
