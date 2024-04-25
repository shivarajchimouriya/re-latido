import { Box } from "@chakra-ui/react";
import Image from "next/image";
import { appColor } from "@/theme/foundations/colors";

export interface AvatarProps {
  alt?: string;
  src?: string;
  width?: number;
  height?: number;
  selected?: boolean;
}

export default function Avatar({ alt, src, width = 50, height = 50, selected }: AvatarProps) {
  return (
    <Box borderRadius="100%" className="avatar" overflow="hidden" outline={selected ? `4px solid ${appColor.border}` : "none"} width={width+30} height={height+30} display="grid" placeItems="center">
      <Image alt={alt ? alt : "avatar"} src={src ? src : ""} width={width} height={height} />
    </Box>
  );
}
