import React from "react";
import { Box, Button, Container, VStack } from "@chakra-ui/react";
import { IProps } from "./IProps";
import { IProductResponse } from "./IProductResponse";
import ProductName from "../Collections/components/ProductName";
import ProductImage from "../Collections/components/ProductImage";
import LeatherSelection from "../Collections/components/LeatherSelection";
import { appColor } from "@/theme/foundations/colors";
import Blog from "../Collections/components/Blog";
import Description from "../Collections/components/Description";
import { API } from "@/resources";
import { logger } from "@/utils/logger";
import SizeModuleSection from "../Collections/components/SizeModuleSection";
import { env } from "@/config/environment";
import NotFound from "@/components/NotFound";

const getProductDetail = async (id: string) => {
  try {
    const res = await API.Product.byID(id);
    return res;
  } catch (error) {
    logger.log("Error", error);
  }
};

export default async function ProductDetail({ productId }: IProps) {
  const data = await getProductDetail(productId);

  const productDetail = data?.data?.productDetail;
  if (!productDetail) return <NotFound />;

  return (
    <Container>
      <VStack width="100%">
        <ProductName
          categoryId={productDetail.category._id}
          productName={productDetail.name}
          category={productDetail.category?.title}
          productId={productId}
        />
        <ProductImage secondaryImage={productDetail?.product_specification} />
          <LeatherSelection
            productDetail={productDetail}
            urlPrefix={env.S3_BASE_URL || ""}
          />
        <Box background={appColor.black} width={"100%"} maxW="500px" padding={"2rem 0"}>
          <SizeModuleSection
            productName={productDetail?.name}
            productDetail={productDetail}
            productId={productId}
          />
        </Box>
        <Description description={productDetail.description} />
        <Box
          background={appColor.black}
          width={"100%"}
          color={appColor.base}
          padding={"2rem 0"}
        >
          <Blog associated_blog={productDetail.associated_blog} />
        </Box>
      </VStack>
    </Container>
  );
}
