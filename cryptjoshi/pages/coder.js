import { Box, Image, Wrap, WrapItem, VStack, HStack, Center } from "@chakra-ui/react"
// import DevIcon from "devicon-react-svg"
import Card from "../components/skillcard"
const devIconStyle = {
  // fill: "thistle",
  width: "150px",
}


const Coder = ({ skills }) => {
  return (
    <Box>
      <VStack>
        <Wrap spacing={4} justify={"center"}>
          {skills.filter(skill => skill.type == "skill").map((skill) =>
          (
            <WrapItem key={skill.name}>
              <Center>
                <Card title={skill.name} desc={""} type={"plain"} />
              </Center>
            </WrapItem>
          )
          )}
        </Wrap>
      </VStack>
    </Box>
  )
}

export async function getStaticProps() {
  const url = "http://localhost:3001/api/skill"
  const res = await fetch(url)
  const skills = await res.json()
  return {
    props: {
      skills
    },
    revalidate: 300
  }
}



export default Coder
