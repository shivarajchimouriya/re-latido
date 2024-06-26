import { VStack } from "@chakra-ui/react";
import ProductListings from "@/features/Homepage/ProductListings";
import { getCookies } from "cookies-next";
import { cookies } from "next/headers";
import { logger } from "@/utils/logger";

export default function Home() {
  const ck: any = getCookies({ cookies });
  let gender;
  if (ck) {
    gender = ck.gender;
    if (gender !== "male" && gender !== "female") {
      gender = "male";
    }
  }
  return (
    <VStack>
      <ProductListings gender={gender} />
    </VStack>
  );
}
