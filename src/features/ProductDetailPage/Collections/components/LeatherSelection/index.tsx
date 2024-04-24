"use client"
import AppImage from "@/components/AppImage";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import data from "@/data/product/productDetailResponse"
import environment from "@/config/environment";
import { appColor } from "@/theme/foundations/colors";
import { Swiper, SwiperSlide } from "swiper/react";

export default function LeatherSelection({
  response,
  // onChange,
}: any) {
  return (
    <Box width="100%">
      <Text textTransform="uppercase" fontWeight="medium" fontSize={"1.4rem"} color={appColor.base}>
        Select Your Leather
      </Text>
      <Swiper slidesPerView="auto" spaceBetween={25}>

      <HStack overflow="X-auto" width="100%" >
        {data?.productDetail?.product_specification &&
          data?.productDetail?.product_specification?.length > 0 && (
            <Box >
              {data?.productDetail?.product_specification?.map(
                (ps: any) => {
                  return (
                    <SwiperSlide>

                    <AppImage
                      src={`${environment.client_bucket_url}${ps?.leather_id?.icon}`}
                      alt={ps?.leather_id?.item_name}
                      height={200}
                      width={200}
                      />
                      </SwiperSlide>
                  );
                }
              )}
            </Box>
          )}
      </HStack>
          </Swiper>
    </Box>
  );
}
