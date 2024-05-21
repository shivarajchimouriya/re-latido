import { ChakraTheme, Stepper, extendBaseTheme } from "@chakra-ui/react";
import { appColor } from "./foundations/colors";
import { inputTheme } from "./components/Input";
import { ButtonStyles } from "./components/Button";

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
        Button: ButtonStyles

    }
})


export const theme = appTheme




// { Name: "name", Value: "dsdds" }
// 1
// :
// { Name: "email", Value: "yuri@gmail" }
// 2
// :
// { Name: "phone_number", Value: "+9779803300085" }
// 3
// :
// { Name: "birthdate", Value: "05/18/2024" }
// 4
// :
// { Name: "address", Value: "Las Vegas, NV, USA" }
// 5
// :
// { Name: "gender", Value: "female" }
// 6
// :
// { Name: "given_name", Value: "ewtwet" }