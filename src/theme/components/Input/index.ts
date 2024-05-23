import { StyleConfig, ThemeComponents, createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { inputAnatomy } from '@chakra-ui/anatomy'
const { definePartsStyle, defineMultiStyleConfig } =
    createMultiStyleConfigHelpers(inputAnatomy.keys)
const baseStyle = definePartsStyle({

    field: {

    },

});
const underline = definePartsStyle({
    field: {
        transitionDuration: ".4s",
        w: "full",
        py: "1rem",
        bg: 'transparent',
        borderBottom: "1px solid black",
        _active: {
            outline: "none"
        },
        _focus: {
            outline: "none",
            borderBottomWidth: "2px"

        }
    }
})


const error = definePartsStyle({
    field: {
        transitionDuration: ".4s",
        w: "full",
        py: "1rem",
        bg: 'transparent',
        borderBottom: "1px solid",
        borderColor: "error",
        _active: {
            outline: "none"
        },
        _focus: {
            outline: "none",
            borderBottomWidth: "2px"

        }
    }
})




export const inputTheme = defineMultiStyleConfig({
    baseStyle, variants: {
        underline,
        error
    }, defaultProps: { variant: "underline" }
})