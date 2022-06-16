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
import Probanner from '../components/profileb'
import Logo from '../components/brand'
import skill from '../data/skill'


const Page = () => {
  return (
    <Container align="center">
      <Prohead paddingTop={4} name="Jacky Yun" title="developer/developer Operations" head="Skill" />
      <Section height='90px'>
        <Credits align={"Content"} my={4} >
          {skill && skill.map((skill, index) =>
            <Box paddingBottom={15} key={index}>
              <Logo src={skill.image} />
              <div className='movie'>{skill.cast}</div>
              <div className='job'>{skill.name}</div>
            </Box>
          )}
        </Credits>
      </Section>
      <Probanner mt={40} name="Stack" />
      <Section>

      </Section>
      <Box as="footer">

      </Box>
    </Container >
  )
}

export default Page
