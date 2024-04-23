'use client';

import React, { ReactNode, createContext, useContext } from 'react';
import { TODO } from '../../../global';

interface IProps {
  children: ReactNode;
}

export const ProductDetailContext = createContext<TODO>({});

export function ProductDetailProvider({ children }: IProps) {
  const [value, setValue] = React.useState({});
  return (
    <ProductDetailContext.Provider value={{ value, setValue }}>
      {children}
    </ProductDetailContext.Provider>
  );
}

export const useProductDetailContext = () => useContext(ProductDetailContext);
