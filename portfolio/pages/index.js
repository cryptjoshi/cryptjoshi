import NextLink from 'next/link'
import {Box,Container, Heading,Image,useColorModeValue,Link, Button} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraphs'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
  return (
    <Container>
      <Box borderRadius="lg" bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')} p={3} align="center">
        Hello I am Cryptjoshi;Full Stack Developer based on Earth618.
      </Box>
      <Box display={{md:'flex'}}>
        <Box flexGrow={1}>
          <Heading as="h2" variant={"page-title"}>
            Pornchai Khamrat
          </Heading>
        <p>Developer / Developer Operators / Music Composer</p>
        </Box>
        <Box flexShrink={0} mt={{base:4,md:0}} ml={{md:6}} align="center">
          <Image 
          borderColor={"whiteAlpha.800"} 
          borderWidth={2} 
          borderStyle="solid" 
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src='https://avatars.githubusercontent.com/u/105073332?s=400&u=705e27c4eea32b62f075a6b7a50da45bc1f7928a&v=4'
          alt='Profile Picture'
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Heading as="h3" variant={"section-title"}>
          Works
        </Heading>
        <Paragraph>
          Cryptjoshi is a man dev from another Universe.He came from Earth618.
          He are stayed at same Universe with Supreme Ironman,Captain Carter
          and other Iluminater.
          {''}
          <NextLink href="/works/inkdrop">
            <Link>inkdrop</Link>
          </NextLink>
        </Paragraph>
        <Box align="center" my={4}>
          <NextLink href="/works">
            <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
             My Portfolio
            </Button>
          </NextLink>
        </Box>
        </Section>
    </Container>
    
  )
}

export default Page