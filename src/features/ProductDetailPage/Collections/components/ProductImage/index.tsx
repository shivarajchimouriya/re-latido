"use client";
import React, { useMemo, useRef, useState } from "react";
import { Box, Flex, HStack, VStack } from "@chakra-ui/react";
import { IProductImageProps } from "./IProductImageProps";
import AppImage from "@/components/AppImage";
import Avatar from "@/components/Avatar";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-creative";

export default function ProductImage({
  primaryImage,
  secondaryImage,
}: IProductImageProps) {
  const searchParams = useSearchParams();
  const lid = searchParams.get("lid");
  const psid = searchParams.get("psid");

  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  let imageIndex = 0;

  const findIndexOfImage = useMemo(() => {
    return secondaryImage.findIndex(
      (leather) => leather.leather_id._id === lid
    );
  }, [lid]);

  const ref = useRef<null | SwiperRef>(null);
  if (lid && psid) {
    imageIndex = findIndexOfImage;
  }

  const images = secondaryImage[imageIndex ? imageIndex : 0]?.secondary_image;

  const handleClick = (index: number) => {
    setSelectedIndex(index);
    ref.current?.swiper.slideTo(index);
  };

  return (
    <VStack pb="2rem" w="full" overflow="hidden">
      {/* <AppImage src={primaryImage} height={500} width={500} alt="product image" /> */}
      <HStack w="full">
        <>
          <Swiper
            ref={ref}
            grabCursor={true}
            effect="creative"
            creativeEffect={{
              prev: {
                shadow: true,
                translate: [0, 0, -400],
              },
              next: {
                translate: ["100%", 0, 0],
              },
            }}
            modules={[EffectCreative]}
            className="mySwiper"
            onSlideChange={(val) => {
              setSelectedIndex(val.activeIndex);
            }}
          >
            {images?.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <Box width={"full"} bg="white">
                  <AppImage
                    src={image}
                    height={300 * 1.5}
                    width={200 * 1.5}
                    style={{ width: "100%" }}
                    alt="product image"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper>
        </>
      </HStack>
      <Flex
        gap={"1.4rem"}
        p={"1rem"}
        width={"100%"}
        height={"100%"}
        overflowX={"scroll"}
        justifyContent={images.length > 5 ? "auto" : "center"}
      >
        <div style={{ display: "flex", gap: "1rem" }}>
          {images?.map((image: string, index: number) => (
            <Box onClick={() => handleClick(index)}>
              <Avatar
                selected={selectedIndex === index}
                alt={`image ${index}`}
                src={image}
                height={20}
                width={20}
              />
            </Box>
          ))}
        </div>
      </Flex>
    </VStack>
  );
}
