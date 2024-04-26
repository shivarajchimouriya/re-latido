import { ChakraTheme, Stepper } from "@chakra-ui/react";
import { appColor } from "./foundations/colors";

const appTheme: Partial<ChakraTheme> = {
    config: {
        initialColorMode: "light"
    },
    colors: appColor,
    components: {
        Stepper: {
            baseStyle: {
                separator: {
                    bg: "var(--primary)",
                    width: "4px",
                    height: "30px"
                }
            }
        }
    }
}


export const theme = appTheme