import CardLoader from "@/components/CardLoader";
import dynamic from "next/dynamic";
// const ProductListings = dynamic(
//   () => import("@/features/Homepage/ProductListings"),
//   {
//     ssr: true,

//     loading: () => <CardLoader />
//   }
// );
import { Box, VStack } from "@chakra-ui/react";
import ProductListings from "@/features/Homepage/ProductListings";

export default function Home() {
  return (
    <VStack>
      <ProductListings />
    </VStack>
  );
}
