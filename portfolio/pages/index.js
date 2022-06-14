import NextLink from 'next/link'
import { Box, Container, Heading, Image, useColorModeValue, Link, Button } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Credits from '../components/crdits'
import Paragraph from '../components/paragraphs'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Profile from '../components/plogo'
import ToggleThemeBtn from '../components/theme-toggle-button.js'

const Page = () => {
  return (
    <Container align="center">
      <Box flexShrink={0} mt={{ base: 4, md: 0 }} pb={5}>
        <Profile
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
      <Box flexGrow={1} pb={10}>
        <Heading as="h2" variant={"page-title"} >
          Jacky Yun
        </Heading>
        <p>Developer / Developer Operators</p>
      </Box>
      <Section delay={0.1}>
        <Layout>
          <Heading as="h3" variant={"Section-title"}>
            Skill
          </Heading>
          <Credits align={"Content"} my={4} >
            <div className='movie'>life of john doe</div>
            <div className='job'>directed by</div>
            <div className='name'>christopher nolan</div>
            <div className='job'>produced by</div>
            <div className='name'>steven spielberg</div>
            <div className='job'>screenplay by</div>
            <div className='name'>michael bay</div>
            <div className='job'>director of photography</div>
            <div className='name'>wolfgang petersen</div>
            <div className='job'>story</div>
            <div className='name'>david fincher</div>
            <div className='job'>visual effects supervisor</div>
            <div className='name'>jerry bruckheimer</div>
            <div className='job'>cast supervisor</div>
            <div className='name'>john doe</div>
            <div className='job'>directed by</div>
            <div className='name'>christopher nolan</div>
            <div className='job'>produced by</div>
            <div className='name'>steven spielberg</div>
            <div className='job'>screenplay by</div>
            <div className='name'>michael bay</div>
            <div className='job'>director of photography</div>
            <div className='name'>wolfgang petersen</div>
            <div className='job'>story</div>
            <div className='name'>david fincher</div>
            <div className='job'>visual effects supervisor</div>
            <div className='name'>jerry bruckheimer</div>
            <div className='job'>cast supervisor</div>
            <div className='name'>john doe</div>
            <div className='job'>directed by</div>
            <div className='name'>christopher nolan</div>
            <div className='job'>produced by</div>
            <div className='name'>steven spielberg</div>
            <div className='job'>screenplay by</div>
            <div className='name'>michael bay</div>
            <div className='job'>director of photography</div>
            <div className='name'>wolfgang petersen</div>
            <div className='job'>story</div>
            <div className='name'>david fincher</div>
            <div className='job'>visual effects supervisor</div>
            <div className='name'>jerry bruckheimer</div>
            <div className='job'>cast supervisor</div>
            <div className='name'>john doe</div>
            <div className='job'>directed by</div>
            <div className='name'>christopher nolan</div>
            <div className='job'>produced by</div>
            <div className='name'>steven spielberg</div>
            <div className='job'>screenplay by</div>
            <div className='name'>michael bay</div>
            <div className='job'>director of photography</div>
            <div className='name'>wolfgang petersen</div>
            <div className='job'>story</div>
            <div className='name'>david fincher</div>
            <div className='job'>visual effects supervisor</div>
            <div className='name'>jerry bruckheimer</div>
            <div className='job'>cast supervisor</div>
            <div className='name'>john doe</div>
            <div className='job'>directed by</div>
            <div className='name'>christopher nolan</div>
            <div className='job'>produced by</div>
            <div className='name'>steven spielberg</div>
            <div className='job'>screenplay by</div>
            <div className='name'>michael bay</div>
            <div className='job'>director of photography</div>
            <div className='name'>wolfgang petersen</div>
            <div className='job'>story</div>
            <div className='name'>david fincher</div>
            <div className='job'>visual effects supervisor</div>
            <div className='name'>jerry bruckheimer</div>
            <div className='job'>cast supervisor</div>
            <div className='name'>john doe</div>
          </Credits>
          {/* <Heading as="h3" variant={"Section-title"}> */}
          {/*   Stack */}
          {/* </Heading> */}
          {/* <Box align={"Content"} my={4}> */}
          {/*   Stack */}
          {/* </Box> */}
        </Layout>
      </Section>

    </Container >
  )
}

export default Page
