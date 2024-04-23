import { ChakraTheme } from "@chakra-ui/react";
import { appColor } from "./foundations/colors";

const appTheme: Partial<ChakraTheme> = {
    config: {
        initialColorMode: "light"
    },
    colors: appColor
}


export const theme = appTheme