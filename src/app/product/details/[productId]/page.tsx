import ProductDetailPage from '@/features/ProductDetailPage/ProductDetailPage';
import React from 'react';
import IProps from './IProps';

export default function ProductDetail({ params }: IProps) {
  return (
    <ProductDetailPage productId={params.productId} />
  );
}
