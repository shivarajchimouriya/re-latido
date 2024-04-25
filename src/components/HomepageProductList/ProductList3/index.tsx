"use client";
import ProductCard from "@/components/Cards/ProductCard";
import { IProduct } from "@/data/mock/products";
import { VStack } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface IProps {
  products: IProduct[];
}

const ProductList3 = ({ products }: IProps) => {
  return (
    <Swiper
      spaceBetween={2}
      slidesPerView={1}
      direction="vertical"
      style={{ background: "green", height: "fit-content" }}
    >
      {products.map(el => {
        return (
          <SwiperSlide
            key={el.name}
            style={{ height: "100vh", backgroundColor: "red" }}
          >
            <ProductCard product={el} bg="white" height="100vh" />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductList3;
