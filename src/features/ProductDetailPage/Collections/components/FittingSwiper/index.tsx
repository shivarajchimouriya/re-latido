"use client";

import React from "react";
import { TODO } from "../../../../../../global";
import { Swiper, SwiperSlide } from "swiper/react";
import { Flex } from "@chakra-ui/react";
import SwipeCard from "../SwipeCard";
import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode } from "swiper/modules";
import { logger } from "@/utils/logger";

export interface IFit {
  back: string;
  front: string;
  label: string;
}

export default function FittingSwiper({
  options,
  onChange,
  selectedFit,
}: TODO) {
  return (
    <Flex className="parent" w="auto" overflow="hidden" padding={"1rem 0"}>
      <Swiper
        spaceBetween={4}
        slidesPerView="auto"
        freeMode={true}
        modules={[FreeMode]}
        style={{
          width: "fit-content",
        }}
      >
        {options?.map((fit: IFit, i: number) => {
          return (
            <SwiperSlide
              key={i}
              style={{
                width: "fit-content",
              }}
            >
              <div
                style={{
                  paddingLeft: i === 0 ? "20px" : 0,
                }}
                onClick={() => onChange(fit.label)}
              >
                <SwipeCard
                  selectedIdx={selectedFit === fit.label ? true : false}
                  fit={fit}
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
}
