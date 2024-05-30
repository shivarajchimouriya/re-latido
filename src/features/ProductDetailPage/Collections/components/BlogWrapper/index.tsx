import React from "react";
import { TODO } from "../../../../../../global";
import { Box, Grid, Text } from "@chakra-ui/react";
import AppImage from "@/components/AppImage";
import PostBuilder from "../PostBuilder";
import parse from "html-react-parser";

interface IBlogWrapper {
  data: TODO;
  primaryMedia: string;
}

export default function BlogWrapper({ data, primaryMedia }: IBlogWrapper) {
  return (
    <Box as="article" width={"100%"}>
      {primaryMedia && (
        <Box my={"1rem"}>
          <AppImage
            height={500}
            width={500}
            alt={"banner"}
            src={primaryMedia}
          />
        </Box>
      )}
      {data &&
        data?.map((i: any) => {
          if (Array.isArray(i)) {
            return <PostBuilder data={i} />;
          }
          return (
            <Text as="article" my="2rem" mb={"20vh"} fontSize={"1.4rem"}>
              {parse(i)}
            </Text>
          );
        })}
    </Box>
  );
}
