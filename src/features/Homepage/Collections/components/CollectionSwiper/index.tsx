"use client";
import { IMockCollection } from "@/data/mock/collection";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import CollectionCard from "../CollectionCard";
import "swiper/css";
import { ICategory } from "@/resources/Category/interface";
import { collectionImages } from "@/constants/images";
import { attachWithS3BaseUrl } from "@/utils/misc";
import { useParams } from "next/navigation";
import { logger } from "@/utils/logger";
interface IProps {
  collection: ICategory[];
}

const CollectionSwiper = ({ collection }: IProps) => {
  const params = useParams();
  const swiperRef = useRef<SwiperRef | null>(null);
  const category = params.id as string;

const [showMask, setShowMask] = useState(true)
useEffect(()=>{

swiperRef.current?.swiper.on("slideChange",(val)=>{
const d=val.isEnd  
setShowMask(d)

});



},[swiperRef.current?.swiper])


  return (
    <Flex
      w="100%"
      m="1rem"
      px="1rem"
      sx={{
        "mask-image":
        showMask? "linear-gradient(to right, transparent 0%, rgb(24, 23, 23) 5%,  rgb(24, 23, 23) 85%, transparent 100%);":""
      }}
    >
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={"auto"}
        className="collection"
        onLoad={({ currentTarget }) => {
          console.log("loaded");
          currentTarget.classList.remove("collection");
        }}
      >
        <SwiperSlide key={"all"}>
          <CollectionCard
            image={collectionImages.latido}
            link={`/`}
            title={"All "}
            isActive={!category}
          />
        </SwiperSlide>

        {collection.map(el => {
          const isActive = el._id === category;
          return (
            <SwiperSlide key={el.title}>
              <CollectionCard
                image={attachWithS3BaseUrl(el.image)}
                link={`/category/${el._id}`}
                title={el.title}
                isActive={isActive}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Flex>
  );
};

export default CollectionSwiper;
