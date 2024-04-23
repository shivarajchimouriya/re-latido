import React from 'react';
import data from '@/data/product/productDetailResponse';
import { Container, VStack } from '@chakra-ui/react';
import { IProps } from './IProps';
import { IProductResponse } from './IProductResponse';
import ProductName from './components/ProductName';
import ProductImage from './components/ProductImage';

export default function ProductDetailPage({ productId }: IProps) {
  // do api call here

  const response: IProductResponse = data;

  return (
    <Container>
      <VStack width="100%">
        <ProductName
          productName={response.productDetail.name}
          category={response.productDetail.category.title}
          productId={productId}
        />
        <ProductImage
          primaryImage={response.productDetail.primary_image}
          secondaryImage={response.productDetail?.product_specification?.[0]?.secondary_image}
        />
      </VStack>
    </Container>
  );
}
