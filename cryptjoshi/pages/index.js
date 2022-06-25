import { Box, SimpleGrid, VStack } from '@chakra-ui/react'
import Section from "./../components/section"
import Card from "./../components/mycard"
const Home = ({ quotes }) => {
  return (
    <Box as="h1">
      <Section>
        <VStack spacing={8}>
          <SimpleGrid column={1} spacing={4} w="100%">
            {quotes.map((qoute) => (
              <Card title="I am Cryptjoshi" desc={qoute.q} foot={qoute.a} />
            ))}
          </SimpleGrid>
        </VStack>
      </Section>
    </Box>
  )
}

export async function getStaticProps() {

  const res = await fetch('https://zenquotes.io/api/random')
  const quotes = await res.json()
  return {
    props: {
      quotes
    },
    revalidate: 300
  }
}


export default Home
