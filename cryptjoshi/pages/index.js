import { Box, SimpleGrid, VStack } from '@chakra-ui/react'
import Section from "./../components/section"
import Card from "./../components/mycard"
const Home = () => {
  return (
    <Box as="h1">
      <Section>
        <VStack spacing={8}>
          <SimpleGrid column={1} spacing={4} mt={8} w="100%">
            <Card title="Hello" desc="iamdeveloperfromearth816" />
          </SimpleGrid>
        </VStack>
      </Section>
    </Box>
  )
}


export default Home
