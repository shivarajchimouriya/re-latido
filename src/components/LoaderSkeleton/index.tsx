import { Box, BoxProps } from "@chakra-ui/react";
import React from "react";

interface IProps extends BoxProps {}

const LoaderSkeleton = ({ ...rest }: IProps) => {
  return <Box h="20rem" className="skeleton" {...rest} />;
};

export default LoaderSkeleton;
