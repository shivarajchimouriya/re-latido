import { HStack, StackProps, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface IProps extends StackProps {
  link: string;
  name: string;
}

const NavItem = ({ link, name, ...rest }: IProps) => {
  return (
    <Link href={link}>
      {" "}<HStack {...rest}>
        <Text
          fontSize="2.7rem"
          textTransform="capitalize"
          fontWeight="bold"
          color="gray"
        >
          {name}
        </Text>
      </HStack>
    </Link>
  );
};

export default NavItem;
