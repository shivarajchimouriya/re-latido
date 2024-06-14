"use client";
import {
  Box,
  Button,
  Center,
  Flex,
  HStack,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  VStack,
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
import { useRouter, useSearchParams } from "next/navigation";
import { useCategories } from "@/hooks/server/useCategories";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";

interface IProps {
  onClose: () => void;
}

const FilterBox = ({ onClose }: IProps) => {
  const { data } = useCategories();
  const categories = data || [];
  const sliderLenth = Array.from({ length: Math.ceil(categories?.length / 2) });
  const searchParams = useSearchParams();
  const activeCategory = searchParams.get("collections");
  const lowerLimit = Number(searchParams.get("priceLowerLimit")) ?? 0;
  const upperLimit = Number(searchParams.get("priceUpperLimit")) || 90000;
  const searchedGender = searchParams.get("gender") as "male" | "female";
  const router = useRouter();
  const [rangeValues, setRangeValues] = useState([lowerLimit, upperLimit]);
  const [activeCat, setActiveCat] = useState(activeCategory || "");
  const storedGender = localStorage.getItem("gender") as
    | "male"
    | "female"
    | null;

  const [SelectedGender, setSelectedGender] = useState<"male" | "female">(
    searchedGender ?? storedGender ?? "female"
  );

  const handleCatClick = (catName: string) => {
    setActiveCat(catName);
  };

  const genders: { gender: "male" | "female"; icon: ReactElement }[] = [
    {
      gender: "male",
      icon: <BiMaleSign />,
    },
    {
      gender: "female",
      icon: <BiFemaleSign />,
    },
  ];

  const handleApply = () => {
    const data: IProductFilterReq = {
      gender: SelectedGender,
      priceLowerLimit: `${rangeValues[0]}` || "0",
      priceUpperLimit: `${rangeValues[1]}` || "90000",
      collections: activeCat,
      limit: 1000,
      page: 1,
    };
    const queryString = Object.entries(data)
      .map(
        ([key, value]) =>
          `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
      )
      .join("&");

    router.push(`/filter?${queryString}`);
    onClose();
  };

  return (
    <VStack gap=".3rem" w="full" px="1rem" zIndex={1000}>
      <Link href="/search" style={{ width: "100%" }}>
        <Flex
          as={motion.div}
          bg="rgba(0,0,0,.3)"
          layoutId="search_bar"
          onClick={onClose}
          mt="1rem"
          justify="space-between"
          color="rgba(255,255,255,0.6)"
          alignItems="center"
          w="full"
          rounded="full"
          h="5rem"
        >
          <Text px="3rem"> search here </Text>
          <Box color="white" mr="3rem">
            {" "}
            <IoSearchOutline />{" "}
          </Box>
        </Flex>
      </Link>
      <VStack gap="2rem" w="100%" overflow="auto">
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
              bulletActiveClass: styles.bullet_active,
            }}
            modules={[Pagination]}
            style={{ maxWidth: "53rem", height: "120%" }}
          >
            {sliderLenth.map((slide, i) => {
              const articlesToShow = categories.slice(i + i, i + i + 2);
              return (
                <SwiperSlide key={i}>
                  <VStack w="fit-content" minW="8rem" maxW="15rem" gap="1rem">
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
                            px="1rem"
                            color={isActive ? "black" : "white"}
                            position="relative"
                            textTransform="capitalize"
                            fontWeight={isActive ? "bold" : "medium"}
                            border={".1px  solid rgba(255,255,255,.4)"}
                          >
                            <Text> {el.title} </Text>
                          </Center>
                          {isActive && (
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
                            />
                          )}
                        </Box>
                      );
                    })}
                  </VStack>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Box>
        <Box w="90%" mt="3rem" as={motion.div}>
          <RangeSlider
            onChange={(val) => {
              setRangeValues(val);
            }}
            defaultValue={[rangeValues[0], rangeValues[1]]}
            min={0}
            max={90000}
            step={1000}
            h="auto"
          >
            <RangeSliderTrack bg="rgba(255,255,255,0.3)" h=".2rem">
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
              staggerChildren: 0.3,
            },
          }}
        >
          {genders.map((el) => {
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

                {isSelected && (
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
                  />
                )}
              </Box>
            );
          })}
        </HStack>

        <HStack w="100%" color="white" mt="3rem">
          <Button
            p="1.5rem"
            w="100%"
            px="2rem"
            bg="rgba(0,0,0,0.1)"
            color="white"
            fontSize="1.4rem"
            rounded="full"
            gap="1rem"
            onClick={onClose}
          >
            {" "}
            cancel{" "}
          </Button>
          <Button
            p="1.5rem"
            w="100%"
            px="2rem"
            bg="white"
            color="black"
            fontSize="1.4rem"
            rounded="full"
            gap="1rem"
            onClick={handleApply}
            rightIcon={<MdOutlineDone fontSize="1.5rem" color="green.500" />}
          >
            {" "}
            Apply{" "}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default FilterBox;

// https://isydwbl5r3.execute-api.ap-south-1.amazonaws.com/prod/mobile_home?page=1&limit=1&gender=male&priceLowerLimit=0&priceUpperLimit=10000
// https://isydwbl5r3.execute-api.ap-south-1.amazonaws.com/prod/mobile_home?gender=male&priceLowerLimit=0&priceUpperLimit=89000&collections=637c9f9abed49a0008ce0dcb?page=1&limit=10000
// https://isydwbl5r3.execute-api.ap-south-1.amazonaws.com/prod/client_product?gender=female&priceLowerLimit=21000&priceUpperLimit=64000&collections=637de6398ed77c00088b4df5
