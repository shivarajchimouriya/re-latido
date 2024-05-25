import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import AppImage from "../AppImage";

interface IImage {
  url: string;
  title: string;
}
interface IProps {
  images: IImage[];
}

const ProductSlider = ({ images }: IProps) => {
  return (
    <Swiper>
      {images.map(el => {
        return (
          <SwiperSlide>
            <AppImage
              alt={el.title}
              src={el.url}
              height={1000}
              width={1000}
              loading="lazy"
              // quality={100}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
