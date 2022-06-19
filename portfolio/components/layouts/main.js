import Head from 'next/head'
import { Box, VStack, Heading, Link, Text, Container } from '@chakra-ui/react'
import Navbar from './theme'
const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="theme-color" content="#2BB0EC" />
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <title>My Portfolio Jacky Yun</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        {children}
      </Container>
    </Box>
  )
}

const Home = ({ projects }) => (
  <Box>
    <VStack spacing={12}>
      <VStack spacing={4} align="start" fontSize="2xl">
        <Heading size="xl">Hey, I'm Daniel 👋</Heading>
        <VStack>
          <Text>
            I'm a designer, developer and entrepreneur of sorts. Born and
            raised in Germany and now living in the Netherlands. The focus
            of my work is the{" "}
            <Link variant="text" href="https://www.facilitator.school">
              Facilitator School
            </Link>
            . In my spare time, I work on{" "}
            <Link variant="text" href="https://markway.io">
              Markway
            </Link>
            . I also hang out on{" "}
            <Link variant="text" href="https://twitter.com/wirtzdan">
              Twitter
            </Link>{" "}
            and{" "}
            <Link
              variant="text"
              href="https://www.linkedin.com/in/wirtzdan/"
            >
              LinkedIn
            </Link>
            , where I learn, think and work in public.
          </Text>
        </VStack>
        {/* <Link href="https://twitter.com/wirtzdan" unstyled>
              <Button
                colorScheme="blue"
                rounded="lg"
                size="lg"
                leftIcon={<TwitterLogo weight="fill" />}
                mt={4}
              >
                Follow me on Twitter
              </Button>
            </Link> */}
      </VStack>

      {/* <Section> */}
      {/*   <VStack align="start" spacing={8}> */}
      {/*     <Heading size="lg">Projects</Heading> */}
      {/*     <SimpleGrid columns={1} spacing={4} mt={8} w="100%"> */}
      {/*       {projects.map((projects) => ( */}
      {/*         <ProjectCard */}
      {/*           key={projects.id} */}
      {/*           name={projects.fields.name} */}
      {/*           description={projects.fields.description} */}
      {/*           logo={projects.fields.logo} */}
      {/*           link={projects.fields.link} */}
      {/*           type={projects.fields.type} */}
      {/*         /> */}
      {/*       ))} */}
      {/*     </SimpleGrid> */}
      {/*   </VStack> */}
      {/* </Section> */}
    </VStack>
  </Box>
);
export default Home
// export default Main
