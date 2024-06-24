"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Flex, Grid, HStack, Text, VStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { appColor } from "@/theme/foundations/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel3D from "../Carousel3D";
import { IProduct } from "@/resources/Product/interface";
import Leathercapsule from "../Leathercapsule";
import { collectionImages, leatherImage } from "@/constants/images";

interface IProps {
  urlPrefix: string;
  productDetail: IProduct;
}
interface ILeatherChange {
  hardware: string;
  leather_id: string;
  lining: string;
  name: string;
  product_specification_id: string;
}
export default function LeatherSelection({ urlPrefix, productDetail }: IProps) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const lid = searchParams.get("lid");
  const psid = searchParams.get("psid");
  const findIndex = () =>
    productDetail.product_specification.findIndex(
      (val: any) => val?._id === psid
    );

  const selectedLeatherIndex = findIndex();

  const onChange = (values: ILeatherChange) => {
    const leatherId = values.leather_id;
    const productSpecsId = values.product_specification_id;

    if (lid === leatherId && psid === productSpecsId) {
      return null;
    }
    const changeSearchParam = new URLSearchParams(searchParams.toString());

    changeSearchParam.set("lid", leatherId);
    changeSearchParam.set("psid", productSpecsId);
    if (!leatherId || !productSpecsId) {
      router.replace(`?${changeSearchParam.toString()}`, { scroll: true });
    } else {
      router.replace(`?${changeSearchParam.toString()}`, { scroll: true });
    }
  };


const [activeLeather, setActiveLeather] = useState<number>(0)


const onLeatherSelect=(idx:number)=>{


setActiveLeather(idx)

}

  return (
    <VStack w="full" p="1rem">
      <Text
        as="h2"
        textAlign="left"
        w="full"
        fontWeight="bold"
        textTransform="capitalize"
        fontSize="medium"
      >
        {" "}
        select leather{" "}
      </Text>

      <Grid templateColumns="repeat(5,1fr)" gap="1rem">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((el,i) => {
          return <Leathercapsule  activeLeather={activeLeather} onLeatherSelect={onLeatherSelect}  id={i} image={leatherImage} name="latido" />;
        })}
      </Grid>
    </VStack>
  );
  // return (
  //   <Box width="100%">
  //     <Text
  //       as="h3"
  //       textTransform="uppercase"
  //       fontWeight="medium"
  //       fontSize={"1.4rem"}
  //       color={appColor.base}
  //       mx={8}
  //     >
  //       Select Your Leather
  //     </Text>
  //     <Swiper slidesPerView="auto" spaceBetween={25}>
  //       <HStack overflow="X-auto" width="100%">
  //         {productDetail?.product_specification &&
  //           productDetail?.product_specification?.length > 0 && (
  //             <Carousel3D
  //               onChange={onChange}
  //               selected={
  //                 selectedLeatherIndex !== -1 ? selectedLeatherIndex : 0
  //               }
  //               images={productDetail?.product_specification?.map((ps: any) => {
  //                 return {
  //                   title: ps?.leather_id?.item_name,
  //                   image:
  //                     urlPrefix +
  //                     (ps?.leather_id?.ball_image
  //                       ? ps?.leather_id?.ball_image
  //                       : ps?.leather_id?.icon
  //                       ? ps?.leather_id?.icon
  //                       : "public/inventory/category/MicrosoftTeams-image-(17)1692774476.png"),
  //                   product_specification_id: ps?._id,
  //                   leather_id: ps?.leather_id?._id,
  //                   hardware: ps?.default_hardware,
  //                   lining: ps?.default_lining,
  //                 };
  //               })}
  //             />
  //           )}
  //       </HStack>
  //     </Swiper>
  //   </Box>
  // );
}
