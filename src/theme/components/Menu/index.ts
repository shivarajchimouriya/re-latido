import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { menuAnatomy } from "@chakra-ui/anatomy";
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(menuAnatomy.keys);

const baseStyle = definePartsStyle({
  list: {
    px: "1rem",
    py: "0.8rem",
    borderRadius: "xl",
    border: "none",
    bg: "base",
    shadow: "xl",
    gap: "0.6rem",
    
  },
  item: {
    textColor: "gray.600",
    gap: "0.6rem",
    py: "0.4rem",
    minW: "8rem",
    fontSize: "1.4rem",
    _hover: {
      fontWeight: "semibold",
      color: "black",
    },
  },
  groupTitle: {
    textTransform: "uppercase",
    color: "white",
    textAlign: "center",
    letterSpacing: "wider",
    opacity: "0.7",
  },
  command: {
    opacity: "0.8",
    fontFamily: "mono",
    fontSize: "sm",
    letterSpacing: "tighter",
    pl: "4",
  },
});

export const MenuTheme = defineMultiStyleConfig({ baseStyle });
