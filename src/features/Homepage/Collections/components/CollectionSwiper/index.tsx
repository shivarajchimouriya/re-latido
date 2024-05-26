"use client";
import { IMockCollection } from "@/data/mock/collection";
import { Flex } from "@chakra-ui/react";
import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import CollectionCard from "../CollectionCard";
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

swiperRef.current?.swiper.on("reachEnd",(val)=>{
  logger.log("val",val)

setShowMask(()=>true)

});



},[swiperRef.current?.swiper])


  return (
    <Flex
      w="100%"
      m="1rem"
      gap='2rem'
      px=".5rem"
      overflow='auto'
      sx={{
        "mask-image":
        !showMask? "linear-gradient(to right, transparent 0%, rgb(24, 23, 23) 0%,  rgb(24, 23, 23) 85%, transparent 100%);":""
      }}
    >
      <div style={{display:"flex",overflow:"auto",gap:"2rem"}}  className="collection_container" >
   
          <CollectionCard
            image={collectionImages.latido}
            link={`/`}
            title={"All "}
            isActive={!category}
          />

        {collection.map(el => {
          const isActive = el._id === category;
          return (
              <CollectionCard
                image={attachWithS3BaseUrl(el.image)}
                link={`/category/${el._id}`}
                title={el.title}
                isActive={isActive}
              />
          );
        })}
        </div>
    </Flex>
  );
};

export default CollectionSwiper;
