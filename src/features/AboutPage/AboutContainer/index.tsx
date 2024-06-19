import CleanLogo from "@/components/Icons/CleanLogo";
import { HStack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const AboutContainer = () => {
  return (
    <VStack w="full" bg="dark_bg" color="white" p="1rem">
      <HStack color="white" fontSize="2rem" gap="1rem">
        <Text py="2rem" color="#707580">
          {" "}
          About
        </Text>
        <CleanLogo />
        <Text>Latido</Text>
      </HStack>

      <VStack
        w="full"
        mt="3rem"
        mb="10rem"
        alignItems="start"
        gap="3rem"
        fontSize="1.5rem"
      >
        <Text>Namaste !</Text>

        <Text>
          2071 BS (2014) we started with a dream of customization of leather
          jackets, and we witnessed a new culture that was emerging in our
          community, it was redefining leather jacket culture into our daily
          lives which was already a part of Nepal since generations but long
          lost.
        </Text>

        <Text>
          We got to experience years of interconnectedness back and forth
          between different people with varying perspectives on fit, design and
          silhouettes
        </Text>
        <Text>
          Today we aspire to build a digital experience that could help
          represent our idea of who we are and where we come from. This time the
          idea goes beyond leather, leather jackets, factories, supply chains.
          Our next frontier is in embracing our true Nepali identity and how we
          could create a unique Nepali style that could resonate on a global
          fashion platform.
        </Text>
      </VStack>
    </VStack>
  );
};

export default AboutContainer;
