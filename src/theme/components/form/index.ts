import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { formAnatomy } from "@chakra-ui/anatomy";
const { defineMultiStyleConfig, definePartsStyle } =
  createMultiStyleConfigHelpers(formAnatomy.keys);
const defaultStyles = definePartsStyle({
  container: {},
});

const sm = definePartsStyle({
  container: {
        label: {
        mt: "1.6rem"
    },
    input: {
        h: "3rem"
    },
  },
});

export const FormTheme = defineMultiStyleConfig({
  baseStyle: defaultStyles,
  variants: { sm },
  defaultProps: {
    variant: "sm",
  },
});
