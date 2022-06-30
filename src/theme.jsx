import { extendTheme, theme } from "@chakra-ui/react";


export default extendTheme({
    color: {
        primary: theme.colors.orange
    },
    fonts: {
        body: `'Poppins', sans-serif`,
    },
    styles: {
        global: {
            body: {
                backgroundColor: '#f2f2f2'
            }
        }
    }
})