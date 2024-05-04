"use client";
import React, { ReactNode, useState } from "react";
import {
  dehydrate,
  QueryClient,
  QueryClientProvider,
  useQuery
} from "@tanstack/react-query";
interface IProps {
  children: ReactNode;
}

const AppQueryProvider = ({ children }: IProps) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export default AppQueryProvider;
