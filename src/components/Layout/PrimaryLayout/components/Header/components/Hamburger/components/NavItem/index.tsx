import { HStack, StackProps, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

interface IProps extends StackProps {
  link: string;
  name: string;
  icon: React.ReactNode;
  isExternal?: boolean;
}

const NavItem = ({ link, name, icon, isExternal, ...rest }: IProps) => {
  return (
    <Link href={link} target={isExternal ? "_blank" : "_self"}>
      <HStack {...rest} gap="2rem">
        <Text as="span" color="white" fontSize="2rem">
          {icon}
        </Text>
        <Text
          fontSize="1.6rem"
          textTransform="capitalize"
          color="base"
          fontWeight="medium"
        >
          {name}
        </Text>
      </HStack>
    </Link>
  );
};

export default NavItem;
