import {
  StyleConfig,
  ThemeComponents,
  createMultiStyleConfigHelpers
} from "@chakra-ui/react";
import { inputAnatomy, pinInputAnatomy } from "@chakra-ui/anatomy";
const {
  definePartsStyle,
  defineMultiStyleConfig
} = createMultiStyleConfigHelpers(pinInputAnatomy.keys);
const baseStyle = definePartsStyle({
  field: {
    transitionDuration: ".4s",
    w: "full",
    py: "1rem",
    bg: "transparent",
    borderBottom: "1px solid black",
    _active: {
      outline: "none"
    },
    _focus: {
      outline: "none",
      borderBottomWidth: "2px"
    }
  }
});
const underline = definePartsStyle({});
export const pinInput = defineMultiStyleConfig({
  baseStyle,
  variants: {
    underline
  },
  defaultProps: { variant: "underline" }
});
