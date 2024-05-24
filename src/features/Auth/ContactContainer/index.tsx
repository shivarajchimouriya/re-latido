import { Box, HStack, Text, VStack } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const ContactContainer = () => {
  const socials = [
    { link: "https://www.facebook.com/latidocustoms", icon: <FaFacebook /> },
    { link: "https://x.com/latidonepal", icon: <FaXTwitter /> },
    { link: "https://www.youtube.com/@latidonepa", icon: <FaYoutube /> },
    { link: "https://www.instagram.com/latidonepal", icon: <FaInstagram /> }
  ];
  return (
    <VStack w="100%" h="80vh">
      <Text fontSize="3rem" fontWeight="bold" py="3rem" mb="5rem" p="1rem">
        WE ALWAYS APPRECIATE{"  "}
        <Text as="span" color="white" bg="#2B2B2B">
          FEEDBACK
          <br />
        </Text>
        AND NEW BUSINESS{" "}
        <Text as="span" color="white" bg="#2B2B2B">
          INQUIRIES
        </Text>
      </Text>

      <VStack
        w="full"
        h="full"
        bg="#2B2B2B"
        color="white"
        alignItems="start"
        p="1rem"
        fontSize="1.4rem"
        pb="3rem"
      >
        <Text fontSize="2rem" fontWeight="bold">
          GET IN TOUCH <br /> WITH US
        </Text>
        <VStack gap="2rem" w="full" align="start">
          <Box mt="2rem">
            <Text color="#707580"> Phone Number </Text>
            <Text> +977 980 1154 484</Text>
          </Box>

          <Box>
            <Text color="#707580"> Email Address</Text>
            <Text> help@latido.com.np</Text>
          </Box>

          <Box>
            <Text color="#707580"> Location </Text>
            <Text> Jhamsikhel Road, Lalitpur</Text>
          </Box>

          <Box>
            <Text color="#707580"> Opening / Closing Hours </Text>
            <Text> Sunday-Friday</Text>
            <Text fontWeight="bold" fontSize="1.3rem">
              9 AM - 7 PM
            </Text>
          </Box>
        </VStack>

        <Box mt="2rem">
          <Text fontWeight="bold" fontSize="2.3rem">
            Follow us
          </Text>
          <HStack gap="2rem" mt="2rem">
            {socials.map(el => {
              return (
                <Link href={el.link} target="_blank" key={el.link}>
                  <Box fontSize="3rem">
                    {el.icon}
                  </Box>
                </Link>
              );
            })}
          </HStack>
        </Box>
      </VStack>
    </VStack>
  );
};

export default ContactContainer;
