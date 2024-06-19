import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { TODO } from "../../../../../../global";
import BlogWrapper from "../BlogWrapper";

export default function Blog({ associated_blog }: TODO) {
  return (
    <Box padding="8">
      <Text as="h2" fontSize="1.4rem" fontWeight="bold">
        {associated_blog?.title}
      </Text>
      <BlogWrapper
        data={associated_blog?.content}
        primaryMedia={associated_blog?.primaryMedia}
      />
    </Box>
  );
}
