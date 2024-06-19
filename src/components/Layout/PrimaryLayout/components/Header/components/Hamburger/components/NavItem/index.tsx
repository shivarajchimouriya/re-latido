import { HStack, StackProps, Text } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
import { IoHomeOutline } from "react-icons/io5";
import { MdOutlinePhone, MdOutlinePolicy } from "react-icons/md";
import { BsInfo } from "react-icons/bs";

interface IProps extends StackProps {
  link: string;
  name: string;
  icon: React.ReactNode;
}

const NavItem = ({ link, name, icon, ...rest }: IProps) => {
  return (
    <Link href={link}>
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
