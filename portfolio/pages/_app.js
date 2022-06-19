import { Box, ChakraProvider } from "@chakra-ui/react";
import Head from 'next/head'
import Layout from '../components/layouts/main'
import Fonts from "../components/fonts";
import theme from "../libs/theme";
import { AnimatePresence } from 'framer-motion'
import '../styles/styles.css'
import Navbar from '../components/layouts/theme'
const Website = ({ Component, pageProps, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      {/* <Layout router={router}> */}
      <AnimatePresence exitBeforeEnter initial={true}>
        <Head>
          <meta
            content="width=device-width, initial-scale=1"
            name="viewport"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="96x96"
            href="/favicon.png"
          />
          <meta name="theme-color" content="#2BB0EC" />
        </Head>
        <Navbar />
        <Box as="main" pt={{ base: 16, md: 32 }} pb={{ base: 24, md: 16 }}>
          <Component  {...pageProps} key={router.route} />
        </Box>
      </AnimatePresence>
      {/* </Layout> */}
    </ChakraProvider>
  )
}

export default Website
