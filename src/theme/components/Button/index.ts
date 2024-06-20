import { StyleConfig } from "@chakra-ui/react";

export const ButtonStyles: StyleConfig = {
  baseStyle: {
    _disabled: { opacity: 0.6 },
  },
  variants: {
    submit: {
      w: "full",
      p: "1rem",
      fontWeightL: "bold",
      fontSize: "1.4rem",
      color: "white",
      bg: "black",

      rounded: "md",
      border: "1px solid black",
    },
  },
};
