"use client";
import React, { useEffect, useMemo, useState } from "react";
import {
  Box,
  Flex,
  HStack,
  IconButton,
  Portal,
  VStack,
  useDisclosure
} from "@chakra-ui/react";
import { IProductImageProps } from "./IProductImageProps";
import AppImage from "@/components/AppImage";
import { useSearchParams } from "next/navigation";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import styles from "./productImage.module.css";
import "swiper/css";
import "swiper/css/pagination";

import "swiper/css/effect-creative";
import { AnimatePresence, motion } from "framer-motion";
import {
  IoArrowBackSharp,
  IoArrowForwardOutline,
  IoClose,
  IoMoonOutline
} from "react-icons/io5";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { EffectCreative, Pagination } from "swiper/modules";
import { closestIndexTo } from "date-fns";
import { useActiveLeather } from "@/features/ProductDetailPage/Context/LeatherContext";
import Image from "next/image";
import { CiLight } from "react-icons/ci";
import { BsFullscreen } from "react-icons/bs";
import { logger } from "@/utils/logger";

export default function ProductImage({ secondaryImage }: IProductImageProps) {
  const leather = useActiveLeather();
  const lid = leather?.lid;
  const psid = leather?.psid;

  const [selectedIndex, setSelectedIndex] = useState<null | number>(null);

  const [imageIndex, setImageIndex] = useState(0);

  const findIndexOfImage = useMemo(() => {
    return secondaryImage.findIndex(
      (leather) => leather.leather_id._id === lid
    );
  }, [lid]);

  useEffect(() => {
    if (lid && psid) {
      setImageIndex(findIndexOfImage);
    }
  }, [lid]);

  const images =
    secondaryImage[imageIndex ? imageIndex : 0]?.secondary_image || [];
  const ref = React.useRef<SwiperRef | null>(null);

  const onNextClick = () => {
    if (selectedIndex === null) return;
    ref.current?.swiper.slideNext();

    setSelectedIndex((prev) => {
      if (prev === null) return 0;
      return prev >= images.length - 1 ? 0 : prev + 1;
    });
  };

  const onPrevClick = () => {
    if (selectedIndex === null) return;
    ref.current?.swiper.slidePrev();

    setSelectedIndex((prev) => {
      if (prev === null) return images.length - 1;
      return prev <= 0 ? images.length - 1 : prev - 1;
    });
  };
  const isDarkMode = leather?.leatherMode === "dark";
  const appMode = leather?.leatherMode;
  const bg =
    appMode === "dark"
      ? "radial-gradient(circle at center, #1a1a1a 0%, #141414 50%, #0a0a0a 100%)"
      : "radial-gradient(circle at center, white 0%, white 50%, white 100%)";

  return (
    <>
     <VStack
        h="63vh"
        pb=".2rem"
        w="full"
        overflow="hidden"
        position="relative"
      >
      <AnimatePresence>
        {isDarkMode ? (
          <IconButton
            key={`${isDarkMode}`}
            as={motion.button}
            zIndex={10000}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            fontSize="1.8rem"
            icon={<CiLight />}
            aria-label="toggle"
            position="absolute"
            top="0"
            color={isDarkMode ? "white" : "black"}
            p="1rem"
            left="1.5rem"
            onClick={(e) => {
              e.stopPropagation();

              leather?.toggleLeatherMode();
            }}
          />
        ) : (
          <IconButton
            zIndex={10000}
            key={`${isDarkMode}`}
            as={motion.button}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            fontSize="1.8rem"
            icon={<IoMoonOutline />}
            aria-label="toggle"
            position="absolute"
            p="1rem"
            color={isDarkMode ? "white" : "black"}
            top="0"
            left="1.5rem"
            onClick={(e) => {
              e.stopPropagation();
              leather?.toggleLeatherMode();
            }}
          />
        )}
      </AnimatePresence>

      <IconButton
        as={motion.div}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0 }}
        fontSize="1.7rem"
        zIndex={10000}
        color={isDarkMode ? "white" : "black"}
        icon={<BsFullscreen />}
        aria-label="full screen"
        position="absolute"
        top="0"
        p="1rem"
        right="1.5rem"
        onClick={() => {
          const currentIdx = ref.current?.swiper.activeIndex;
          setSelectedIndex(currentIdx ?? 0);
        }}
      />
      {secondaryImage.map((el) => {
        const isActive = el.leather_id._id === lid;

        return (
          <Swiper
            ref={ref}
            loop
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: styles.bul,
              bulletActiveClass: styles.active_bul,
              horizontalClass: styles.hor
            }}
            modules={[Pagination]}
            // modules={[EffectCreative]}
            // className="mySwiper"
            onSlideChange={(val) => {
              // setSelectedIndex(val.activeIndex);
            }}
            style={{ height: "100%", display: isActive ? "block" : "none" }}
          >
            {el?.secondary_image?.map((image: string, index: number) => (
              <SwiperSlide key={image} style={{ width: "100%" }}>
                <img
                  src={image}
                  onClick={() => setSelectedIndex(index)}
                  height={800}
                  width={600}
                  alt="product image"
                  loading="eager"
                  style={{
                    objectFit: "contain",
                    width: "100%",
                    height: "100%"
                  }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        );
      })}
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
              bgGradient={bg}
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
                    src={images?.[selectedIndex]}
                    alt="product image"
                    height={500}
                    style={{
                      height: "100%",
                      width: "100%",
                      objectFit: "contain"
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
                  bgColor="white"
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
                  bgColor="white"
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
