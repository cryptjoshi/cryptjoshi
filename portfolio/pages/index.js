import { Container } from '@chakra-ui/react'
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
