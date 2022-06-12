import NextLink from 'next/link'
import { Box, Container, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraphs'
import { ChevronRightIcon } from '@chakra-ui/icons'
const Page = () => {
  return (
    <Container align="center">
      <Box flexShrink={0} mt={{ base: 4, md: 4 }}>
        <Image
          borderColor={"whiteAlpha.800"}
          borderWidth={2}
          borderStyle="solid"
          maxWidth="100px"
          display="inline-block"
          borderRadius="full"
          src='images/profile.png'
          alt='Profile Picture'
        />
      </Box>
      <Box flexGrow={1}>
        <Heading as="h2" variant={"page-title"}>
          Jacky Yun
        </Heading>
        <p>Developer / Developer Operators</p>
      </Box>
      {/* <Section delay={0.1}> */}
      {/*   <Heading as="h3" variant={"section-title"}> */}
      {/*     Works */}
      {/*   </Heading> */}
      {/*   <Paragraph> */}
      {/*     <Box align="content" */}
      {/*       my={4} */}
      {/*     >Lunar Vim</Box> */}
      {/*     Cryptjoshi is a man dev from another Universe.He came from Earth618. */}
      {/*     He are stayed at same Universe with Supreme Ironman,Captain Carter */}
      {/*     and other Iluminater. */}
      {/*     {''} */}
      {/*     <NextLink href="/works/inkdrop"> */}
      {/*       <Link>inkdrop</Link> */}
      {/*     </NextLink> */}
      {/*   </Paragraph> */}
      {/*   <Box align="center" my={4}> */}
      {/*     <NextLink href="/works"> */}
      {/*       <Button rightIcon={<ChevronRightIcon />} colorScheme="teal"> */}
      {/*         My Portfolio */}
      {/*       </Button> */}
      {/*     </NextLink> */}
      {/*   </Box> */}
      {/* </Section> */}
    </Container>
  )
}

export default Page
