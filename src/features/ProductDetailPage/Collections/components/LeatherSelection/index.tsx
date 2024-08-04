"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { Box, VStack, useDisclosure } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { IProduct } from "@/resources/Product/interface";
import Leathercapsule from "../Leathercapsule";
import { leatherImage } from "@/constants/images";
import { env } from "@/config/environment";

import "swiper/css/effect-coverflow";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow, FreeMode } from "swiper/modules";
import { useActiveLeather } from "@/features/ProductDetailPage/Context/LeatherContext";
import LeatherName from "../LeatherName";
import LeatherModalblog from "../LeatherModalBlog";
interface IProps {
  productDetail: IProduct;
}

const baseUrl = env.S3_BASE_URL;
export default function LeatherSelection({ productDetail }: IProps) {
  const router = useRouter();
  const leather = useActiveLeather();

  const searchParams = useSearchParams();
  const findIndex = () =>
    productDetail.product_specification.findIndex((val: any) => {
      if (leather?.psid) {
        return val?._id === leather?.psid;
      }
    });

  const selectedLeatherIndex = findIndex();

  const onChange = (leatherId: string, productSpecsId: string) => {
    if (leather?.lid === leatherId && leather?.psid === productSpecsId) {
      return null;
    }

    const changeSearchParam = new URLSearchParams(searchParams.toString());

    changeSearchParam.set("lid", leatherId);
    changeSearchParam.set("psid", productSpecsId);

    leather?.setLid(leatherId);
    leather?.setPsid(productSpecsId);

    if (!leatherId || !productSpecsId) {
      router.replace(`?${changeSearchParam.toString()}`, { scroll: true });
    } else {
      router.replace(`?${changeSearchParam.toString()}`, { scroll: true });
    }
  };

  const [activeLeather, addOptimistic] = useState<number>(
    selectedLeatherIndex ? selectedLeatherIndex : 0
  );

  const [activeLeatherName, setActiveLeatherName] = useState(
    productDetail.product_specification[0].leather_id.item_name || ""
  );
  const onLeatherSelect = (idx: number) => {
    idx = idx >= 0 ? idx : 0;

    addOptimistic(idx);
    ref.current?.swiper?.slideTo(idx);

    const psidX = productDetail.product_specification[idx]?.leather_id?._id;
    const lidX = productDetail.product_specification[idx]?._id;
    onChange(psidX, lidX);
  };

  useEffect(() => {
    onLeatherSelect(selectedLeatherIndex ? selectedLeatherIndex : 0);
    ref.current?.swiper?.slideTo(
      selectedLeatherIndex ? selectedLeatherIndex : 0
    );
  }, []);
  const ref = React.useRef<SwiperRef | null>(null);
  const { isOpen, onClose, onOpen } = useDisclosure();

  return (
    <>
      <LeatherModalblog blog="this is good" isOpen={isOpen} onClose={onClose} />

      <VStack w="full" p="1rem" gap="1rem">
        <VStack justify="center" h="12rem" w="full" position="relative">
          <Box
            position="absolute"
            left="50%"
            shadow="lg"
            transform="translate(-50%,-50%)"
            top="50%"
            height="12rem"
            rounded="full"
            width="12rem"
            bgGradient="radial(circle at center, gray.100 0%, gray.200 10%, white 100%)"
            style={{
              animation: "gradientShift 10s ease infinite",
            }}
          />
          <Swiper
            style={{ width: "100%" }}
            ref={ref}
            grabCursor={true}
            effect="coverflow"
            centeredSlides={true}
            observer={true}
            spaceBetween={40}
            observeParents={true}
            slidesPerView={"auto"}
            // autoplay={{
            //   delay: 4000,
            //   pauseOnMouseEnter: true,
            //   disableOnInteraction: true,
            //   waitForTransition: true,
            // }}
            coverflowEffect={{
              rotate: 1.1,
              stretch: 0,
              depth: 165,
              modifier: 1.5,
              slideShadows: false,
              scale: 0.85,
            }}
            modules={[EffectCoverflow, FreeMode, Autoplay]}
            className="mySwiper"
            onSlideChange={(val) => {
              onLeatherSelect(val.activeIndex);
              const leatherName =
                productDetail.product_specification[val.activeIndex].leather_id
                  .item_name;
              setActiveLeatherName(leatherName);
            }}
          >
            {productDetail.product_specification.map((el, i) => {
              const isActive = i === activeLeather;
              return (
                <SwiperSlide
                  key={el._id}
                  style={{ width: "fit-content", height: "100%" }}
                >
                  <VStack
                    justify="center"
                    position="relative"
                    // onClick={() => {
                    //   if (isActive) {
                    //     onOpen();
                    //   }
                    // }}
                  >
                    <Leathercapsule
                      isActive={isActive}
                      onLeatherSelect={(idx) => {
                        onLeatherSelect(idx);
                        ref.current?.swiper.slideTo(idx);
                      }}
                      id={i}
                      image={
                        baseUrl + el?.leather_id?.ball_image || leatherImage
                      }
                      name={el.leather_id.item_name}
                    />
                  </VStack>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </VStack>

        <LeatherName text={activeLeatherName} />
      </VStack>
    </>
  );
}
