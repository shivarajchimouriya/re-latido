import { VStack } from "@chakra-ui/react";
import ProductListings from "@/features/Homepage/ProductListings";
import { getCookies } from "cookies-next";
import { cookies } from "next/headers";
import { gender as GENDER } from "@/enums/index";
import { getServerCookie } from "@/serverActions";

export default async function Home() {
  // const ck: any = getCookies({ cookies });
  // let gender;
  // if (ck) {
  //   gender = ck.gender;
  //   if (gender !== GENDER.MALE && gender !== GENDER.FEMALE) {
  //     gender = GENDER.MALE;
  //   }
  // }
  const gender = await getServerCookie();
  return (
    <VStack>
      <ProductListings gender={gender} />
    </VStack>
  );
}
