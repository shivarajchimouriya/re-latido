import { ChakraTheme, Stepper, extendBaseTheme } from "@chakra-ui/react";
import { appColor } from "./foundations/colors";
import { inputTheme } from "./components/Input";

const appTheme: Partial<ChakraTheme> = extendBaseTheme({
    config: {
        initialColorMode: "light"
    },
    colors: appColor,
    fontSizes: {
        'fl': "1.2rem" //form  label
    },
    components: {
        Stepper: {
            baseStyle: {
                separator: {
                    bg: "var(--primary)",
                    width: "4px",
                    height: "30px"
                }
            }
        },
        Input: inputTheme,

    }
})


export const theme = appTheme