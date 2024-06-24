import AppImage from "@/components/AppImage";
import { Button, Text } from "@chakra-ui/react";
import React from "react";

interface IProps {
  image: string;
  name: string;
  id: number;
  isActive: boolean;
  onLeatherSelect: (id: number) => void;
}

const Leathercapsule = ({
  image,
  name,
  onLeatherSelect,
  id,
  isActive,
}: IProps) => {
  return (
    <Button
      h="9rem"
      p=".6rem"
      rounded="md"
      onClick={() => onLeatherSelect(id)}
      display="grid"
      placeItems="center"
      outline="1px solid rgba(0,0,0,0.08)"
      zIndex="5"
    >
      <AppImage
        style={{ height: "100%", objectFit: "contain", marginTop: "-0.5rem" }}
        src={image}
        alt={name}
        height={100}
        width={100}
      />

      <Text
        lineHeight="1rem"
        textAlign="center"
        fontWeight={isActive ? "semibold" : "base"}
      >
        {name}
      </Text>
    </Button>
  );
};

export default Leathercapsule;
