"use client";
import { IMockCollection } from "@/data/mock/collection";
import { Flex } from "@chakra-ui/react";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import CollectionCard from "../CollectionCard";
import "swiper/css";
import { ICategory } from "@/resources/Category/interface";
interface IProps {
  collection: ICategory[];
}

const CollectionSwiper = ({ collection }: IProps) => {
  const [activeCategory, setactiveCategory] = useState(collection[0]?._id);

  const handleCatgoryClick = (category: string) => {
    setactiveCategory(category);
  };

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
          const isActive = el._id === activeCategory;
          return (
            <SwiperSlide key={el.title}>
              <CollectionCard
                collection={el}
                isActive={isActive}
                onClick={() => handleCatgoryClick(el._id)}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default CollectionSwiper;
