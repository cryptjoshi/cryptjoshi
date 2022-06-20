// import '../styles/globals.css'
import Head from 'next/head'
import { ChakraProvider, Box } from '@chakra-ui/react'
import customTheme from '../theme'
import Header from '../components/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider theme={customTheme}>
        <Head>
          <meta
            content='width=device-width,initial-scale=1' name='viewport' />
          <meta name='theme-color' content='#2BB0EC' />
        </Head>
        <Header />
        <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
          <Component {...pageProps} />
        </Box>
      </ChakraProvider>
    </>
  )
}

export default MyApp
