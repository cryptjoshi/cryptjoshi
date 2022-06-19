import NextLink from 'next/link'
import { Box, Container, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Paragraph from '../components/paragraphs'
import { ChevronRightIcon } from '@chakra-ui/icons'
import ToggleThemeBtn from '../components/theme-toggle-button.js'
import Prohead from '../components/profileh'
import Probanner from '../components/profileb'
import Logo from '../components/brand'
import Footer from '../components/layouts/footer'
import Home from '../components/layouts/main'
const Page = () => {
  return (
    <Container align="center">
      {/* <Prohead paddingTop={4} name="Jacky Yun" title="developer/developer Operations" head="" /> */}
      <Home />
    </Container >
  )
}

export async function getStaticProps() {
  const projects = null
  // await getTable("Projects");

  return {
    props: {
      projects,
    },
    revalidate: 600,
  };
}

export default Page
