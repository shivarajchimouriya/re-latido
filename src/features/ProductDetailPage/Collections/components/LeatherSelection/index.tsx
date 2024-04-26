"use client"
import AppImage from "@/components/AppImage";
import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import React from "react";
import data from "@/data/product/productDetailResponse"
import environment from "@/config/environment";
import { appColor } from "@/theme/foundations/colors";
import { Swiper, SwiperSlide } from "swiper/react";
import Carousel3D from "../Carousel3D";

interface IProps {
  urlPrefix: string;
}
export default function LeatherSelection({
  urlPrefix,
}: IProps) {
  const onChange = (values: any) => {
  };
  return (
    <Box width="100%">
      <Text textTransform="uppercase" fontWeight="medium" fontSize={"1.4rem"} color={appColor.base}>
        Select Your Leather
      </Text>
      <Swiper slidesPerView="auto" spaceBetween={25}>

      <HStack overflow="X-auto" width="100%" >
        {data?.productDetail?.product_specification &&
            data?.productDetail?.product_specification?.length > 0 && (
            <Carousel3D
              onChange={onChange}
              images={data?.productDetail?.product_specification?.map(
                (ps: any) => {
                  return {
                    title: ps?.leather_id?.item_name,
                    image: urlPrefix + (ps?.leather_id?.ball_image ?
                        ps?.leather_id?.ball_image : ps?.leather_id?.icon ? ps?.leather_id?.icon :
                        'public/inventory/category/MicrosoftTeams-image-(17)1692774476.png'),
                    product_specification_id: ps?._id,
                    leather_id: ps?.leather_id?._id,
                    hardware: ps?.default_hardware,
                    lining: ps?.default_lining,
                  };
                },
              )}
            />
          )}
      </HStack>
          </Swiper>
    </Box>
  );
}
