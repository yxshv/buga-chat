import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const theme = extendTheme({
    styles : {
        global : props => ({
            body: {
                bg : mode('white', 'gray.800')(props)
            }
        })
    }
})

export default theme;
