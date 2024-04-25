"use client";

import React from "react";
import { TODO } from "../../../../../../global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex } from "@chakra-ui/react";
import SwipeCard from "../SwipeCard";
import 'swiper/css';
import 'swiper/css/free-mode';

import { FreeMode } from 'swiper/modules';

export default function FittingSwiper({ options }: TODO) {
  return (
    <Flex className="parent" w="100%" overflow="hidden" padding={"1rem 0"}>
      <Swiper  width={100} spaceBetween={4} slidesPerView="auto" freeMode={true} modules={[FreeMode]} >
        {options?.map((fit: any, i: number) => {
          return (
            <SwiperSlide key={i}>
              <SwipeCard selectedOne={i === 1 ? true : false} fit={fit} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
