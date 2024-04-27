import { IconButton, IconButtonProps } from "@chakra-ui/react";
import { ReactElement, forwardRef } from "react";

interface IArrowIcon extends IconButtonProps {
  icon: ReactElement;
}

const ArrrowIcon = forwardRef<
  HTMLDivElement,
  IArrowIcon
>(({ icon, ...rest }: IArrowIcon, ref) => {
  return (
    <IconButton
      ref={ref}
      fontSize="1.3rem"
      icon={icon}
      position="absolute"
      top="50%"
      zIndex={10000}
      bg="rgba(0,0,0,0.5)"
      p="3"
      display="flex"
      justifyContent="center"
      alignItems="center"
      rounded="full"
      transitionDuration=".4s"
      _active={{ transform: "scale(0.9)" }}
      {...rest}
    />
  );
});

ArrrowIcon.displayName = "navigation";
export default ArrrowIcon;
