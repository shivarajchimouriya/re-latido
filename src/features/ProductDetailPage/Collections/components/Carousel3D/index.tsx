import React from 'react'
import Carousel from '../Carousel';
import { Box, Grid } from '@chakra-ui/react';

interface ImageProps {
    title: string;
    product_specification_id: string;
    image: string;
    leather_id: string;
    hardware: string;
    lining: string;
}

interface IProps {
    images: ImageProps[];
    onChange: (data: any) => void;
}
interface CarouselItem {
    alt?: string;
    content: React.ReactNode;
    image: string;
    title: string;
  }
export default function Carousel3D({ images, onChange }: IProps) {
    const items: CarouselItem[] = images?.map((item: any, index: number) => ({
        alt: 'A random photo',
        image: item?.image,
        title: item?.title,
        product_specification_id: item?.product_specification_id,
        leather_id: item?.leather_id,
        content: (
          <div>
            <strong>Round Carousel</strong>
            <span>Slide number {index + 1}</span>
          </div>
        ),
      }));
    return (
        <Grid width={"100%"} minH={"320px"} paddingY={"4rem"} placeItems={"start"}>
        <Carousel
          onChange={(id: any) => {
            onChange({
              name: images[id]?.title,
              product_specification_id: images[id]?.product_specification_id,
              leather_id: images[id]?.leather_id,
              hardware: images[id]?.hardware,
              lining: images[id]?.lining,
            });
          }}
          itemWidth={200}
          showControls={false}
          items={items}
        />
      </Grid>
  )
}
