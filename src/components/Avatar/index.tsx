import { Box } from "@chakra-ui/react";
import { appColor } from "@/theme/foundations/colors";
import AppImage from "../AppImage";

export interface AvatarProps {
  alt?: string;
  src?: string;
  width?: number;
  height?: number;
  selected?: boolean;
}

export default function Avatar({
  alt,
  src,
  width = 40,
  height = 40,
  selected,
}: AvatarProps) {
  return (
    <>
      <Box
        borderRadius="100%"
        className="avatar"
        overflow="hidden"
        outline={selected ? `3px solid ${appColor.border}` : "none"}
        p={"1rem"}
        height={height}
        width={width}
        display="grid"
        placeItems="center"
      >
        <AppImage
          alt={alt ? alt : "avatar"}
          src={src ? src : ""}
          width={width}
          height={height}
        />
      </Box>
    </>
  );
}
