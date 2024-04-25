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
    <Flex
      w="100%"
      m="1rem"
      px="1rem"
      sx={{
        "mask-image":
          "linear-gradient(to right, transparent 0%, rgb(24, 23, 23) 5%,  rgb(24, 23, 23) 85%, transparent 100%);"
      }}
    >
      <Swiper
        spaceBetween={20}
        slidesPerView={"auto"}
        className="collection"
        onLoad={({ currentTarget }) => {
          console.log("loaded");
          currentTarget.classList.remove("collection");
        }}
      >
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
