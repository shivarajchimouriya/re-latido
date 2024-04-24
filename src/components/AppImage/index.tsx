import Image, { ImageProps } from "next/image";
import React, { ComponentProps } from "react";
// centralized image component for whole app so that we can switch between Image component from next to img or vice versa
interface IProps extends ImageProps {
  height: number;
  width: number;
  rounded?: string;
}

const AppImage = ({ ...rest }: IProps) => {
  return <Image style={{ borderRadius: rest.rounded }} {...rest} />;
};

export default AppImage;
