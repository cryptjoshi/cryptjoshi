
import { container, Box, Heading, SimpleGrid, Divider, Container } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbinkdrop from '../public/images/logo.png'
const Works = () => {
  return (
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Works
      </Heading>
      <SimpleGrid column={[1, 2, 2]} gap={6} >
        <Section>
          <WorkGridItem id="inkdrop" title="Inkdrop" thumbnail={thumbinkdrop}>
            A markdown note-talking app
          </WorkGridItem>
        </Section>
      </SimpleGrid>
    </Container>
  )
}

export default Works
