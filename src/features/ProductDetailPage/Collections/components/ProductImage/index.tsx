import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react';
import { IProductImageProps } from './IProductImageProps';
import AppImage from '@/components/AppImage';
import Avatar from '@/components/Avatar';

export default function ProductImage({ primaryImage, secondaryImage }: IProductImageProps) {
  return (
    <Container paddingBottom="2rem">
      {/* <AppImage src={primaryImage} height={500} width={500} alt="product image" /> */}
      <Box>
        {secondaryImage.map((image, index) => (
        <Box hidden={index !== 1}>
        <AppImage src={image} height={300*1.5} width={200*1.5} alt="product image" />
        </Box>
      ))}
      </Box>
      <Box>
        <Flex gap={"2rem"} width="full" justify="center">
          {secondaryImage?.map((image, index) => (
            <Avatar selected={index === 1 && true} alt={`image ${index}`} src={image} height={20} width={20}  />
          ))}
        </Flex>
      </Box>
    </Container>
  );
}
