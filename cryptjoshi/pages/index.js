import { Box } from '@chakra-ui/react'
const Home = () => {
  return (
    <Box as="h1">
    </Box>
  )
}

export async function getStaticProps(context) {
  return {
    props: {},
    revalidate: 600
  }
}

export default Home
