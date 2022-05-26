import { ChakraProvider, ColorModeProvider } from '@chakra-ui/react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import theme from '../theme'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider theme={theme}>
            <ColorModeProvider>
                <Component {...pageProps} />
            </ColorModeProvider>
        </ChakraProvider>
    )
}

export default MyApp
