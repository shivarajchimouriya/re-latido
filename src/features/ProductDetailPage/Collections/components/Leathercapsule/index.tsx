import AppImage from "@/components/AppImage";
import { Box, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  image: string;
  name: string;
  id: number;
  activeLeather: number;
  onLeatherSelect: (id: number) => void;
}

const Leathercapsule = ({
  image,
  name,
  onLeatherSelect,
  id,
  activeLeather
}: IProps) => {
  return (
    <Box
      h="9rem"
      bg="white"
      shadow="sm"
      p=".3rem"
      rounded="md"
      border=".1px solid rgba(0,0,0,0.3)"
      onClick={() => onLeatherSelect(id)}
    >
      <AppImage
        style={{ height: "80%", objectFit: "contain" }}
        src={image}
        alt={name}
        height={100}
        width={100}
      />

      <Text>
        {" "}{name}{" "}
      </Text>
    </Box>
  );
};

export default Leathercapsule;
