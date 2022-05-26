import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    styles : {
        global : props => ({
            body: {
                bg : 'gray.800',
                color : 'white',
            }
        })
    },
    initialColorMode : 'dark',
    useSystemColorMode: false,
})

export default theme;
