import { chakra, Box, Heading, Image, Text, IconButton, Icon, useColorModeValue, VStack, HStack, Stack, Spacer, Flex } from "@chakra-ui/react"
// import { LinkedinLogo } from "phosphor-react"
function randomSize(min, max) {
  return Math.floor(Math.random() * max) + min
}

// const lightshadow = {
//   filter: drop - shadow(0, 3, 3, rgba(0, 0, 0, 0.4))
// }
// const darkshadow = {
//   filter: drop - shadow(0, 3, 3, rgba(0, 0, 0, 1))
// }


const dImage = chakra(Image, {
  baseStyle: {
    filter: "drop-shadow(0,3,3,rgba(0,0,0,0.4))"
  }
})

const Feature = ({ title, desc, type, ...rest }) => {
  return (
    <div>
      <VStack align={"start"} justify={"flex-start"} spacing={1}>
        <HStack>
          <Image sx={useColorModeValue({ filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0, 0.4))" },{ filter: "drop-shadow(0px 3px 3px rgba(0, 0, 0,1))" })} src={`https://icongr.am/devicon/${title}-${useColorModeValue(type, "original")}.svg?size=${randomSize(48, 64)}&color=${useColorModeValue("neutralD.100", "f4f0f0")}`} />
        </HStack>
      </VStack>
      <VStack align={"end"} justify="flex-end">
        <HStack>
          <Text mt={4}>{desc}</Text>
        </HStack>
      </VStack>
    </div>
  )
}


export default Feature
