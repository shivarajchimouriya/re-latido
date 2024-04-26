import React from 'react';
import data from '@/data/product/productDetailResponse';
import { Box, Container, VStack } from '@chakra-ui/react';
import { IProps } from './IProps';
import { IProductResponse } from './IProductResponse';
import ProductName from '../Collections/components/ProductName';
import ProductImage from '../Collections/components/ProductImage';
import LeatherSelection from '../Collections/components/LeatherSelection';
import FitSelection from '../Collections/components/FitSelection';
import { appColor } from '@/theme/foundations/colors';
import ButtonComponent from '../Collections/components/Button';
import Description from '../Collections/components/Description';
import Blog from '../Collections/components/Blog';
import environment from '@/config/environment';

export default function ProductDetail({ productId }: IProps) {
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
        <Box background={appColor.black} width={"100%"} padding={"2rem 0"}>
        <LeatherSelection urlPrefix={environment?.bucket_url || ''} />
          <FitSelection />
          <ButtonComponent />
        </Box>
        <Description description={response.productDetail.description} />
        <Box background={appColor.black} width={"100%"} color={appColor.base} padding={"2rem 0"}>
          <Blog associated_blog={response.productDetail.associated_blog} />
        </Box>
      </VStack>
    </Container>
  );
}
