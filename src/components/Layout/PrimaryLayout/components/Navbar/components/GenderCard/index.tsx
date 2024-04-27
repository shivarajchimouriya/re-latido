import {
  Box,
  HStack,
  IconButton,
  StackProps,
  Text,
  VStack
} from "@chakra-ui/react";
import React, { ReactElement, ReactNode } from "react";

interface IProps extends StackProps {
  icon: ReactElement;
  gender: string;
}

const GenderCard = ({ icon, gender, ...rest }: IProps) => {
  return (
    <Box position="relative">
      {" "}<HStack bg={"rgba(0,0,0,0.1)"} p="1rem" {...rest}>
        <IconButton icon={icon} aria-label={gender} />
        <Text textTransform="capitalize" fontSize="1rem">
          {" "}{gender}{" "}
        </Text>
      </HStack>
    </Box>
  );
};

export default GenderCard;
