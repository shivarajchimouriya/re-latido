import ProductDetailPage from '@/features/ProductDetailPage/ProductDetail';
import React from 'react';
import { ProductDetailProvider } from '@/contexts/ProductDetailContext';
import IProps from './IProps';

export default function ProductDetail({ params }: IProps) {
  return (
    <ProductDetailProvider>
      <ProductDetailPage productId={params.productId} />
    </ProductDetailProvider>
  );
}
