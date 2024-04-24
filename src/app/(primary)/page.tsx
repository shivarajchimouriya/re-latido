import Collections from "@/features/Homepage/Collections";
import { Center, Text, VStack } from "@chakra-ui/react";
import Image from "next/image";

export default function Home() {
  return (
    <VStack h="full">
      <Collections />
    </VStack>
  );
}
