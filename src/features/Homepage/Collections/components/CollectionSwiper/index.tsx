"use client";
import { IMockCollection } from "@/data/mock/collection";
import { Flex } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CollectionCard from "../CollectionCard";
import "swiper/css";

interface IProps {
  collection: IMockCollection[];
}

const CollectionSwiper = ({ collection }: IProps) => {
  return (
    <Flex w="100%" m="1rem" px="1rem">
      <Swiper spaceBetween={25} slidesPerView={"auto"}>
        {collection.map(el => {
          return (
            <SwiperSlide key={el.name}>
              <CollectionCard collection={el} />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default CollectionSwiper;
