"use client";
import { Center, StackProps, Text, VStack } from "@chakra-ui/react";
import React from "react";
import AnimatedCircle from "../AnimatedCircle";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface IProps extends StackProps {
  isActive?: boolean;
  image: string;
  link: string;
  title: string;
}

const CollectionCard = ({ isActive, image, link, title, ...rest }: IProps) => {
  const pathName = usePathname();
  const onCardClick = () => {
    const key = pathName + "_depth";
    sessionStorage.setItem(key, "0");
  };

  return (
    <Link href={`${link}`}>
      <VStack
        justify="center"
        alignItems="center"
        onClick={onCardClick}
        {...rest}
      >
        <VStack
          width="6.1rem"
          height="6.1rem"
          rounded="100%"
          justify="center"
          align="center"
          overflow="hidden"
          position="relative"
        >
          <AnimatedCircle isActive={isActive || false} />
          <Center height="90%" width="90%" rounded="100%" overflow="hidden">
            <Image
              alt={` category-${title}`}
              src={image}
              height={100}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
              width={100}
            />
          </Center>
        </VStack>

        <Text
          textTransform="uppercase"
          fontSize="1.2rem"
          transitionDuration=".4s"
          fontWeight={isActive ? "bold" : "medium"}
        >
          {title}
        </Text>
      </VStack>
    </Link>
  );
};

export default CollectionCard;
