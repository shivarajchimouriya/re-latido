import Image, { ImageProps } from "next/image";
import React, { ComponentProps } from "react";
// centralized image component for whole app so that we can switch between Image component from next to img or vice versa
interface IProps extends ImageProps {
  height: number;
  width: number;
}

const AppImage = ({ ...rest }: IProps) => {
  return <Image {...rest} />;
};

export default AppImage;
