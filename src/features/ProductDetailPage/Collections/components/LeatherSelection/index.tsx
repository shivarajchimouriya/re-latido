"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, Grid, Text, VStack } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/resources/Product/interface";
import Leathercapsule from "../Leathercapsule";
import { leatherImage } from "@/constants/images";
import { env } from "@/config/environment";
import { AnimatePresence, motion } from "framer-motion";

interface IProps {
  productDetail: IProduct;
}

const baseUrl = env.S3_BASE_URL;
export default function LeatherSelection({ productDetail }: IProps) {
  const router = useRouter();

  const searchParams = useSearchParams();
  const lid = searchParams.get("lid");
  const psid = searchParams.get("psid");
  const findIndex = () =>
    productDetail.product_specification.findIndex(
      (val: any) => val?._id === psid
    );

  const selectedLeatherIndex = findIndex();

  const onChange = (leatherId: string, productSpecsId: string) => {
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

  const [activeLeather, setActiveLeather] = useState<number>(
    selectedLeatherIndex === -1 ? 0 : selectedLeatherIndex
  );

  const onLeatherSelect = (idx: number) => {
    setActiveLeather(idx);
    onChange(
      productDetail.product_specification[idx].leather_id?._id,
      productDetail.product_specification[idx]._id
    );
  };

  useEffect(() => {
    onLeatherSelect(0);
  }, []);

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
        select leather
      </Text>

      <Grid templateColumns="repeat(4,1fr)" gap="1rem" my="2rem">
        {productDetail.product_specification.map((el, i) => {
          const isActive = i === activeLeather;
          return (
            <Box position="relative">
              <Leathercapsule
                isActive={isActive}
                onLeatherSelect={onLeatherSelect}
                id={i}
                image={baseUrl + el?.leather_id?.ball_image || leatherImage}
                name={el.leather_id.item_name}
              />
              <AnimatePresence>
                {isActive && (
                  <Box
                    as={motion.div}
                    layoutId="leather"
                    position="absolute"
                    w="100%"
                    h="100%"
                    inset="0"
                    rounded="md"
                    outline="1px solid gray"
                    isolation="isolate"
                    bgColor="gray.200"
                  />
                )}
              </AnimatePresence>
            </Box>
          );
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
