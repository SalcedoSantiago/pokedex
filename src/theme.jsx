import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
    color: {
        primary: theme.colors.orange
    },
    fonts: {
        body: `'Roboto', sans-serif`,
        heading: `'Roboto',sans-serif`
    },
    styles: {
        global: {
            body: {
                backgroundColor: "#f7f7f7"
            }
        }
    }
})