import React from 'react';
import { Container } from '@chakra-ui/react';
import Image from 'next/image';
import { IProductImageProps } from './IProductImageProps';

export default function ProductImage({ primaryImage, secondaryImage }: IProductImageProps) {
  console.log('image', primaryImage);
  console.log('secondary image', secondaryImage);
  return (
    <Container>
      <Image src={primaryImage} height={500} width={500} alt="product image" />
    </Container>
  );
}
