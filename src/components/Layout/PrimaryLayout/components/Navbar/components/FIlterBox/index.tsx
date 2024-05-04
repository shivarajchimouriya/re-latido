"use client";
import AppImage from "@/components/AppImage";
import { mockCollections } from "@/data/mock/collection";
import {
  Box,
  Button,
  Center,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack
} from "@chakra-ui/react";
import styles from "./filterbox.module.css";

import React, { ReactElement, useState } from "react";
import { Grid, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import { PiCurrencyDollarLight } from "react-icons/pi";
import { motion } from "framer-motion";
import GenderCard from "../GenderCard";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { MdBusAlert, MdDoneOutline, MdOutlineDone } from "react-icons/md";
import { useForm } from "react-hook-form";
import { logger } from "@/utils/logger";
import { IProductFilterReq } from "@/resources/Product/interface";
import { useRouter } from "next/navigation";
import { useCategories } from "@/hooks/server/useCategories";

interface IProps {
  onClose: () => void;
}

const FilterBox = ({ onClose }: IProps) => {
  const {data}=useCategories();
  const categories=data || [];
  const sliderLenth = Array.from({ length: Math.ceil(categories?.length / 2) });
const router=useRouter()
  const [rangeValues, setRangeValues] = useState([0, 90000]);
  const [activeCat, setActiveCat] = useState("");
  const storedGender = localStorage.getItem("gender") as
    | "male"
    | "female"
    | null;

  const [SelectedGender, setSelectedGender] = useState<"male" | "female">(
    storedGender ?? "female"
  );

  const handleCatClick = (catName: string) => {
    setActiveCat(catName);
  };

  const genders: { gender: "male" | "female"; icon: ReactElement }[] = [
    {
      gender: "male",
      icon: <BiMaleSign />
    },
    {
      gender: "female",
      icon: <BiFemaleSign />
    }
  ];


const handleApply=()=>{


const data:IProductFilterReq={
  gender:SelectedGender,
  priceLowerLimit:`${rangeValues[0]}` || '0',
  priceUpperLimit:`${rangeValues[1]}` || '90000',
  collections:activeCat
}
const queryString = Object.entries(data)
  .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
  .join('&');


router.push(`/filter?${queryString}`);
onClose()
}

  return (
    <VStack gap="2rem" w="100%" px="2rem">
      <Box w="full" position="relative" color="white" h="110%" py="2rem">
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={10}
          pagination={{
            clickable: true,
            type: "bullets",
            horizontalClass: styles.bullet_container,
            bulletClass: styles.bullet,
            currentClass: styles.current_bullet,
            bulletActiveClass: styles.bullet_active
          }}
          modules={[Pagination]}
          style={{ maxWidth: "33rem", height: "120%" }}
        >
          {sliderLenth.map((slide, i) => {
            const articlesToShow = categories.slice(i + i, i + i + 2);
            return (
              <SwiperSlide key={i}>
                <VStack w="8rem" gap="1rem">
                  {articlesToShow.map((el, j) => {
                    const isActive = activeCat === el._id;
                    return (
                      <Box position="relative" w="100%">
                        <Center
                          onClick={() => handleCatClick(el._id)}
                          bg={"rgba(0,0,0,0.1)"}
                          transitionDuration=".4s"
                          w="100%"
                          h="4rem"
                          rounded="3rem"
                          color={isActive ? "black" : "white"}
                          position="relative"
                          textTransform="capitalize"
                          fontWeight={isActive ? "bold" : "medium"}
                          border={".1px  solid rgba(255,255,255,.4)"}
                        >
                          {el.title}
                        </Center>
                        {isActive &&
                          <Box
                            as={motion.div}
                            position="absolute"
                            layoutId="cat_indicator"
                            inset="0"
                            w="100%"
                            h="100%"
                            bg="rgba(255,255,255,0.9)"
                            isolation="isolate"
                            rounded="3rem"
                            zIndex={-10}
                            p=".2rem"
                          />}
                      </Box>
                    );
                  })}
                </VStack>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Box>
      <Box w="90%" mt="3rem"   as={motion.div}>
        <RangeSlider
          onChange={val => {
            setRangeValues(val);
          }}
          defaultValue={[0, 90000]}
          min={0}
          max={90000}
          step={1000}
          h="auto"
        >
          <RangeSliderTrack bg="rgba(0,0,0,0.1)" h=".2rem">
            <RangeSliderFilledTrack bg="white" h=".2rem" />
          </RangeSliderTrack>
          <RangeSliderThumb
            boxSize={35}
            rounded="100%"
            top="0rem"
            index={0}
            bg="white"
          >
            <Box
              position="absolute"
              top="-3rem"
              p=".3rem"
              px=".7rem"
              rounded="3rem"
              bg="rgba(0,0,0,0.7)"
              backdropFilter="auto"
              color="white"
              backdropBlur="10px"
            >
              {Math.floor(rangeValues[0] / 1000)}k
            </Box>

            <Center h="100%" color="black">
              <PiCurrencyDollarLight />
            </Center>
          </RangeSliderThumb>
          <RangeSliderThumb
            boxSize={35}
            index={1}
            defaultValue={90000}
            rounded="100%"
            top="0"
            bg="white"
          >
            <Box
              position="absolute"
              top="-3rem"
              p=".3rem"
              px=".7rem"
              rounded="3rem"
              bg="rgba(0,0,0,0.7)"
              backdropFilter="auto"
              color="white"
              backdropBlur="10px"
            >
              {Math.floor(rangeValues[1] / 1000)}k
            </Box>

            <Center h="100%" color="black">
              <PiCurrencyDollarLight />
            </Center>
          </RangeSliderThumb>
        </RangeSlider>
      </Box>

      <HStack
        fontSize="2rem"
        color="white"
        gap="2rem"
        as={motion.div}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            staggerChildren: 0.3
          }
        }}
      >
        {genders.map(el => {
          const isSelected = el.gender === SelectedGender;

          return (
            <Box position="relative" as={motion.div}>
              <GenderCard
                gender={el.gender}
                rounded="5rem"
                border={".1px  solid rgba(255,255,255,.4)"}
                onClick={() => setSelectedGender(el.gender)}
                color={isSelected ? "black" : "white"}
                transitionDuration={".4s"}
                icon={el.icon}
                fontWeight={isSelected ? "bold" : "medium"}
              />

              {isSelected &&
                <Box
                  as={motion.div}
                  layoutId="gender_indicator"
                  position="absolute"
                  w="100%"
                  h="100%"
                  inset="0"
                  rounded="5rem"
                  bg="rgba(255,255,255,0.9)"
                  isolation="isolate"
                  zIndex={-10}
                />}
            </Box>
          );
        })}
      </HStack>

      <HStack w="100%" color="white" mt="2rem">
        <Button
          p="2rem"
          w="100%"
          px="2rem"
          bg="white"
          color="black"
          fontSize="1.4rem"
          rounded="4rem"
          gap="1rem"
          onClick={handleApply}
          rightIcon={<MdOutlineDone fontSize="1.5rem" />}
        >
          {" "}Apply{" "}
        </Button>
        <Button w="100%" h="100%" onClick={onClose}>
          {" "}cancel{" "}
        </Button>
      </HStack>
    </VStack>
  );
};

export default FilterBox;
