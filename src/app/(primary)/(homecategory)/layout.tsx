import LoaderSkeleton from "@/components/LoaderSkeleton";
import Collections from "@/features/Homepage/Collections";
import { Box, VStack } from "@chakra-ui/react";
import React, { ReactNode, Suspense } from "react";
interface IProps {
  children: ReactNode;
}

const Layout = ({ children }: IProps) => {
  return (
    <VStack w="100%">
      <Box w="full" inset="0" zIndex="10">
        <Suspense fallback={<LoaderSkeleton h="4rem" />}>
          <Collections />
        </Suspense>
      </Box>
      {children}
    </VStack>
  );
};

export default Layout;
