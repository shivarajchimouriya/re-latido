import LoaderSkeleton from "@/components/LoaderSkeleton";
import Collections from "@/features/Homepage/Collections";
import { VStack } from "@chakra-ui/react";
import React, { ReactNode, Suspense } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <VStack w="100%">
      <Suspense fallback={<LoaderSkeleton h="4rem" />}>
        {" "}<Collections />
      </Suspense>

      {children}
    </VStack>
  );
};

export default Layout;
