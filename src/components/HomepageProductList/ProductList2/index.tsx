"use client";
import ProductCard from "@/components/Cards/ProductCard";
import { IProduct } from "@/data/mock/products";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube } from "swiper/modules";
import "swiper/css/effect-cube";
import { VStack } from "@chakra-ui/react";

interface IProps {
  products: IProduct[];
}
const ProductList2 = ({ products }: IProps) => {
  return (
    <VStack justify="center" align="center">
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        effect="cube"
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94
        }}
        modules={[EffectCube]}
      >
        {products.map(el => {
          return (
            <SwiperSlide key={el.name}>
              <ProductCard product={el} bg="white" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </VStack>
  );
};

export default ProductList2;
