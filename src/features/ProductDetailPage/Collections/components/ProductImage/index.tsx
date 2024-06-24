"use client";
import React, { useMemo, useState } from "react";
import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  Portal,
  VStack,
} from "@chakra-ui/react";
import { IProductImageProps } from "./IProductImageProps";
import AppImage from "@/components/AppImage";
import Avatar from "@/components/Avatar";
import { useSearchParams } from "next/navigation";
import { Swiper, SwiperRef, SwiperSlide, useSwiper } from "swiper/react";
import { EffectCreative } from "swiper/modules";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

import "swiper/css";
import "swiper/css/effect-creative";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoArrowBackSharp,
  IoArrowForwardOutline,
  IoClose,
} from "react-icons/io5";

export default function ProductImage({ secondaryImage }: IProductImageProps) {
  const searchParams = useSearchParams();
  const lid = searchParams.get("lid");
  const psid = searchParams.get("psid");

  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  let imageIndex = 0;

  const findIndexOfImage = useMemo(() => {
    return secondaryImage.findIndex(
      (leather) => leather.leather_id._id === lid
    );
  }, [lid]);

  if (lid && psid) {
    imageIndex = findIndexOfImage;
  }

  const images =
    secondaryImage[imageIndex ? imageIndex : 0]?.secondary_image || [];
  const otherImages: string[] = images.slice(1) || [];

  const ref = React.useRef<HTMLDivElement | null>(null);

  const onNextClick = () => {
    if (selectedIndex === null) return;
    if (selectedIndex >= images.length - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex((prev) => (prev ? prev + 1 : 0));
    }
  };

  const onPrevClick = () => {
    if (selectedIndex === null) return;
    if (selectedIndex <= 0) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex((prev) => (prev ? prev - 1 : 0));
    }
  };

  return (
    <>
      <VStack pb=".2rem" w="full" overflow="hidden">
        <HStack w="full" h="48dvh">
          <HStack flex="2" h="full" alignItems="center">
            <AppImage
              src={images[0]}
              height={500}
              width={500}
              alt="product image"
              style={{
                objectFit: "contain",
                height: "inherit",
              }}
            />
          </HStack>
          <VStack flex="1" h="full" overflow="scroll">
            {otherImages.map((el, i) => {
              return (
                <Box
                  onClick={() => setSelectedIndex(i)}
                  as={motion.div}
                  layoutId={`${i}`}
                >
                  {" "}
                  <AppImage
                    src={el}
                    height={500}
                    width={500}
                    alt={`product image -${i}`}
                  />
                </Box>
              );
            })}
          </VStack>
          <>
            {/* <Swiper
            ref={ref}
            grabCursor={true}
            effect="creative"
            observer={true}
            observeParents={true}
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
              <SwiperSlide key={image}>
                <Box width="full" minH="80vh" bg="white">
                  <AppImage
                    src={image}
                    height={300 * 1.5}
                    width={1000}
                    alt="product image"
                  />
                </Box>
              </SwiperSlide>
            ))}
          </Swiper> */}
          </>
        </HStack>
        <Flex
          gap={"1.4rem"}
          p={"1rem"}
          width={"100%"}
          height={"100%"}
          overflowX={"scroll"}
          justifyContent={images?.length > 5 ?? 0 ? "auto" : "center"}
          className="product_images"
        >
          {/* <div
          style={{ display: "flex", gap: "1rem" }}
          className="product_images"
        >
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
        </div> */}
        </Flex>
      </VStack>
      <AnimatePresence>
        {selectedIndex !== null && (
          <Portal>
            <Box
              as={motion.div}
              position="fixed"
              inset="0"
              h="100vh"
              display="flex"
              justifyContent="center"
              alignItems="center"
              zIndex={100000}
              w="full"
              background="rgba(255,255,255,.8)"
              backdropFilter="auto"
              backdropBlur="5px"
              layoutId={`${selectedIndex}`}
            >
              <IconButton
                aria-label="close"
                icon={<IoClose />}
                zIndex={100000}
                onClick={() => setSelectedIndex(null)}
                position="absolute"
                height="4rem"
                w="4rem"
                top="2rem"
                right="2rem"
                backdropFilter="auto"
                backdropBlur="5px"
                rounded="full"
                shadow="md"
                fontSize="1.5rem"
                background="rgba(255,255,255,0.5)"
              />

              <TransformWrapper>
                <TransformComponent
                  wrapperStyle={{ maxHeight: "100vh", height: "100%" }}
                  contentStyle={{ height: "100%" }}
                >
                  <AppImage
                    src={otherImages[selectedIndex]}
                    alt="product image"
                    height={500}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain",
                    }}
                    width={500}
                  />
                </TransformComponent>
              </TransformWrapper>

              <Flex
                position="absolute"
                gap="3rem"
                bottom="10rem"
                left="50%"
                transform="translateX(-50%)"
                fontSize="2rem"
                height="4rem"
                zIndex={10000}
              >
                <IconButton
                  icon={<IoArrowBackSharp />}
                  aria-label="previous"
                  p="1rem"
                  rounded="full"
                  backdropFilter="auto"
                  backdropBlur="4px"
                  height="4rem"
                  width="4rem"
                  shadow="md"
                  onClick={onPrevClick}
                />
                <IconButton
                  icon={<IoArrowForwardOutline />}
                  aria-label="right"
                  p="1rem"
                  rounded="full"
                  backdropFilter="auto"
                  backdropBlur="4px"
                  shadow="md"
                  onClick={onNextClick}
                  height="4rem"
                  width="4rem"
                />
              </Flex>
            </Box>
          </Portal>
        )}
      </AnimatePresence>
    </>
  );
}
