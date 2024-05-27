import CardLoader from "@/components/CardLoader";
import dynamic from "next/dynamic";
const ProductListings = dynamic(
  () => import("@/features/Homepage/ProductListings"),
  {
    ssr: true,

    loading: () => <CardLoader />
  }
);
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack h="full">
      <ProductListings />
    </VStack>
  );
}
