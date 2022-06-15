import NextLink from 'next/link'
import { Box, Container, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Credits from '../components/crdits'
import Paragraph from '../components/paragraphs'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ToggleThemeBtn from '../components/theme-toggle-button.js'
import Prohead from '../components/profileh'
import skill from '../data/skill'
const Page = () => {
  return (
    <Container align="center">
      <Prohead paddingTop={4} />
      <Section>
        <Credits align={"Content"} my={4} >
          {skill && skill.map(skill =>
            <Box><div className='movie'>{skill.cast}</div>
              <div className='job'>{skill.name}</div>
              <Image
                src={skill.image}
                height={26}
                width={26}
                layout="fixed"
                rounded="md"
              />
            </Box>
          )}
        </Credits>
      </Section>

      {/* <Heading as="h3" variant={"Section-title"}> */}
      {/*   Stack */}
      {/* </Heading> */}
      {/* <Box align={"Content"} my={4}> */}
      {/*   Stack */}
      {/* </Box> */}

    </Container >
  )
}

export default Page
