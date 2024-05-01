// import Image, { ImageProps } from "next/image";
import React, { ComponentProps } from "react";
// centralized image component for whole app so that we can switch between Image component from next to img or vice versa
interface IProps extends ComponentProps<"img"> {
  height: number;
  width: number;
  rounded?: string;
}

const AppImage = ({ ...rest }: IProps) => {
  return <img style={{ borderRadius: rest.rounded }} {...rest} />;
};

export default AppImage;
